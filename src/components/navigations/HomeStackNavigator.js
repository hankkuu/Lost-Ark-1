import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import HomeScreen from '@screen/home/HomeScreen';
import BestListScreen from '@screen/home/BestListScreen';
import Test1Screen from '@screen/home/Test1Screen';
import Test2Screen from '@screen/home/Test2Screen';
import Test3Screen from '@screen/home/Test3Screen';
import Test4Screen from '@screen/home/Test4Screen';
import Test5Screen from '@screen/home/Test5Screen';
import DetailListScreen from '@screen/home/DetailListScreen';

import NavigationService from '@navigation/options/NavigationService'
import React from 'react';

const routeConfig = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    List: { screen: BestListScreen,
        navigationOptions: {
            header: null,
        }
    },
    Test1: { screen: Test1Screen },
    Test2: { screen: Test2Screen },
    Test3: { screen: Test3Screen },
    Test4: { screen: Test4Screen },
    Test5: { screen: Test5Screen },    
    Detail: { screen: DetailListScreen,
        navigationOptions: {
            header: null,
        }
    }
}
const navigatorConfig = {
    initialRouteName: 'Home',
    gesturesEnabled: true,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
}

// 이런 방식으로안하고 바로 export 하면 에러가 난다 가능하면 const를 export하는 경우 따로 지정해주자
const HomeStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
// react에서 DOM에 직접적인 접근을 할때 ref 라는 키워드를 사용할 수 있다 
const HomeStack = () => {
    return (
        <HomeStackNavigator ref={(navi) => {
                                NavigationService.setTopLevelNavigator("Home", navi);
                            }}
        />
    );
}
export default HomeStack;