import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 60,
        flexDirection: 'row',
    },
    button: {
        padding: 15,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    buttonText: {
        color: '#f2edf5',
        marginLeft: 5
    },

    selectedButton: {
        backgroundColor: '#8336ba',
    }
});

const MENU_ITEMS = [
    {
        text: 'Cartão',
        id: 1,
        iconName: 'md-card-outline'
    },
    {
        text: 'Conta',
        id: 2,
        iconName: 'ios-cash-outline'
    },
    {
        text: 'Atividade',
        id: 3,
        iconName: 'md-flash-outline'
    },
    {
        text: 'Perfil',
        id: 4,
        iconName: 'ios-person-outline'
    }
]

export const Footer = () => {
    const [ selectedId, setSelectedId] = useState(1); 

    return (
        <View style={styles.container}>
            {MENU_ITEMS.map(item => (
                <View key={item.id} onTouchStart={e => setSelectedId(item.id)} style={[styles.button, selectedId === item.id && styles.selectedButton]}>
                    <Icon name={item.iconName} size={20} color="#f2edf5"/>
                    {item.id === selectedId && (
                        <Text 
                            id={item.text} 
                            style={styles.buttonText}>{item.text}</Text>    
                    )}
                </View>
            ))}
        </View>
    )
}