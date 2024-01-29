import { ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';

const SettingScreen = () => {
    return (
        <ScrollView>
            <Text style={styles.text} >
                Comming Soon
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
        flex: 1,
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingScreen;
