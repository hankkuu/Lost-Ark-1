import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    Alert
} from "react-native";

class LoadingScreen extends Component {
    constructor(props) {
        super(props);

        const auth = props.navigation.state.params;
        if(auth !== undefined && auth !== null) {
            if(auth.isLogin === true) {
                props.navigation.navigate('Main');
            } else {
                Alert.alert('로그인에 실패 했습니다')
                props.navigation.Navigate('Auth');
            }
        } else {
            this._switchAuth();
        } 
    }

    _switchAuth = async () => {
        const userToken = await AsyncStorage.getItem("userToken");
        if(userToken !== null) {
            this.props.navigation.navigate("Main");
        } else {
            this.props.navigation.navigate("Auth");
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>LoadingScreen</Text>
            </View>
        );
    }
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});