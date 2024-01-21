import React, { useState } from 'react';
import { ScrollView, Image, TouchableOpacity, View, StyleSheet } from 'react-native';

const HorizontalCarousel = ({ images }) => {

    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImagePress = (image) => {
        setSelectedImage(image);
    };

    return (
        <View>
            {selectedImage && (
                <Image
                    style={styles.selectedImage}
                    source={{ uri: selectedImage }}
                />
            )}
            <ScrollView horizontal indicatorStyle="black" showsHorizontalScrollIndicator={false}>
                {images.map((data, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleImagePress(data)}
                        activeOpacity={0.7}
                    >
                        <Image
                            style={[styles.gallaryImgs, { borderColor: data === selectedImage ? '#8a0606' : 'transparent' }]}
                            source={{ uri: data }}
                        />
                    </TouchableOpacity>
                ))}

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default HorizontalCarousel;
