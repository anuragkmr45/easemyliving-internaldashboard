import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import BottomNav from '../../components/bottom-navigations/index';
import SettingScreen from './settings/index';
import HostelListScreen from './hostellist/index';

const HostelList = () => {
    return (
        <SafeAreaView style={styles.container}>
            <BottomNav NavScreen1={HostelListScreen} NavScreen2={SettingScreen} roomid="4567" />
        </SafeAreaView>
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

export default HostelList;
