import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

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
        paddingBottom: 0,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 60,
    },
});

export default HostelList;
