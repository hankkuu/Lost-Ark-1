import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { colors } from '../../util/Styles';

import HomeScreen from '../screens/mainTab/HomeScreen';
import SearchScreen from '../screens/mainTab/SearchScreen';
import AccountScreen from '../screens/mainTab/AccountScreen';
import SettingsScreen from '../screens/mainTab/SettingsScreen';

import HomeStackNavigator from './HomeStackNavigator';

const TabNavigator = createMaterialTopTabNavigator({
    Home: { screen: HomeStackNavigator },
    Search: { screen: SearchScreen },
    Account: { screen: AccountScreen },
    Settings: { screen: SettingsScreen }
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            tabBarLabel: ({ focused }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Home':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Home')}</Text>;
                    case 'Search':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Search')}</Text>;
                    case 'Account':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Account')}</Text>;
                    case 'Settings':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Settings')}</Text>;
                    default:
                        return null;
                }
            }
        }),
        animationEnabled: true,
        swipeEnabled: Platform.select({ android: true, ios: false }),
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: 'red'
            },
            style: {
                height: 40,
                justifyContent: 'center',
                backgroundColor: colors.dusk
            }
        }
    })
export default TabNavigator;

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 15,
    },
    txtSub: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
    },
    imgHeaderLeft: {
        marginLeft: 20,
        width: 28,
        height: 28,
        borderRadius: 14,
        borderColor: 'white',
        borderWidth: 1,
    },
    imgHeaderRight: {
        width: 24,
        height: 24,
        right: 12,
        tintColor: 'white',
        marginLeft: 20,
    },
})