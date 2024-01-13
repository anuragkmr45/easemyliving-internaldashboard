import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const InputCard = () => {

    const navigation = useNavigation();

    const [roomID, setRoomID] = useState('');

    const hadleSubmit = () => {
        navigation.navigate('Editing');
    };

    return (
        <Card style={styles.container}>
            <TextInput
                label="Room ID"
                // placeholder="Room ID"
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
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        minWidth: '100%',
        elevation: 10, // Elevation for the box shadow
        shadowColor: 'rgba(100, 10, 10, 0.99)',
        shadowOffset: { width: 0, height: 35 },
        shadowOpacity: 1,
        shadowRadius: 77,
        marginBottom: 20, // Adjust the marginBottom as needed
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

export default InputCard;
