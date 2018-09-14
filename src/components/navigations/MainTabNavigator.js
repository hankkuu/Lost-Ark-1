import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { colors } from '@util/Styles';

import SearchScreen from '@screen/mainTab/SearchScreen';
import AccountScreen from '@screen/mainTab/AccountScreen';

import SettingStackNavigator from '@navigation/SettingStackNavigator';
import HomeStackNavigator from '@navigation/HomeStackNavigator';


const TabNavigator = createMaterialTopTabNavigator({
    HomeStack: { screen: HomeStackNavigator },
    Search: { screen: SearchScreen },
    Account: { screen: AccountScreen },
    SettingStack: { screen: SettingStackNavigator },
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: true,
            tabBarLabel: ({ focused }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'HomeStack':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Home')}</Text>;
                    case 'Search':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Search')}</Text>;
                    case 'Account':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Account')}</Text>;
                    case 'SettingStack':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('Setting')}</Text>;
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