import React, {useEffect, useState} from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

const SplashScreen = (props) => {
    const {navigation} = props;

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Drawer');
        }, 3000);
    }, []);
  return (
    <View style={styles.mainContainer}>
        <ImageBackground
            style={styles.ImageBackground}
            source={require('../../assets/images/splash.png')}
        >
            <Image
                style={styles.image}
                source={require('../../assets/images/splash-text.png')}
            />
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '150%',
        resizeMode: 'contain'
    }
});
export default SplashScreen;