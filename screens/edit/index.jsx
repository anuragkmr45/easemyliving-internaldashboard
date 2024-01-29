import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { usePermissionsContext } from '../../context/PermissionsProvider';
import BottomNav from '../../components/bottom-navigations/index';
import SettingScreen from './settings/index';
import HostelListScreen from './hostellist/index';

const HostelList = () => {

    const { getMediaPermissions } = usePermissionsContext();

    useEffect(() => {

        const handleMediaPermission = async () => {
            try {
                await getMediaPermissions();
            } catch (error) {
                console.error('Error while getting media permission: ', error);
            }
        };

        handleMediaPermission();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
