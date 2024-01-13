import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { request, PERMISSIONS } from 'react-native-permissions';

import EditingCarousel from '../../components/carousel/EditingCarousel';
import Img from '../../utils/images/signup.jpg';

const Editing = () => {
    const entries = [
        { title: Img },
        { title: Img },
        { title: Img },
    ];
    // const askMediaPermissions = () => {
    //     try {
    //         request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES && PERMISSIONS.ANDROID.READ_MEDIA_VIDEO).then((result) => {
    //             console.log('media permisiions : ', result);
    //         });
    //         request(PERMISSIONS.ANDROID.READ_MEDIA_VIDEO).then((result) => {
    //             console.log('media permisiions : ', result);
    //         });
    //     } catch (error) {
    //         console.error('Error while fetching media permissions : ', error);
    //     }
    // };

    // useEffect(() => {
    //     askMediaPermissions();
    // }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.card} >
                    <EditingCarousel data={entries} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        // marginHorizontal: 10,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Editing;
