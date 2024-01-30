import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, Image } from 'react-native';
import { Button } from 'react-native-paper';

const HostelDtlScreen = ({ img }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={{ uri: img }} style={styles.imageStyle} />
                        <View style={styles.btngrp} >
                            <Button
                                style={{ backgroundColor: 'black', marginHorizontal: 10 }}
                                mode="contained"
                            // onPress={handleSelectImage}
                            >
                                Add Image
                            </Button>
                            <Button
                                style={{ marginHorizontal: 10 }}
                                mode="outlined"
                                onPress={() => setModalVisible(false)}
                            >
                                Cancel
                            </Button>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    imageStyle: {
        width: '100%', // or specify your desired width
        height: '100%', // or specify your desired height
        resizeMode: 'contain', // adjust this based on your image requirements
    },
});

export default HostelDtlScreen;


