import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const Loader = () => {
    const [blink1] = useState(new Animated.Value(0));
    const [blink2] = useState(new Animated.Value(0));
    const [blink3] = useState(new Animated.Value(0));
    const [blink4] = useState(new Animated.Value(0));

    useEffect(() => {
        const animateBox = (box) => {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(box, {
                        toValue: 1,
                        duration: 1000,
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                    Animated.timing(box, {
                        toValue: 0,
                        duration: 1000,
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                ]),
            ).start();
        };

        animateBox(blink1);
        animateBox(blink2);
        animateBox(blink3);
        animateBox(blink4);
    }, [blink1, blink2, blink3, blink4]);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Animated.View style={[styles.box, { opacity: blink1 }]} />
                <Animated.View style={[styles.box, { opacity: blink2 }]} />
            </View>
            <View style={styles.row}>
                <Animated.View style={[styles.box, { opacity: blink3 }]} />
                <Animated.View style={[styles.box, { opacity: blink4 }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'gray',
        marginHorizontal: 8,
    },
});

export default Loader;
