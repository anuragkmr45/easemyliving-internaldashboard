import React, { useCallback, useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const UploadImageScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleUploadImage = useCallback(() => {
        // Implement your image upload logic here
        if (selectedImage) {
            Alert.alert('Image Upload', 'Implement your image upload logic here');
        } else {
            Alert.alert('No Image Selected', 'Please select an image before uploading.');
        }
    }, [selectedImage]);

    return (
        <View style={styles.container}>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
            <Button title="Select Image" onPress={handleSelectImage} />
            <Button title="Upload Image" onPress={handleUploadImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
});

export default UploadImageScreen;
