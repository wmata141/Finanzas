import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants';

const AccountItem = ({ item, editAccount }) => {
    const dateTime = new Date(item.date);

    return (
        <View style={styles.listItemContainer}>
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => editAccount(item)}
            >
                <View style={styles.itemText}>
                    <View>
                        <Text
                            style={[
                                item.done ? styles.textDone : styles.text,
                                item.quantity >= 0 ? { color: colors.GREENONE } : { color: colors.REDONE }
                            ]}
                        >{item.name}
                        </Text>
                    </View>
                    <View style={styles.montoFechaContainer}>
                        <Text
                            style={[
                                item.done ? styles.textDone : styles.text,
                                item.quantity >= 0 ? { color: colors.GREENONE } : { color: colors.REDONE }
                            ]}
                        >{new Intl.NumberFormat("de-DE").format(item.quantity)}$
                        </Text>
                        <Text style={[
                            styles.fechaContainer, item.done ? styles.textDone : styles.text,
                            item.quantity >= 0 ? { color: colors.GREENONE } : { color: colors.REDONE }
                        ]}
                        >
                            {dateTime.toLocaleDateString('es-ES')}
                        </Text>
                    </View>
                </View>
            </ TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 10,
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: colors.GREYTWO,
        borderStyle: 'dashed',
    },
    itemText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    montoFechaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fechaContainer: {
        marginLeft: 10
    },
});

export default AccountItem;