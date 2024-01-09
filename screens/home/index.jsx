import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import BlinkingBoxesSkeleton from '../../components/BlinkingBoxesSkeleton';

const HomeScreen = () => {

    const navigation = useNavigation();

    const [roomID, setRoomID] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const hadleSubmit = () => {
        setIsModalVisible(false);
        navigation.navigate('Editing');
    }

    useEffect(() => {
        setIsModalVisible(true);

        return () => setIsModalVisible(false);
    }, []);

    return (
        <View
            style={styles.container}
        >
            <BlinkingBoxesSkeleton />
            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            label="Room ID"
                            placeholder="Room ID"
                            value={roomID}
                            mode="outlined"
                            style={styles.input}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCompleteType="tel"
                            textContentType="telephoneNumber"
                            onChangeText={(e) => setRoomID(e)}
                        />
                        <Button mode="contained" style={styles.btn} onPress={hadleSubmit}>
                            Submit
                        </Button>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#778899',
        paddingHorizontal: 16,
        paddingTop: 45,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.84)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        color: 'black',
    },
    input: {
        width: '100%',
        marginVertical: 10,
    },
    btn: {
        width: '100%',
        marginVertical: 10,
        backgroundColor: 'black',
    },
});

export default HomeScreen;
