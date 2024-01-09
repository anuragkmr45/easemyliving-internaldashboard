import React, { useRef } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const EditingCarousel = () => {
    const carouselRef = useRef(null);

    const entries = [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        // Add more items as needed
    ];

    const { width: viewportWidth } = Dimensions.get('window');
    const sliderWidth = viewportWidth - 60;
    const itemWidth = viewportWidth - 20; // Adjust as needed

    const renderItem = ({ item, index, parallaxProps }) => (
        <View style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <Carousel
            ref={carouselRef}
            data={entries}
            renderItem={renderItem}
            sliderWidth={sliderWidth}
            itemWidth={itemWidth}
        />
    );
};

const styles = {
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
};

export default EditingCarousel;
