import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import HomeScreen from '@screen/home/HomeScreen';
import BestListScreen from '@screen/home/BestListScreen';
import DetailListScreen from '@screen/home/DetailListScreen';
import WebViewScreen from '@screen/home/WebViewScreen';

import Test2Screen from '@screen/home/Test2Screen';
import Test3Screen from '@screen/home/Test3Screen';
import Test4Screen from '@screen/home/Test4Screen';
import Test5Screen from '@screen/home/Test5Screen';


import NavigationService from '@navigation/options/NavigationService'
import React from 'react';


const routeConfig = {
    Home: { screen: HomeScreen },
    List: { screen: BestListScreen },
    WebView: { screen: WebViewScreen },
    Test2: { screen: Test2Screen },
    Test3: { screen: Test3Screen },
    Test4: { screen: Test4Screen },
    Test5: { screen: Test5Screen },    
    Detail: { screen: DetailListScreen },

}
const navigatorConfig = {
    initialRouteName: 'Home',
    gesturesEnabled: true,
    navigationOptions: {
       header: null,
    },
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
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