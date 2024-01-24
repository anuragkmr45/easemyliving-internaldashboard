import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';

const LoadingBtn = ({ mode, btnBgColor, bufferColor }) => {

    const styles = StyleSheet.create({
        btn: {
            backgroundColor: btnBgColor,
        },
    });

    const getInverseColor = (hexColor) => {
        // Assuming hexColor is in the format #RRGGBB
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        const invertedColor = `#${(255 - r).toString(16)}${(255 - g).toString(16)}${(255 - b).toString(16)}`;
        return invertedColor;
    };

    const inverseColor = getInverseColor(btnBgColor);

    return (
        <Button mode={mode} style={styles.btn} >
            <ActivityIndicator animating={true} color={bufferColor} />
        </Button>
    );
};


export default LoadingBtn;
