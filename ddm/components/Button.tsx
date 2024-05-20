import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({title, onPress}){
    return(
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.txtBtn}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
        marginTop: 10,
        backgroundColor: '#6200EE',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    txtBtn:{
        color: '#fcfcfc',
        fontSize: 20,
        fontWeight: 'bold',
    }
});