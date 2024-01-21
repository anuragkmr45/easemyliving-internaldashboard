import React from 'react';
// import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomNavBar({ NavScreen1, NavScreen2, roomid }) {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: 'flex',
                        height: 60,
                        // backgroundColor: 'white',
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen
                name={`Hostel Number : ${roomid}`}
                component={NavScreen1}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={NavScreen2}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="cog" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end',
//     },
// });
