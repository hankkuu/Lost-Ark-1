import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import HomeStackNavigator from '../../navigations/HomeStackNavigator';
// 아래 부분 스위치로 변경 

class HomeScreen extends Component {
    static router = HomeStackNavigator.router;

    render() {
        return (
            <HomeStackNavigator navigation={this.props.navigation}/>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});