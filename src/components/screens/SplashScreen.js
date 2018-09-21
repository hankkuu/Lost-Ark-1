import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import { AppLoading } from 'expo';

import { statusBarHeight } from '@util/Styles'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        }

        setTimeout(() => {
            props.navigation.navigate('Loading');
        }, 1500);
    }
    // component 함수는 react component life cycle 에서 온 것인데 일단 필요한 경우에만 넣도록 하자
    // componentDidMount() {
    //     setTimeout(() => {
    //         // 스택이동의 히스토리를 리셋해주는 방법 dispatch 매서드 이용
    //         this.props.navigation.dispatch(
    //             {
    //                 type: 'Navigation/RESET',
    //                 index: 0,
    //                 actions: [{ routeName: 'Login'}]
    //             }
    //         )
    //     }, 1500);
    // }

    async _auth() {
        const userToken = await AsyncStorage.getItem("userToken");
        //console.log(userToken);
        if(userToken !== null) {
            this.props.navigation.navigate("Main");
        } else {
            this.props.navigation.navigate("Auth");
        }
    }

    render() {
        const text = 'Lost Ark';
        // if(!this.state.isReady) {
        //     return (
        //         <AppLoading 
        //             startAsync={this._auth.bind(this)}
        //             onFinish={() => this.setState({ isReady: true })}
        //             onError={console.warn}
        //         />
        //     );
        // }

        return (
            <View style={styles.container}>
                <View style={styles.splash} >
                    <Image style={styles.imgSplash}
                        source={require('../../../assets/lostArk6.png')}
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.txtSplash}>{text}</Text>
                </View>
            </View>
        );
    }
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: statusBarHeight,
        //width: '100%',
        //height: '100%',
    },
    splash: {
        position: 'absolute',
        flexDirection: 'column',
        //top: 0,
        //left: 0,
        width: '100%',
        height: '100%',
    },
    imgSplash: {
        //flex: 1,
        width: '100%',
        height: '100%', // 높이가 안맞는 이유 확인 
        //resizeMode: 'contain'
    },
    txtSplash: {
        textAlign: 'center',
        fontSize: 70,
        marginTop: 100,
        color: '#fff3f1' 
    }
});