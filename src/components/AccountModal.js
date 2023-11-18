import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Modal } from 'react-native';
import ButtonGradient from './ButtonGradient';
import { colors } from '../constants';

const AccountModal = ({ registerModal, showModal, setShowModal, newQuantity, onChangeTextNewQuantity, deleteAccount, handleModal, editQuantity }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            onRequestClose={() => { setShowModal() }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{registerModal.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TextInput
                            value={newQuantity}
                            onChangeText={(texto) => onChangeTextNewQuantity(texto.toString())}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={styles.separatorVertical} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={styles.button}>
                            <ButtonGradient
                                textButton={'Eliminar'}
                                onPress={() => deleteAccount(registerModal.id)}
                                colors={[colors.REDONE, colors.REDTWO]}
                                disabled={registerModal.done}
                            />
                        </View>
                        <View style={styles.separatorHorizontal} />
                        <View style={styles.button}>
                            <ButtonGradient
                                textButton={'Cancelar '}
                                onPress={() => handleModal()}
                                colors={[colors.GREYONE, colors.GREYTWO]}
                            />
                        </View>
                        <View style={styles.separatorHorizontal} />
                        <View style={styles.button}>
                            <ButtonGradient
                                textButton={'Editar '}
                                onPress={() => editQuantity(registerModal.id)}
                                colors={[colors.GREENONE, colors.GREENTWO]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 10
    },
    button: {
        width: Dimensions.get('screen').width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },    
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    separatorHorizontal: {
        height: 1,
        marginStart: 5,
        marginEnd: 5,
    },
    separatorVertical: {
        height: 1,
        backgroundColor: 'black',
        marginTop: 5,
        marginBottom: 5,
    }
});

export default AccountModal;