import React, {useRef, useEffect, useState} from 'react';
import { StyleSheet, Image, Animated } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'green'
    },
    logo: {
        width: 60,
        height: 44
    }
});

export const Header = ({ hide }) => {
    const fadeAnim = useRef(new Animated.Value(hide ? 1 : 0)).current
    const fadeHeightAnim = useRef(new Animated.Value(hide ? 5 : 0)).current 

    const [renderComponent, setRenderComponent] = useState(true);

    useEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: hide ? 0 : 1,
            duration: 500,
            useNativeDriver: true
          }
        ).start();
    }, [fadeAnim, hide]);

    useEffect(() => {
        Animated.timing(
            fadeHeightAnim,
          {
            toValue: hide ? 0 : 1,
            duration: 700,
            useNativeDriver: true
          }
        ).start(() => {setRenderComponent(hide ? true : false)});
    }, [fadeHeightAnim, hide])

    return (
        <Animated.View style={[styles.container, {display: renderComponent? 'flex' : 'none', opacity: fadeAnim, transform: [{scaleY: fadeHeightAnim}]}]}>
            <Image style={styles.logo} source={require('../../public/img/logo-2.png')} />
        </Animated.View> 
    )
}


