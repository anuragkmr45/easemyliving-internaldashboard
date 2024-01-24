// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

// const Tab = createBottomTabNavigator();

// export default function BottomNavBar({ NavScreen1, NavScreen2, roomid, navigation }) {
//     const getTabBarIcon = (routeName, color, size) => {
//         let iconName;

//         if (routeName === 'Home') {
//             iconName = 'folder-home-outline';
//         } else if (routeName === 'AccountSettings') {
//             iconName = 'account-settings-outline';
//         }

//         return <Icon name={iconName} size={size} color={color} />;
//     };

//     return (
//         <Tab.Navigator
//             screenOptions={({ route }) => ({
//                 tabBarIcon: ({ color, size }) => {
//                     const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
//                     return getTabBarIcon(routeName, color, size);
//                 },
//             })}
//             tabBarOptions={{
//                 tabBarShowLabel: false,
//                 tabBarStyle: [
//                     {
//                         display: 'flex',
//                         height: 60,
//                     },
//                     null,
//                 ],
//             }}
//         >
//             <Tab.Screen
//                 name={`Hostel Number : ${roomid}`}
//                 component={NavScreen1}
//                 options={{ title: 'Home' }}
//             />
//             <Tab.Screen
//                 name="AccountSettings"
//                 component={NavScreen2}
//                 options={{ title: 'Account Settings' }}
//             />
//         </Tab.Navigator>
//     );
// }

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function BottomNavBar({ NavScreen1, NavScreen2, roomid, navigation }) {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.title;

                        return label;
                    }}
                />
            )}
        >
            <Tab.Screen
                name={`RoomID:  ${roomid}`}
                component={NavScreen1}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="folder-home-outline" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Settings"
                component={NavScreen2}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="account-settings-outline" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

