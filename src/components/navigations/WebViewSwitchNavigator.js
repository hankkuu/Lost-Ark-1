import { createSwitchNavigator } from 'react-navigation';
import React from 'react';

import Test3Screen from '../screens/home/Test3Screen';

const routeConfig = {
    Test : { screen: Test3Screen }
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