import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import HomeScreen from '@screen/home/HomeScreen';
import NoticeScreen from '@screen/home/NoticeScreen';
import DetailNoticeScreen from '@screen/home/DetailNoticeScreen';

import CouponScreen from '@screen/home/CouponScreen';
import RechargeScreen from '@screen/home/RechargeScreen';
import AdditionServiceScreen from '@screen/home/AdditionServiceScreen';
import MyShopScreen from '@screen/home/MyShopScreen';
import PcRoomScreen from '@screen/home/PcRoomScreen';
import CSScreen from "../screens/home/CSScreen";

import AlarmScreen from "@screen/mainTab/AlarmScreen";
import MyScreen from "@screen/mainTab/MyScreen";

import BestListScreen from '@screen/home/BestListScreen';
import DetailListScreen from '@screen/home/DetailListScreen';
import WebViewScreen from '@screen/home/WebViewScreen';


import { colors } from '@util/Styles';
import { Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import WebViewSwitchNavigator from '@navigation/WebViewSwitchNavigator'
import { commonNavigationOptions } from "@navigation/options/CommonNavigationOptions";
import React from 'react';
import { HeaderNavigationOptions } from '@navigation/options/home/HeaderNavigationOptions';
import { RightHeaderNavigationOptions } from "@navigation/options/home/RightHeaderNavigationOptions"
import { MainTabNavigationOptions } from '@navigation/options/MainTabNavigationOptions';

const routeConfig = {
    Home: { screen: HomeScreen, navigationOptions: HeaderNavigationOptions },
    Notice: { screen: NoticeScreen, },
    DetailNotice: { screen: DetailNoticeScreen },

    Coupon: { screen: CouponScreen, },
    Recharge: { screen: RechargeScreen },    
    AdditionService: { screen: AdditionServiceScreen },

    MyShop: { screen: MyShopScreen },
    PCRoom: { screen: PcRoomScreen },
    CS: { screen: CSScreen },

    Detail: { screen: DetailListScreen },

    List: { screen: BestListScreen },
    WebView: { screen: WebViewScreen },

    test: { screen: WebViewSwitchNavigator },

    Alarm: { screen: AlarmScreen, },
    My: { screen: MyScreen },

}

const navigatorConfig = {
    initialRouteName: 'Home',
    gesturesEnabled: true,
    navigationOptions: RightHeaderNavigationOptions
}

// 이런 방식으로안하고 바로 export 하면 에러가 난다 가능하면 const를 export하는 경우 따로 지정해주자
const HomeStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
// react에서 DOM에 직접적인 접근을 할때 ref 라는 키워드를 사용할 수 있다 
const HomeStack = () => {
    return (
        <HomeStackNavigator 
                        // ref={(navi) => {
                        //         NavigationService.setTopLevelNavigator(navi);
                        //     }}
        />
    );
}
export default HomeStack;

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