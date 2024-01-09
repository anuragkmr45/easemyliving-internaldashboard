import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import Img from '../../utils/images/signup.jpg';

const Editing = () => {
    const images = [Img, Img, Img, Img,Img, Img];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.gallery}>
                {images.map((image, index) => (
                    <Image key={index} source={image} style={styles.image} />
                ))}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    gallery: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 8,
        margin: 10,
    },
});

export default Editing;
