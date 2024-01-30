import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Modal, Text, Image } from 'react-native';
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

    const handleProcessImg = async (img) => {
        try {
            const imagePath = await getWatermarkedImg(img);
            setSelectedImage(imagePath);
        } catch (error) {
            console.error('Error while processign img: ', error);
        }
    };

    const handleSelectImage = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 800,
            maxHeight: 600,
        };

        launchImageLibrary(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error: ', response.errorCode, response.errorMessage);
            } else {
                const imagePath = response.assets[0]?.uri || null;
                setSelectedImage(imagePath);
                setModalVisible(false);
                await handleProcessImg(imagePath);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOpenCamera = useCallback(() => {
        const options = {
            mediaType: 'photo',
        };

        launchCamera(options, async (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.errorCode) {
                console.error('Camera Error: ', response.errorCode, response.errorMessage);
            } else {
                const imagePath = response.assets[0]?.uri || null;
                setSelectedImage(imagePath);
                setModalVisible(false);
                await handleProcessImg(imagePath);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.centeredContainer}>
                <HorizontalCarousel images={images} />
            </View> */}
            <View style={styles.centeredContainer}>
                {selectedImage ? (
                    <Image source={{ uri: selectedImage }} style={styles.imageStyle} />
                ) : (
                    <HorizontalCarousel images={images} />
                )}
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
                            <Button
                                style={{ backgroundColor: 'black', marginHorizontal: 10 }}
                                mode="contained"
                                onPress={handleSelectImage}>
                                From Device
                            </Button>
                            <Button
                                style={{ marginHorizontal: 10 }}
                                mode="outlined"
                                onPress={handleOpenCamera}>
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
    imageStyle: {
        width: '100%', // or specify your desired width
        height: '100%', // or specify your desired height
        resizeMode: 'contain', // adjust this based on your image requirements
    },
});

export default HostelDtlScreen;


