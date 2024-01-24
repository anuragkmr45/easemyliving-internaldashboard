import React, { createContext, useContext, useState } from 'react';
import { Image } from 'react-native-compressor';
import Marker, { Position } from 'react-native-image-marker';

const ImageOperationContext = createContext();

const useImageOperationContext = () => {
    const context = useContext(ImageOperationContext);
    if (!context) {
        throw new Error('useImageOperationContext must be used within an ImageOperationProvider');
    }
    return context;
};

const ImageOperationProvider = ({ children }) => {
    const [watermarkedImageUri, setWatermarkedImageUri] = useState(null);

    const useImageCompressor = async (uri) => {
        try {
            const compressedUri = await Image.compress(uri, {
                quality: 0.8,
                maxWidth: 800,
                maxHeight: 600,
            });

            return compressedUri;
        } catch (error) {
            console.error('Error compressing image: ', error);
            return uri;
        }
    };

    const useImageWatermark = async (uri) => {
        try {
            const watermarkedImagePath = await Marker.markText({
                backgroundImage: {
                    src: uri,
                    scale: 1,
                },
                watermarkTexts: [{
                    text: 'EaseMyLiving',
                    positionOptions: {
                        position: Position.bottomLeft,
                    },
                    style: {
                        color: 'black',
                        fontSize: 20,
                    },
                }],
                scale: 1,
                quality: 100,
                filename: 'watermarked_image',
                saveFormat: Marker.ImageFormat.png,
            });

            setWatermarkedImageUri(watermarkedImagePath);
        } catch (error) {
            console.error('Error adding watermark: ', error);
        }
    };
    const contextValue = {
        watermarkedImageUri,
        useImageCompressor,
        useImageWatermark,
    };

    return (
        <ImageOperationContext.Provider value={contextValue}>
            {children}
        </ImageOperationContext.Provider>
    );
};

export { ImageOperationProvider, useImageOperationContext };
