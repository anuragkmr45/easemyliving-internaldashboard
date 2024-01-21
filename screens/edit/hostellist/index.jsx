import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import HostelPreview from '../../../components/cards/hostel-preview/index';

const HostelList = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
                <View>
                    <HostelPreview roomid="2234e" views="10" roomavaliable="10" img="https://picsum.photos/700" />
                </View>
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
