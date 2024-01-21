import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import BasicImageCarousel from '../../carousel/basic-mage/index';

const HostelPreview = ({ roomid, views, roomavaliable, screen, images }) => {

    const navigation = useNavigation();

    return (
        <Card style={styles.container}>
            {/* <Card.Title title={`Room ID: ${roomid}`} left={LeftContent} /> */}
            {/* <Card.Cover style={{ width: '100%' }} source={{ uri: img }} /> */}
            <View style={styles.cardHeader} >
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
            </View>
            <BasicImageCarousel images={images} />
            <Card.Actions>
                <Button style={styles.navButton} mode="contained" onPress={() => navigation.navigate(screen)}>
                    More Details ...
                </Button>
            </Card.Actions>
        </Card>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },

    cardHeader: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 15,
    },
    actionContainer: {
        flex: 1,
        textAlign: 'center',
        // fontSize: 15,
    },

    actionText: {
        textAlign: 'center',
        fontSize: 19,
        color: 'red',
    },

    actionSubText: {
        textAlign: 'center',
        fontSize: 10,
        // color: 'red',
    },
    navButton: {
        width: '100%',
        backgroundColor: 'black',
    },
});

export default HostelPreview;
