import {
    Easing,
    Animated    
} from "react-native";
import { createStackNavigator } from 'react-navigation';
import { commonNavigationOptions } from "@navigation/options/CommonNavigationOptions";
import { MainTabNavigationOptions } from '@navigation/options/MainTabNavigationOptions';
import MainTabNavigator from '@navigation/MainTabNavigator';
import AlarmScreen from "@screen/mainTab/AlarmScreen";
import MyScreen from "@screen/mainTab/MyScreen";


import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import CouponScreen from "../screens/home/CouponScreen";
import NoticeScreen from '@screen/home/NoticeScreen';
import DetailNoticeScreen from '@screen/home/DetailNoticeScreen';
import RechargeScreen from '@screen/home/RechargeScreen';
import AdditionServiceScreen from '@screen/home/AdditionServiceScreen';
import HomeStackNavigator from '@navigation/HomeStackNavigator';

import MyShopScreen from '@screen/home/MyShopScreen';
import PcRoomScreen from '@screen/home/PcRoomScreen';
import CSScreen from "../screens/home/CSScreen";

import BestListScreen from '@screen/home/BestListScreen';
import DetailListScreen from '@screen/home/DetailListScreen';
import WebViewScreen from '@screen/home/WebViewScreen';
import WebViewSwitchNavigator from '@navigation/WebViewSwitchNavigator'

const routeConfig = {
    MainTab: {
        screen: MainTabNavigator,  
            // navigationOptions: ({navigation}) => ({
            //     title: "rrrr",
            //     headerStyle: {
            //         backgroundColor: 'red',
            //         borderBottomColor: 'red',
            //         borderBottomWidth: 1,
            //         elevation: 0,
            //         //
            //       },
            //       headerTitleStyle: {
            //         flex: 1,
            //         color: 'white',
            //         textAlign: 'center',   //
            //         alignSelf: 'center'
            //       },
            //       // headerTitleStyle: {
            //       //   textAlign: 'center'   //
            //       // },
            //       headerTintColor: 'red',
            //       headerLeft: 
            //         <TouchableOpacity
            //             activeOpacity={0.5}
            //             onPress={() => navigation.goBack()}
            //         >
            //             <Text>back</Text>{/* <Text>ddddfdf<Text style={styles.txtSub}>0</Text></Text> */}
            //         </TouchableOpacity>,
            //       headerRight:
            //             <View style={{flexDirection: 'row', alignItems: 'center'}}>
            //             {/* <TouchableOpacity
            //                 activeOpacity={0.5}
            //                 onPress={() => navigation.navigate('New2')}
            //                 style={{marginRight: 10}}
            //             >
            //                 <Text>검색</Text>
            //             </TouchableOpacity> */}
            //             <TouchableOpacity
            //                 activeOpacity={0.5}
            //                 onPress={() => navigation.navigate('Coupon')}
            //             >
            //                 <Text>dff</Text>{/* <Text>ddddfdf<Text style={styles.txtSub}>0</Text></Text> */}
            //             </TouchableOpacity>
            //             </View>,
                
            // }),
    },//, navigationOptions: MainTabNavigationOptions },



    Alarm: { screen: AlarmScreen, navigationOptions: { title: 'Alarm' }},
    My: { screen: MyScreen },
    Notice: { screen: NoticeScreen, navigationOptions: { title: "Notice" }},
    DetailNotice: { screen: DetailNoticeScreen },
    Coupon: { screen: CouponScreen, navigationOptions: { title: 'Coupon' }},
    Recharge: { screen: RechargeScreen },    
    AdditionService: { screen: HomeStackNavigator },
    MyShop: { screen: MyShopScreen },
    PCRoom: { screen: PcRoomScreen },
    CS: { screen: CSScreen },

    List: { screen: BestListScreen },
    Detail: { screen: DetailListScreen },
    WebView: { screen: WebViewScreen },

    test: { screen: WebViewSwitchNavigator },

}
const navigatorConfig = {
    initialRouteName: 'MainTab',
    gesturesEnabled: true,
    navigationOptions: {
        //...commonNavigationOptions,
        header: null,
    },
    //navigationOptions: commonNavigationOptions,
    
    // https://reactnavigation.org/docs/en/stack-navigator.html#modal-stacknavigator-with-custom-screen-transitions
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;

            const height = layout.initHeight;
            const translateY = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [height, 0, 0],
            });

            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });

            return { opacity, transform: [{ translateY }] };
        },
    }),
}
const MainStackNavigator = createStackNavigator(routeConfig, navigatorConfig);
//export default MainStackNavigator;


// 기본 RootStack을 지정하는 네비게이터 
const rootRouteConfig = {
    MainRoot: { screen: MainStackNavigator },
    // 셋팅을 넣나?? 뭘 넣나?? 바로 탭??


}
const rootNavigatorConfig = {
    mode: 'card',       // default screen transitions.
    navigationOptions: {
        header: null  // 여기에서는 헤더를 직접 만들어야 함
    }
}
const RootNavigator = createStackNavigator(rootRouteConfig, rootNavigatorConfig);
export default RootNavigator;

