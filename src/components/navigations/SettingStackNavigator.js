import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import React from 'react';
import { View } from 'react-native'
import NavigationService from '@navigation/options/NavigationService';

import Setting4 from '@screen/settings/Setting4';
import Setting5 from '@screen/settings/Setting5';
import Setting6 from '@screen/settings/Setting6';
import SettingsScreen from '@screen/settings/SettingsScreen';
import NoticeScreen from '@screen/settings/NoticeScreen';
import SystemAlarmScreen from '@screen/settings/SystemAlarmScreen';

const routeConfig = {
    main: { screen: SettingsScreen },
    Notice: { screen: NoticeScreen },
    SystemAlarm: { screen: SystemAlarmScreen },
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
                                    NavigationService.setTopLevelNavigator(navi);
                                }}
        />
    );
}
export default SettingsStack;