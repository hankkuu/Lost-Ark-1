import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import IntroScreen from '../screens/home/IntroScreen';
import BestListScreen from '../screens/home/BestListScreen';
import Test1Screen from '../screens/home/Test1Screen';
import Test2Screen from '../screens/home/Test2Screen';
import Test3Screen from '../screens/home/Test3Screen';
import Test4Screen from '../screens/home/Test4Screen';
import Test5Screen from '../screens/home/Test5Screen';

const routeConfig = {
    Intro: {
        screen: IntroScreen,
        navigationOptions: {
            title: "test"
        }
    },
    List: { screen: BestListScreen },
    Test1: { screen: Test1Screen },
    Test2: { screen: Test2Screen },
    Test3: { screen: Test3Screen },
    Test4: { screen: Test4Screen },
    Test5: { screen: Test5Screen },    
}
const navigatorConfig = {
    initialRouteName: 'Intro',
    gesturesEnabled: true,
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forVertical, }),
}

// 이런 방식으로안하고 바로 export 하면 에러가 난다 가능하면 const를 export하는 경우 따로 지정해주자
const HomeStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
export default HomeStackNavigator;