import React, { createContext, useContext } from 'react';
import { Image } from 'react-native-compressor';

const ImageOperationContext = createContext();

const useImageOperationContext = () => {
    const context = useContext(ImageOperationContext);
    if (!context) {
        throw new Error('useImageOperationContext must be used within an ImageOperationProvider');
    }
    return context;
};

const ImageOperationProvider = ({ children }) => {

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

    const contextValue = {
        useImageCompressor,
    };

    return (
        <ImageOperationContext.Provider value={contextValue}>
            {children}
        </ImageOperationContext.Provider>
    );
};

export { ImageOperationProvider, useImageOperationContext };
