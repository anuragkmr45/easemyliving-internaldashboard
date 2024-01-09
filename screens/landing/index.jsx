import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LandingPage = () => {
    const navigation = useNavigation();

    const handleLoginClick = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.middleContainer}>
                <Image style={styles.logo} source={require('../../utils/images/logo.png')} />
            </View>

            <Button style={styles.button} onPress={handleLoginClick}>
                <Text style={styles.buttonText}>Login</Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#4272f5',
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
        marginBottom: 100,
    },

    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LandingPage;
