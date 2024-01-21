import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Alert, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';

import BottomNav from '../../../../components/bottom-navigations/index';
import SettingScreen from '../../settings/index';
import HorizontalCarousel from '../../../../components/carousel/horizontal/index';

const HostelDtls = () => {

    const askCameraPermissions = async () => {
        try {
            await request(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                console.log('camera permissions : ', result);
            });
        } catch (error) {
            console.error('Erorr while fetching msg permission : ', error);
        }
    };

    useEffect(() => {
        askCameraPermissions();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <BottomNav NavScreen1={HostelDtlScreen} NavScreen2={SettingScreen} roomid="4567" />
        </SafeAreaView>
    );
};

const HostelDtlScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        'https://picsum.photos/700',
        'https://picsum.photos/600',
        'https://picsum.photos/500',
        'https://picsum.photos/400',
        'https://picsum.photos/300',
        'https://picsum.photos/200',
    ];


    const handleSelectImage = useCallback(() => {
        const options = {
            mediaType: 'photo',
            // maxWidth: 800,
            // maxHeight: 600,
            // quality: 0.8,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.error('ImagePicker Error: ', response.errorCode, response.errorMessage);
            } else {
                // Use the selected image
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

    // const images = selectedImage ? [selectedImage, ...initialImages] : initialImages;

    return (
        <SafeAreaView>
            <HorizontalCarousel images={images} />
            <View style={styles.btngrp}>
                <Button mode="contained" onPress={handleSelectImage} >Add Image From Device</Button>
                <Button mode="elevated" onPress={handleOpenCamera}>Open Camera</Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
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
