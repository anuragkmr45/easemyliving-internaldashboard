import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { usePermissionsContext } from '../../context/PermissionsProvider';
import InputCard from '../../components/cards/inputcard';

const HomeScreen = () => {

    const navigation = useNavigation();
    const { getLocationPermissions } = usePermissionsContext();

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    useEffect(() => {
        const handleLocationPermission = async () => {
            try {
                await getLocationPermissions();
            } catch (error) {
                console.error('Error while getting location permission: ', error);
            }
        }

        handleLocationPermission();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <InputCard screen="HostelList" />
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
