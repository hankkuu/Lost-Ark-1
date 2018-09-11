import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { colors } from '@util/Styles';
import TextInput from '@shared/TextInput';
import Button from '@shared/Button';

class FindPWScreen extends Component {
    static navigationOptions = {
        title: 'Find Password'
    }
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            email: ''
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollViewContainer}
                >
                    <View style={styles.wrapper}>
                        <TextInput
                            style={{ marginTop: 8 }}
                            txtLabel={('Email')}
                            txtHint={('Email')}
                            txt={this.state.email}
                            onTextChanged={(text) => this.onTextChanged('Email', text)}
                            isPassword={true}
                        />
                        <View style={styles.btnWrapper}>
                            <Button
                                isLoading={this.state.isLoading}
                                onPress={this.onSendLink}
                                style={styles.btnRegister}
                                textStyle={styles.txtRegister}
                            >{('Send')}</Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
    onTextChanged = (type, text) => {
        switch (type) {
            case 'Email':
                this.setState({ email: text });
                return;
        }
    }
}
export default FindPWScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollView: {
        alignSelf: 'stretch',
    },
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        marginTop: 40,
        width: '78%',

        flexDirection: 'column',
        alignItems: 'center',
    },
    btnWrapper: {
        width: '100%',
        alignItems: 'flex-end',
    },
    btnRegister: {
        backgroundColor: colors.dusk,
        borderColor: colors.dusk,
        borderRadius: 4,
        borderWidth: 1,
        width: 136,
        height: 60,
        marginLeft: 4,
        marginTop: 24,
        marginBottom: 48,
        shadowColor: colors.dusk,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,

        alignItems: 'center',
        justifyContent: 'center',
    },
});