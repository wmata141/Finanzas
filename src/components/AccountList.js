import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Dimensions } from 'react-native';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import ButtonGradient from './ButtonGradient';
import AccountItem from './AccountItem';
import AccountModal from './AccountModal';
import Alert from './Alert';
import { colors } from '../constants';

const AccountList = () => {
    const [registers, setRregisters] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [registerModal, setAccountModal] = useState({});
    const [newQuantity, setNewQuantity] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setRregisters(registers.sort((a, b) => (a.date < b.date ? 1 : -1)));
    }, [registers]);

    const handleFocusInput = () => {
        inputRef.current.focus();
    };

    const onChangeTextQuantity = (text) => {
        const isValidInput = /^-?\d*$/.test(text);

        if (isValidInput) {
            setQuantity(text)
        }
    };

    const onChangeTextNewQuantity = (text) => {
        // const isValidInput = /^-?\d*$/.test(text);

        // if (isValidInput) {
            setNewQuantity(text)
        // }
    };

    const getData = async () => {
        try {
            const registersGetItem = await ReactNativeAsyncStorage.getItem('registers');
            if (registersGetItem != null) {
                const registerParse = JSON.parse(registersGetItem)
                setRregisters(registerParse.sort((a, b) => (a.date < b.date ? 1 : -1)));
            }
        } catch (error) {
            console.log(error);
            Alert('Error', 'Something was wrong')
        }
    };

    const addAccount = async () => {
        if (name !== '' && quantity !== '') {
            try {
                const date = new Date();
                const now = date.getTime().toString();

                const newAccount = {
                    id: now,
                    name: name,
                    quantity: quantity,
                    done: false,
                    date: new Date
                }

                setRregisters([...registers, newAccount]);
                setName('');
                setQuantity('')

                const registersString = JSON.stringify([...registers, newAccount]);
                await ReactNativeAsyncStorage.setItem("registers", registersString);

                handleFocusInput()

            } catch (error) {
                console.log(error);
                Alert('Error', 'Something was wrong')
            }
        }
    };

    const deleteAccount = async (id) => {
        try {
            const registersFiltered = registers.filter(item => item.id !== id);
            setRregisters(registersFiltered);
            const registersFilteredString = JSON.stringify(registersFiltered)
            await ReactNativeAsyncStorage.setItem("registers", registersFilteredString);

        } catch (error) {
            console.log("error");
            Alert('Error', 'Something was wrong')
        }

        handleModal()
    };

    const editQuantity = async (id) => {
        try {
            const arrayConPosiciones = { ...registers }

            const arraySinPosiciones = Object.values(arrayConPosiciones);
            arraySinPosiciones.forEach(item => {
                if (item.id === id) {
                    item.quantity = newQuantity;
                }
            });

            setRregisters(arraySinPosiciones)
            const arraySinPosicionesString = JSON.stringify(arraySinPosiciones)
            await ReactNativeAsyncStorage.setItem("registers", arraySinPosicionesString);
        } catch (error) {
            console.log("error");
            Alert('Error', 'Something was wrong')
        }

        handleModal()
    };

    const editAccount = async (item) => {
        const itemModalAux = Object.assign({}, item);
        setAccountModal(itemModalAux)
        setNewQuantity(itemModalAux.quantity)
        setShowModal(true)
    }

    const handleModal = () => {
        setShowModal(false)
        setAccountModal({})
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Finances $</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Name"
                    value={name}
                    onChangeText={(texto) => setName(texto)}
                    style={styles.textInput}
                    ref={inputRef}
                />
                <TextInput
                    placeholder="Total"
                    value={quantity}
                    onChangeText={(texto) => onChangeTextQuantity(texto.toString())}
                    style={styles.textInput}
                    keyboardType="number-pad"
                />
                <View style={styles.addButton}>
                    <ButtonGradient
                        textButton={'Add'}
                        onPress={addAccount}
                        colors={[colors.BLUEONE, colors.BLUETWO]}
                    />
                </View>
            </View>

            <FlatList
                data={registers}
                renderItem={({ item }) => (
                    <AccountItem item={item} editAccount={editAccount} editQuantity={editQuantity} deleteAccount={deleteAccount} showModal={showModal} />
                )}
                keyExtractor={(item) => item.id}
                style={{ marginTop: 20 }}
            />

            <AccountModal
                registerModal={registerModal}
                showModal={showModal}
                setShowModal={setShowModal}
                newQuantity={newQuantity}
                deleteAccount={deleteAccount}
                handleModal={handleModal}
                editQuantity={editQuantity}
                onChangeTextNewQuantity={onChangeTextNewQuantity}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginTop: 40, marginBottom: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        width: Dimensions.get('screen').width * 0.35,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: colors.BLUEONE,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5
    },
    addButton: {
        width: Dimensions.get('screen').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
});

export default AccountList;