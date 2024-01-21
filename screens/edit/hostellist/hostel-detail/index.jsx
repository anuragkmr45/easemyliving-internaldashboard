import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import BottomNav from '../../../../components/bottom-navigations/index';
import SettingScreen from '../../settings/index';

const HostelDtls = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BottomNav NavScreen1={HostelDtlScreen} NavScreen2={SettingScreen} roomid="4567" />
        </SafeAreaView>
    );
};

const HostelDtlScreen = () => {
    return (
        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis molestiae animi perferendis at eligendi odio quam inventore dolor iste consequatur sint minima delectus quasi eius doloribus facere, est quas eaque.</Text>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0, // Ensure no padding at the bottom
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 60, // Adjust this value based on your BottomNav's height
    },
});

export default HostelDtls;
