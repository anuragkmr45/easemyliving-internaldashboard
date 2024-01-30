import React, { createContext, useContext } from 'react';
import { Image } from 'react-native-compressor';
import RNPhotoManipulator from 'react-native-photo-manipulator';

const ImageOperationContext = createContext();

const useImageOperationContext = () => {
    const context = useContext(ImageOperationContext);
    if (!context) {
        throw new Error('useImageOperationContext must be used within an ImageOperationProvider');
    }
    return context;
};

const ImageOperationProvider = ({ children }) => {

    const getCompressedImg = async (img) => {
        try {
            const compressedUri = await Image.compress(img, {
                quality: 0.8,
                maxWidth: 800,
                maxHeight: 600,
            });

            console.log('Image compression done');
            return compressedUri;
        } catch (error) {
            console.error('Error compressing image: ', error);
            return img;
        }

    };

    const getWatermarkedImg = async (img) => {
        try {
            const text = [
                {
                    position: { x: 50, y: 30 },
                    text: 'EaseMyLiving',
                    textSize: 50,
                    color: '#000000',
                    thickness: 2,
                },
            ];

            const watermarkedImg = await RNPhotoManipulator.printText(img, text);

            console.log('Watermarked image done');
            return watermarkedImg;
        } catch (error) {
            console.error('Error while watermarking image: ', error);
        }
    };

    const contextValue = {
        getCompressedImg,
        getWatermarkedImg,
    };

    return (
        <ImageOperationContext.Provider value={contextValue}>
            {children}
        </ImageOperationContext.Provider>
    );
};

export { ImageOperationProvider, useImageOperationContext };
