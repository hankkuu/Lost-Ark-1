import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import AppSwitchNavigator from './components/navigations/AppSwitchNavigator';

class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AppSwitchNavigator />
            </View>
        );
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',   // 여기를 주석을 걸어야 화면이 나온다... 이유는?? 
        justifyContent: 'center'
    }
});