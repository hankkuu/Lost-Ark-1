import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { colors } from '@util/Colors';

import AuctionScreen from '@screen/mainTab/AuctionScreen';
import ShopScreen from '@screen/mainTab/ShopScreen';

import ItemAuctionStackNavigator from '@navigation/ItemAuctionStackNavigator'; 
import SettingStackNavigator from '@navigation/SettingStackNavigator';
import HomeStackNavigator from '@navigation/HomeStackNavigator';
import { commonNavigationOptions } from '@navigation/options/CommonNavigationOptions';
import HomeScreen from '@screen/home/HomeScreen'
import { MainTabNavigationOptions } from '@navigation/options/MainTabNavigationOptions';

const TabNavigator = createBottomTabNavigator({
    Home: { screen: HomeStackNavigator, }, 
    Auction: { screen: AuctionScreen, },
    Shop: { screen: ShopScreen },
    SettingStack: { screen: SettingStackNavigator },
}, {
        navigationOptions: ({ navigation }) => ({
            //...MainTabNavigationOptions,
            //header: null,
            
            tabBarVisible: true,
            tabBarLabel: ({ focused }) => {
                const { routeName } = navigation.state;
                switch (routeName) {
                    case 'Home':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('My')}</Text>;
                    case 'Auction':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('경매장')}</Text>;
                    case 'Shop':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('상점')}</Text>;
                    case 'SettingStack':
                        return <Text style={[styles.txt, { opacity: focused ? 1 : 0.5 }]}>{('설정')}</Text>;
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
            labelStyle: {
                fontSize: 27,
                //justifyContent: 'center',
                //alignItems: 'center',
            },
            style: {
                height: 50,
                //justifyContent: 'center',
                backgroundColor: colors.darkBlue,
                //alignItems: 'center',
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center',
            }
        }
    })
export default TabNavigator;

const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 15,
        marginBottom: 15,
        //justifyContent: 'center',
        //alignItems: 'center',
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