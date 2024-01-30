import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingScreen from '../screens/index';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/FetchByRoomId/index';
import HostelListScreen from '../screens/edit/index';
import HostelDtlScreen from '../screens/edit/hostel-detail/index';

const Stack = createNativeStackNavigator();

export const currentUser = true;

const Navigations = () => {
    return (
        <NavigationContainer theme={DefaultTheme}>
            <Stack.Navigator initialRouteName="EaseMyLiving">
                {/* <Stack.Screen
                    name="EaseMyLiving"
                    component={LandingScreen}
                    options={{ header: () => null }}
                />

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        // header: () => null,
                        headerLeft: null,
                    }}
                /> */}
                {
                    currentUser && (
                        <>
                            {/* <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{ header: () => null }}
                            />
                            <Stack.Screen
                                name="HostelList"
                                component={HostelListScreen}
                                options={{ header: () => null }}
                            /> */}
                            <Stack.Screen
                                name="HostelDtl"
                                component={HostelDtlScreen}
                                options={{ header: () => null }}
                            />
                        </>
                    )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;
