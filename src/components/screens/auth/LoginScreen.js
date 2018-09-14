import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import { colors, statusBarHeight } from '@util/Styles';

//import { IC_ICON } from '../../../util/Icons';

import TextInput from '@shared/TextInput';
import Button from '@shared/Button';

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            Account: '',
            Password: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: '100%', height: '100%' }}
                    source={require('../../../../assets/lostArk5.png')}
                >
                    <View style={styles.iconWrapper}>
                        <Text style={styles.iconTxt}>{'Lost Ark'}</Text>
                        {/* <Image style={styles.icon} source={}/> */}
                    </View>
                    <View style={styles.wrapper}>
                        <TextInput
                            style={styles.txtInput}
                            txtLabel={'Account'}
                            txtHint={'Account'}
                            txt={this.state.Account}
                            onTextChanged={(text) => this.onTextChanged('Account', text)}
                        />
                        <TextInput
                            style={styles.txtInput}
                            txtLabel={'Password'}
                            txtHint={'Password'}
                            txt={this.state.Password}
                            onTextChanged={(text) => this.onTextChanged('Password', text)}
                            isPassword={true}
                        />
                        {/* Props.children
                     <myComponent>xxx</myComponent>와 같이 작성할 때 xxx를 얻고자 할때는 this.props.children 프로퍼티를 사용. */}
                        <View style={styles.viewBtnWrapper}>
                            <Button
                                style={styles.btnSignup}
                                onPress={this.onSignUp}
                            >{'sign up'}</Button>
                            <Button
                                isLoading={this.state.isLogin}
                                style={styles.btnLogin}
                                onPress={this.onLogin}
                            >{'Login'}</Button>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={this.onFindPW}
                            style={styles.btnFindPW}
                        >
                            <Text style={styles.txtFindPW}>{'Find my password'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row-reverse", }}>
                        {/* <Image style={styles.imgCopyright} source={require('../../../../assets/smilegate_rpg.png')} ></Image> */}
                        <Text style={styles.txtCopyright}>copyright by smilegate RPG</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }

    onTextChanged = (type, text) => {
        switch (type) {
            case 'Account':
                this.setState({ Account: text });
                return;
            case 'Password':
                this.setState({ Password: text });
                return;
        }
    }
    onSignUp = () => {
        this.props.navigation.navigate('SignUp');
    }
    onLogin = () => {
        this.setState({
            isLogin: true
        }, async () => {
            // 원래는 네트워크 통신으로 인증을 해야 한다.. 임시방편 
            //const userData = auth(this.state.email, this.state.pw);
            //console.log(userData);
            this.props.navigation.navigate('Loading', { isLogin: true });
        })
    }
    onFindPW = () => {
        this.props.navigation.navigate('FindPW');
    }


}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    iconWrapper: {
        position: 'absolute',
        top: 76,
        left: 40,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    icon: {
        width: 60,
        height: 48,
    },
    iconTxt: {
        color: colors.paleGray,
        fontSize: 33,
        fontWeight: 'bold',
        marginTop: 16,
    },
    wrapper: {
        marginTop: 260,
        width: '78%',
        height: 300,

        flexDirection: 'column',
        alignItems: 'center',
        left: 45
    },
    viewBtnWrapper: {
        alignSelf: 'stretch',
        marginTop: 20,

        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    btnSignup: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 1,
        width: 136,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',

        marginRight: 49,
    },
    btnLogin: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 1,
        width: 136,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',

        //marginLeft: 4,
        // shadowColor: colors.dusk,
        // shadowOffset: {
        //     width: 0,
        //     height: 10,
        // },
        // shadowRadius: 4,
        // shadowOpacity: 0.3, 
    },
    btnFindPW: {
        marginTop: 20,
    },
    txtFindPW: {
        fontSize: 12,
        color: colors.dodgerBlue,
        textDecorationLine: 'underline',
    },
    txtCopyright: {
        marginTop: 60,
        fontSize: 12,
        color: colors.paleGray,
    },
    imgCopyright: {
        width: '70%'
    }
});