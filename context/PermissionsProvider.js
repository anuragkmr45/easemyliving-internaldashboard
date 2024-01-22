import React, { createContext, useContext } from 'react';
import { request, PERMISSIONS } from 'react-native-permissions';

const PermissionsContext = createContext();

const usePermissionsContext = () => {
    const context = useContext(PermissionsContext);
    if (!context) {
        throw new Error('usePermissionsContext must be used within a PermissionsProvider');
    }
    return context;
};

const PermissionsProvider = ({ children }) => {
    const getMediaPermissions = async () => {
        try {
            const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            console.log('Media permissions : ', result);
            return result;
        } catch (error) {
            console.error('Error while fetching media permission : ', error);
            throw error;
        }
    };

    const getCameraPermissions = async () => {
        try {
            const result = await request(PERMISSIONS.ANDROID.CAMERA);
            console.log('Camera permissions : ', result);
            return result;
        } catch (error) {
            console.error('Error while fetching camera permission : ', error);
            throw error;
        }
    };

    const getLocationPermissions = async () => {
        try {
            await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
                console.log('location permission : ', result);
            });
        } catch (error) {
            console.error('Error while fetching location permission ; ', error);
        }
    };

    const getMsgPermissions = async () => {
        try {
            await request(PERMISSIONS.ANDROID.READ_SMS && PERMISSIONS.ANDROID.RECEIVE_SMS).then((result) => {
                console.log('msg permissions : ', result);
            });
        } catch (error) {
            console.error('Erorr while fetching msg permission : ', error);
        }
    };

    const contextValue = {
        getMediaPermissions,
        getCameraPermissions,
        getLocationPermissions,
        getMsgPermissions,
    };

    return (
        <PermissionsContext.Provider value={contextValue}>
            {children}
        </PermissionsContext.Provider>
    );
};

export { PermissionsProvider, usePermissionsContext };
