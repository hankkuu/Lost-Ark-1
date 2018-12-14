import { createSwitchNavigator } from 'react-navigation';
import React from 'react';

import CouponScreen from '../screens/home/CouponScreen';

const routeConfig = {
    Test : { screen: CouponScreen }
}

const navigatorConfig = {
    initialRouteName: 'Test',
    gesturesEnabled: true,
  
    // navigationOptions: {
    //     header: null,
    // },
}

const WebViewSwitchNavigator = createSwitchNavigator(routeConfig, navigatorConfig);

WebViewSwitchNavigator.navigationOptions = ({navigation}) => {
    let tabBarVisible = false;
    return {
        tabBarVisible
    }
}

export default WebViewSwitchNavigator;