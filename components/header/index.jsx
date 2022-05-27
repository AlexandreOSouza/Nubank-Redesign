import React, {useRef, useEffect, useState} from 'react';
import { StyleSheet, Image, Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    logo: {
        width: 60,
        height: 44
    }
});

export const Header = () => {
    return (
        <Animated.View style={[styles.container]}>
            <Image style={styles.logo} source={require('../../public/img/logo-2.png')} />
        </Animated.View> 
    )
}


