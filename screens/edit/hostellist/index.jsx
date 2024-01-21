import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import HostelPreview from '../../../components/cards/hostel-preview/index';

const HostelList = () => {

    return (
        <ScrollView>
            <View style={styles.container}>
                <HostelPreview roomid="2234e" views="10" roomavaliable="10" screen="HostelDtl" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default HostelList;
