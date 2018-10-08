import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import { createSwitchNavigator } from 'react-navigation';
import Test4Screen from '@screen/home/AdditionServiceScreen'

const routeConfig = {
    Intro: {
        screen: Test4Screen,
        navigationOptions: {
            title: 'test'
        }
    }
}
const navigatorConfig = {
    initialRouteName: 'Intro',
    gesturesEnabled: true,
}
const Switch = createSwitchNavigator(routeConfig, navigatorConfig);

class CouponScreen extends Component {    
    render() {
        return (
            <Text>ddddd</Text>
        );
    }
}
export default CouponScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});