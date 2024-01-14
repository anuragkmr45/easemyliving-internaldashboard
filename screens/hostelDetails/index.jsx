import React, { useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, ScrollView } from 'react-native';

// import MultipleCardCarousel from '../../components/carousel/multiple-card/index';

const HostelDetails = () => {
    const scrollViewRef = useRef();
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                {/* <MultipleCardCarousel /> */}
                <Text>HostelDetails</Text>
                <ScrollView ref={scrollViewRef} horizontal={true} style={styles.gallery}>
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                    <Image source={require('../../utils/images/signup.jpg')} style={styles.img} />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    gallery: {
        borderColor: 'black',
        borderWidth: 2,
        flexDirection: 'row',
    },
    img: {
        height: 50,
        width: 50,
        marginHorizontal: 5,
    },
});

export default HostelDetails;
