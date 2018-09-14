import {
    Easing,
    Animated    
} from "react-native";
import { createStackNavigator } from 'react-navigation';
import { commonNavigationOptions } from "@navigation/options/CommonNavigationOptions";
import { MainTabNavigationOptions } from '@navigation/options/MainTabNavigationOptions';
import MainTabNavigator from '@navigation/MainTabNavigator';
import AlarmScreen from "@screen/mainTab/AlarmScreen";



const routeConfig = {
    MainTab: { screen: MainTabNavigator, navigationOptions: MainTabNavigationOptions },
    Alarm: { screen: AlarmScreen, navigationOptions: {
        title: 'Alarm'
    }}
}
const navigatorConfig = {
    initialRouteName: 'MainTab',
    gesturesEnabled: true,
    navigationOptions: commonNavigationOptions,
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

// 기본 RootStack을 지정하는 네비게이터 
const rootRouteConfig = {
    MainRoot: { screen: MainStackNavigator },
    // 셋팅을 넣나?? 뭘 넣나?? 바로 탭??


}
const rootNavigatorConfig = {
    mode: 'card',       // default screen transitions.
    navigationOptions: {
        header: null
    }
}
const RootNavigator = createStackNavigator(rootRouteConfig, rootNavigatorConfig);
export default RootNavigator;

