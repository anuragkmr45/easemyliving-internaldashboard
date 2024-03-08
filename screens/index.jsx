import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProgressBarLoader from '../components/loader/ProgressBarLoader/index';

const LandingPage = () => {

    const navigation = useNavigation();
    const bounceValue = useRef(new Animated.Value(0.1)).current;

    useEffect(() => {

        const bounceAnimation = Animated.sequence([
            Animated.timing(bounceValue, { toValue: 1.04, duration: 1000, easing: Easing.inOut(Easing.ease), useNativeDriver: false }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4, useNativeDriver: false }),
        ]);

        const timeoutId = setTimeout(() => {
            navigation.navigate('Login');
        }, 1500);

        Animated.loop(bounceAnimation).start();

        return () => {
            clearTimeout(timeoutId);
            bounceValue.setValue(1);
        };
    }, [navigation, bounceValue]);

    return (
        <View style={styles.container}>
            <Animated.Image
                style={[styles.logo, { transform: [{ scale: bounceValue }] }]}
                source={require('../utils/images/logo.png')}
            />
            <ProgressBarLoader />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'center',
    },
    logo: {
        height: 130,
        width: 250,
        alignSelf: 'center',
        marginBottom: 30,
    },
});

export default LandingPage;
