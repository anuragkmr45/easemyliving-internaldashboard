import React, { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';

import BottomNav from '../../../components/bottom-navigations/index';
import SettingScreen from '../settings/index';
import HorizontalCarousel from '../../../components/carousel/horizontal/index';

const images = [
    'https://picsum.photos/700',
    'https://picsum.photos/600',
    'https://picsum.photos/500',
    'https://picsum.photos/400',
    'https://picsum.photos/300',
    'https://picsum.photos/200',
];
const HostelDtls = () => {

    return (
        <SafeAreaView style={styles.container}>
            <BottomNav NavScreen1={HostelDtlScreen} NavScreen2={SettingScreen} roomid="4567" />
        </SafeAreaView>
    );
};

const HostelDtlScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSelectImage = useCallback(async () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 800,
            maxHeight: 600,
            // quality: 0.8,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error: ', response.errorCode, response.errorMessage);
            } else {
                // const compressedImage = compressImage(response.assets[0]?.uri || null);
                setSelectedImage(response.assets[0]?.uri || null);
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
            }
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredContainer}>
                <HorizontalCarousel images={images} />
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.btngrp}>
                    <Button mode="contained" onPress={handleSelectImage} >Add Image From Device</Button>
                    <Button mode="elevated" onPress={handleOpenCamera}>Open Camera</Button>
                </View>
            </View>
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
        justifyContent: 'flex-end',
    },
    gallaryImgs: {
        height: 80,
        width: 130,
        marginHorizontal: 3,
        borderWidth: 2,
        borderRadius: 5,
    },
    selectedImage: {
        height: 300,
        width: '100%',
        resizeMode: 'cover',
        marginVertical: 10,
    },
    btngrp: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default HostelDtls;
