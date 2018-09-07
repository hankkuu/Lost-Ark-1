import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { commonNavigationOptions } from './options/CommonNavigationOptions';
// 화면전환시 에니메이션 효과이다... 이런 디테일은 뭐.. 옵션은 아래서 설정 
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import FindPWScreen from '../screens/auth/FindPWScreen';

export default AuthStackNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    SignUp: { screen: SignUpScreen },
    FindPW: { screen: FindPWScreen }
}, {
    initialRouteName: "Login",
    navigationOptions: commonNavigationOptions,

    //transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade }),
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
})
