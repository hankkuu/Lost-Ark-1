import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import { colors } from '@util/Styles'
import Button from '@shared/Button'
import NavigationService from '@navigation/options/NavigationService';

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Setting'
        }        
    }
    render() {
        const { name } = this.state;
        return (
            <ScrollView style={styles.mainScroll}
                            contentContainerStyle={styles.container}
            >
                <Button
                    style={styles.btn}
                    onPress={() => NavigationService.navigate('Notice')}
                >공지</Button>
                <Button
                    style={styles.btn}
                    onPress={() => NavigationService.navigate('SystemAlarm')}
                >알람설정</Button>
                <Button
                    style={styles.btn}
                    onPress={() => NavigationService.navigate('Setting3')}
                >보안</Button>
                <Button
                    style={styles.btn}
                    onPress={() => NavigationService.navigate('Setting4')}
                >도움말</Button>
                <Button
                    style={styles.btn}
                    onPress={() => NavigationService.navigate('Setting5')}
                >고객센터</Button>
                <Button
                    style={styles.btn}
                    onPress={() => NavigationService.navigate('Setting6')}
                >버전정보</Button>
            </ScrollView>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainScroll: {
        //backgroundColor: colors.background,
    },
    btn: {
        backgroundColor: colors.dusk,
        alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 2,
        width: 240,
        height: 52,
        borderColor: 'white',
        marginBottom: 25,

        alignItems: 'center',
        justifyContent: 'center',
    },
});