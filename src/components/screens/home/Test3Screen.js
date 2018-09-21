import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

import { createSwitchNavigator } from 'react-navigation';
import Test4Screen from '@screen/home/Test4Screen'

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
const Swich = createSwitchNavigator(routeConfig, navigatorConfig);

class Test3Screen extends Component {
    static router = Swich.router;
    render() {
        return (
            <Swich navigation={this.props.navigation}>                
            </Swich>
        );
    }
}
export default Test3Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});