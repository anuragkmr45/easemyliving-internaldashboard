import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomNavBar({ NavScreen1, NavScreen2, roomid, navigation }) {
    const getTabBarIcon = (routeName, color, size) => {
        let iconName;

        if (routeName === 'Home') {
            iconName = 'folder-home-outline';
        } else if (routeName === 'AccountSettings') {
            iconName = 'account-settings-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
    };

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
                    return getTabBarIcon(routeName, color, size);
                },
            })}
            tabBarOptions={{
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: 'flex',
                        height: 60,
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen
                name={`Hostel Number : ${roomid}`}
                component={NavScreen1}
                options={{ title: 'Home' }}
            />
            <Tab.Screen
                name="AccountSettings"
                component={NavScreen2}
                options={{ title: 'Account Settings' }}
            />
        </Tab.Navigator>
    );
}
