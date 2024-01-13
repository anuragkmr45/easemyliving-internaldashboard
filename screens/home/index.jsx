import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { request, PERMISSIONS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';

import InputCard from '../../components/cards/inputcard';

const HomeScreen = () => {

    const navigation = useNavigation();

    const askLocationPermissions = async () => {
        try {
            await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
                console.log('location permission : ', result);
            });
        } catch (error) {
            console.error('Error while fetching location permission ; ', error);
        }
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    useEffect(() => {
        askLocationPermissions();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <InputCard />
            </View>

            <Button mode="contained" style={styles.btn} onPress={handleLogout}>
                Logout
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 45,
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    btn: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'rgba(220, 54, 46, 1)',
    },
});

export default HomeScreen;
