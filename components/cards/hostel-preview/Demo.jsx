import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageCarousel = ({ images }) => {

    return (
        <Swiper
            style={styles.wrapper}
        // showsButtons
        >
            {images.map((imageUrl, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: 200,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width - 40,
        height: 200,
        resizeMode: 'cover',
    },
});

export default ImageCarousel;
