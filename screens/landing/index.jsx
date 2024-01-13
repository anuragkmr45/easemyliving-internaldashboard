import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProgressBarLoader from '../../components/loader/ProgressBarLoader';

const LandingPage = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigation.navigate('Login');
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View style={styles.middleContainer}>
                <Image style={styles.logo} source={require('../../utils/images/logo.png')} />
            </View>
            <ProgressBarLoader />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 130,
        width: 250,
        alignSelf: 'center',
    },
});

export default LandingPage;
