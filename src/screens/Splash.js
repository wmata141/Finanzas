import React, { useEffect } from 'react';
import { Animated, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants';

const Splash = ({ navigation }) => {
    const rotationValue = new Animated.Value(0);

    useEffect(() => {
        const animation = Animated.loop(
            Animated.timing(rotationValue, { toValue: 1, duration: 3000, useNativeDriver: true })
        );
        animation.start();

        setTimeout(() => {
            handleToLogin()
        }, 2800);
    }, []);

    const rotateInterpolate = rotationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const handleToLogin = () => {
        navigation.navigate('LogIn')
    };

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={[colors.BLUEONE, colors.BLUETWO]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                <TouchableOpacity onPress={handleToLogin} style={styles.container}>
                    <Animated.Image
                        style={[styles.image, { transform: [{ rotate: rotateInterpolate }] }]}
                        source={require('../assets/react.png')}
                    />
                    <Text style={styles.text}>React Native Application</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    gradient: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Splash