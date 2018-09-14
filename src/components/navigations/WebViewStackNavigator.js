import { createStackNavigator } from 'react-navigation';
import React from 'react';
import WebViewScreen from '@screen/home/WebViewScreen';

const routeConfig = {
    WebView : { screen: WebViewScreen }
}

const navigatorConfig = {
    initialRouteName: 'WebView',
    gesturesEnabled: true,
  
    // navigationOptions: {
    //     header: null,
    // },
}

const WebViewSwitchNavigator = createStackNavigator(routeConfig, navigatorConfig);

WebViewSwitchNavigator.navigationOptions = ({navigation}) => {
    let tabBarVisible = false;
    return {
        tabBarVisible
    }
}

export default WebViewSwitchNavigator;