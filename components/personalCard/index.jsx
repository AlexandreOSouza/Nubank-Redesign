import React from 'react';
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        marginTop: 30,
        elevation: 11,
        marginBottom: 30,
      },
      box: {
        width: '100%',
        maxHeight: 240,
        minHeight: 100,
        borderRadius: 15,
        padding: 40,
        display: 'flex',
        justifyContent: 'space-between'
      },

      cardHeader: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
      },

      cardPrice: {
          display: 'flex',
          flexDirection: 'row'
      },

      cardTextSM: {
          color: 'white',
          fontSize: 12,
          padding: 2
      },

      cardTextMDBOLD: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },

      cardTextMD: {
        color: 'white',
        fontSize: 18,
      },

      dotCardNumber: {
        color: 'white',
        fontSize: 6,
        marginRight: 27,
        letterSpacing: 2,
        marginTop: 5
      },

      cardNumberContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
      },

      cardLogo: {
            width: 13,
            height: 13,
            marginRight: 4,
            marginTop: 2
      },

      fatContainer: {
        display: 'flex',
        flexDirection: 'row'
    },

      
});

export const PersonalCard = ({ height, foldHeader }) => {
    return (
        <Animated.View style={[styles.container]}>
            <LinearGradient 
                colors={['#8f39cc', '#8f39cc', '#8136b5', '#8f39cc' , '#8f39cc']} 
                start={{
                    x: 0,
                    y: 0
                }}
                end={{
                    x: 1,
                    y: 1
                }}
                style={[styles.box, {height: height}]}>
                    <View style={styles.cardHeader}>
                        <View style={styles.fatContainer}>
                            <Image style={styles.cardLogo} source={require('../../public/img/credit-card.png')} />
                            <Text style={styles.cardTextSM}>FATURA</Text>
                        </View>
                        <View style={styles.cardPrice}>
                            <Text style={styles.cardTextSM}>R$</Text>
                            <Text style={styles.cardTextMDBOLD}>1.742,36</Text>
                        </View>
                    </View>
                    {!foldHeader && (
                        <View>
                            <Text style={styles.cardTextMD}>ALEXANDRE SOUZA</Text>
                            <View style={styles.cardNumberContainer}>
                                <Text style={styles.dotCardNumber}>{'\u2B24'} {'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>
                                <Text style={styles.dotCardNumber}>{'\u2B24'} {'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>
                                <Text style={styles.dotCardNumber}>{'\u2B24'} {'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>
                                <Text style={styles.cardTextMD}>9137</Text>
                            </View>
                        </View>
                    )}
            </LinearGradient>
           
        </Animated.View>
    )
}


