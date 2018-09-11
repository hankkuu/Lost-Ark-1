import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import React from 'react';
import NavigationService from '@navigation/options/NavigationService';

import Setting1 from '@screen/settings/Setting1';
import Setting2 from '@screen/settings/Setting2';
import Setting3 from '@screen/settings/Setting3';
import Setting4 from '@screen/settings/Setting4';
import Setting5 from '@screen/settings/Setting5';
import Setting6 from '@screen/settings/Setting6';
import SettingsScreen from '@screen/settings/SettingsScreen';

const routeConfig = {
    main: { screen: SettingsScreen },
    Setting1: { screen: Setting1 },
    Setting2: { screen: Setting2 },
    Setting3: { screen: Setting3 },
    Setting4: { screen: Setting4 },
    Setting5: { screen: Setting5 },
    Setting6: { screen: Setting6 },
}

const navigatorConfig = {
    initialRouteName: 'main',
    gesturesEnabled: true,
    navigationOptions: {
        header: null,
    },
    transitionConfig: () => ({ screenInterpolator: StackViewStyleInterpolator.forFade, }),
}

const SettingsStackNavigator = createStackNavigator(routeConfig, navigatorConfig)
// react에서 DOM에 직접적인 접근을 할때 ref 라는 키워드를 사용할 수 있다 
const SettingsStack = () => {
    return (
        <SettingsStackNavigator ref={(navi) => {
                                    NavigationService.setTopLevelNavigator("Setting", navi);
                                }}
        />
    );
}
export default SettingsStack;