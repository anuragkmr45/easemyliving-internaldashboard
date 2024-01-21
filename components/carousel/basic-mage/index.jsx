import React from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
    return (
        <Swiper
            style={styles.carousel}
            autoplay
            autoplayTimeout={3}
            showsPagination
        >
            {images.map((imageUrl, index) => (
                <ImageSlide key={index} imageUrl={imageUrl} />
            ))}
        </Swiper>
    );
};

const ImageSlide = ({ imageUrl }) => (
    <Image source={{ uri: imageUrl }} style={styles.image} />
);

const styles = StyleSheet.create({
    carousel: {
        height: 250,
    },
    image: {
        width: width,
        height: '100%',
        resizeMode: 'cover',
    },
});

export default ImageCarousel;
