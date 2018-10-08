import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    Alert,
    Animated,
} from "react-native";

import * as Animatable from 'react-native-animatable';

const Loading = (props) => {
    //console.log(props);
    const auth = props.navigation.state.params;
    if(auth !== undefined && auth !== null) {
        if(auth.isLogin === true) {
            props.navigation.navigate('Main');
        } else {
            Alert.alert('로그인에 실패 했습니다')
            props.navigation.Navigate('Auth');
        }
    } else {
        //_switchAuth(props);
    } 
    return (
        null
    )
}
export default Loading;

_switchAuth = async (props) => {
    const userToken = await AsyncStorage.getItem("userToken");
    console.log(userToken);
    if(userToken !== null) {
        props.navigation.navigate("Main");
    } else {
        props.navigation.navigate("Auth");
    }
}


// Loading에서는 화면 처리를 따로 안함 
class LoadingScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            spinValue: new Animated.Value(0),           
            spin: null,
            unAuthorization : false
        }
        // 마음에 드는 처리는 아니다.. 일단 넘어가자 
        this.state.spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '1260deg']
        }); 

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
        console.log(userToken);
        if(userToken !== null) {
            this.props.navigation.navigate("Main");
        } else {
            this.props.navigation.navigate("Auth");
        }
    }

    animateRotateLoop = (spinValue, duration) => {
        if (!duration) {
            duration = 2000;
        }
        /**
         * Animation for buffering image.
         * First set up animation
         * Second interpolate beginning and end values (in this case 0 and 1)
         */
        Animated.loop(
            Animated.sequence([
                Animated.timing(spinValue, {
                    toValue: 1,
                    duration,
                    delay: 0,
                }),
                Animated.timing(spinValue, {
                    toValue: 0,
                    duration,
                }),
            ]),
            {
                iterations: 4,
            },
        ).start();
    };

    componentDidMount() {
        this.animateRotateLoop(this.state.spinValue, 3000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.Image
                    source={require('../../../assets/rpg.png')}
                    style={{
                        width: 100,
                        height: 100,
                        marginBottom: 16,
                        transform: [{ rotate: this.state.spin }],
                    }}
                />
                <Animatable.Text
                    animation='fadeIn'
                    iterationCount={'infinite'}
                    direction='alternate'
                    style={styles.text}
                >
                    {'Loading'}
                </Animatable.Text>
            </View>
        );
    }
}
//export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text :{
        color: "red",
        fontSize: 26
    },
    image: {
   
    }
});