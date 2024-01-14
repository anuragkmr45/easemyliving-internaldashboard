import { useEffect, useState } from 'react';
import { Image } from 'react-native-compressor';

export const useImageCompression = (imgPath) => {
    const [compressedImagePath, setCompressedImagePath] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const compressImage = async () => {
            try {
                const path = await Image.compress(imgPath, {
                    compressionMethod: 'auto',
                    maxWidth: 1000,
                    quality: 0.8,
                });

                setCompressedImagePath(path);
            } catch (error) {
                setError(error);
                console.log('Error while compressing img : ', error);
            }
        };

        if (imgPath) {
            compressImage();
        }
    }, [imgPath]);

    return { compressedImagePath, error };
};

// Example usage in a functional component:
// const YourComponent = () => {
//     const imgPath = 'file://path_of_original_image/image.jpg';
//     const { compressedImagePath, error } = useImageCompression(imgPath);

//     if (error) {
//         console.error('Compression error:', error);
//     }

//     return (
//         <div>
//             {compressedImagePath && (
//                 <img src={compressedImagePath} alt="Compressed Image" />
//             )}
//         </div>
//     );
// };
