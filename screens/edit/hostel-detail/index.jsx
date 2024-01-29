import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import { useImageOperationContext } from '../../../context/ImageOperationProvider';
import HorizontalCarousel from '../../../components/carousel/horizontal/index';

const images = [
    'https://picsum.photos/800',
    'https://picsum.photos/600',
    'https://picsum.photos/500',
    'https://picsum.photos/400',
    'https://picsum.photos/300',
    'https://picsum.photos/200',
];

const HostelDtlScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const { getCompressedImg, getWatermarkedImg } = useImageOperationContext();

    const handleSelectImage = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 800,
            maxHeight: 600,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error: ', response.errorCode, response.errorMessage);
            } else {
                setSelectedImage(response.assets[0]?.uri || null);
                setModalVisible(false); // Close the modal after selecting an image
            }
        });
    }, []);

    const handleOpenCamera = useCallback(() => {
        const options = {
            mediaType: 'photo',
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.error('Camera Error: ', response.errorCode, response.errorMessage);
            } else {
                setSelectedImage(response.assets[0]?.uri || null);
                setModalVisible(false); // Close the modal after taking a photo
            }
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredContainer}>
                <HorizontalCarousel images={images} />
            </View>
            <View style={styles.bottomContainer}>
                <Button
                    mode="contained"
                    icon="upload"
                    onPress={() => setModalVisible(true)}
                    style={{ backgroundColor: 'black', marginHorizontal: 10 }}
                >
                    Upload New Images
                </Button>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.btngrp} >
                            <Button style={{ backgroundColor: 'black', marginHorizontal: 10 }} mode="contained" onPress={handleSelectImage}>
                                From Device
                            </Button>
                            <Button style={{ marginHorizontal: 10 }} mode="outlined" onPress={handleOpenCamera}>
                                Open Camera
                            </Button>
                        </View>
                        <Button style={{ alignSelf: 'flex-end', marginTop: 20 }} onPress={() => setModalVisible(false)}>
                            Cancel
                        </Button>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        justifyContent: 'center',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
    },
    bottomContainer: {
        // justifyContent: 'flex-end',
        marginBottom: 10,
    },
    btngrp: {
        // marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    // Styles for Modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
});

export default HostelDtlScreen;


