import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { colors } from '../../../util/Styles';
import TextInput from '../../shared/TextInput';
import Button from '../../shared/Button';

class SignUpScreen extends Component {
    static navigationOptions = {
        title: 'Sign Up'
    }
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',      
            isRegistering: false      
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    style={styles.ScrollView}
                    contentComtainerStyle={styles.scrollViewContainer}  // 정렬용
                >
                    <View style={styles.wrapper}>
                        <TextInput
                            style={{ marginTop: 8  }}
                            txtLabel={('Account')}
                            txtHint={('Account')}
                            txt={this.state.account}
                            onTextChanged={(text) => this.onTextChanged('Account', text)}
                        />
                        <TextInput
                            style={{ marginTop: 24  }}
                            txtLabel={('Password')}
                            txtHint={('Password')}
                            txt={this.state.password}
                            onTextChanged={(text) => this.onTextChanged('Password', text)}
                            isPassword={true}
                        />
                        <View style={styles.btnWrapper}>
                            <Button
                                isLoading={this.state.isRegistering}
                                onPress={this.onRegister}
                                style={styles.btnRegister}
                                textStyle={styles.txtRegister}
                            >{('REGISTER')}</Button>
                          
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    onTextChanged = (type, text) => {
        switch (type) {
            case 'Account':
                this.setState({ account: text });
                return;
            case 'Password':
                this.setState({ password: text });
                return;          
        }
    }
    onRegister = () => {
        this.setState({
            isRegistering: true
        }, async () => {
            try {
                // 일단 미 구현

            } catch (error) {
                this.setState({ isRegistering: false });
            }
        })
    }
}
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        flexDirection: 'column',
        //backgroundColor: 'white',
    },
    scrollView: {
        alignSelf: 'stretch',
    },
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        marginTop: 40 ,
        width: '78%',

        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 35,
    },
    btnWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-around",
        //alignItems: 'center',
    },
    btnRegister: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        borderRadius: 4 ,
        borderWidth: 1 ,
        width: 136 ,
        height: 60 ,
        marginLeft: 4 ,
        marginTop: 24 ,
        marginBottom: 48 ,
        shadowColor: colors.dusk,
        shadowOffset: {
            width: 0,
            height: 10 ,
        },
        shadowRadius: 4 ,
        shadowOpacity: 0.3,

        alignItems: 'center',
        justifyContent: 'center',
    },
    txtRegister: {
        fontSize: 16 ,
        fontWeight: 'bold',
        color: 'white',
    },
});