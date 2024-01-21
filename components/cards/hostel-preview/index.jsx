import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

import Demo from './Demo';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const HostelPreview = ({ roomid, views, roomavaliable, img }) => {

    const images = [
        'https://picsum.photos/700',
        'https://picsum.photos/700',
        'https://picsum.photos/700',
        'https://picsum.photos/700',
    ];

    return (
        <Card style={styles.container}>
            <Card.Title title={`Room ID: ${roomid}`} left={LeftContent} />
            {/* <Card.Cover style={{ width: '100%' }} source={{ uri: img }} /> */}
            <View>
                <Demo images={images} />
            </View>
            <Card.Actions>
                <View style={styles.actionContainer} >
                    <Text style={styles.actionText} >{roomid}</Text>
                    <Text style={styles.actionSubText} >Gender | Sharing</Text>
                </View>
                <View style={styles.actionContainer} >
                    <Text style={styles.actionText} >{views}</Text>
                    <Text style={styles.actionSubText} >Today's Views</Text>
                </View>
                <View style={styles.actionContainer} >
                    <Text style={styles.actionText} >{roomavaliable}</Text>
                    <Text style={styles.actionSubText} >Room Available</Text>
                </View>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    actionContainer: {
        flex: 1,
        textAlign: 'center',
        // fontSize: 15,
    },

    actionText: {
        textAlign: 'center',
        fontSize: 19,
    },

    actionSubText: {
        textAlign: 'center',
        fontSize: 10,
    },
});

export default HostelPreview;
