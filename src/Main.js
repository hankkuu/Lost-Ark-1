import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import {
    AppLoading,
    Font,
} from 'expo';
import AppSwitchNavigator from '@navigation/AppSwitchNavigator';
//import { bootstrap } from './config/bootstrap';
import { KittenTheme } from '../config/theme';
import { RkTheme, } from 'react-native-ui-kitten';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoadingComplete: false
        }

        RkTheme.setTheme(KittenTheme);

        RkTheme.setType('RkText', 'awesome', {
            fontFamily: 'fontawesome',
        });

        RkTheme.setType('RkText', 'header1', {
            fontSize: theme => theme.fonts.sizes.h1,
            fontFamily: theme => theme.fonts.family.bold,
        });
        RkTheme.setType('RkText', 'header2', {
            fontSize: theme => theme.fonts.sizes.h2,
            fontFamily: theme => theme.fonts.family.bold,
        });
        RkTheme.setType('RkText', 'header3', {
            fontSize: theme => theme.fonts.sizes.h3,
            fontFamily: theme => theme.fonts.family.bold,
        });
        RkTheme.setType('RkText', 'header4', {
            fontSize: theme => theme.fonts.sizes.h4,
            fontFamily: theme => theme.fonts.family.bold,
        });
        RkTheme.setType('RkText', 'header5', {
            fontSize: theme => theme.fonts.sizes.h5,
            fontFamily: theme => theme.fonts.family.bold,
        });
        RkTheme.setType('RkText', 'header6', {
            fontSize: theme => theme.fonts.sizes.h6,
            fontFamily: theme => theme.fonts.family.bold,
        });
        RkTheme.setType('RkText', 'secondary1', {
            fontSize: theme => theme.fonts.sizes.s1,
            fontFamily: theme => theme.fonts.family.light,
        });
        RkTheme.setType('RkText', 'secondary2', {
            fontSize: theme => theme.fonts.sizes.s2,
            fontFamily: theme => theme.fonts.family.light,
        });
        RkTheme.setType('RkText', 'secondary3', {
            fontSize: theme => theme.fonts.sizes.s3,
            fontFamily: theme => theme.fonts.family.regular,
        });
        RkTheme.setType('RkText', 'secondary4', {
            fontSize: theme => theme.fonts.sizes.s4,
            fontFamily: theme => theme.fonts.family.regular,
        });
        RkTheme.setType('RkText', 'secondary5', {
            fontSize: theme => theme.fonts.sizes.s5,
            fontFamily: theme => theme.fonts.family.light,
        });
        RkTheme.setType('RkText', 'secondary6', {
            fontSize: theme => theme.fonts.sizes.s6,
            fontFamily: theme => theme.fonts.family.light,
        });
        RkTheme.setType('RkText', 'secondary7', {
            fontSize: theme => theme.fonts.sizes.s7,
            fontFamily: theme => theme.fonts.family.regular,
        });
        RkTheme.setType('RkText', 'primary1', {
            fontSize: theme => theme.fonts.sizes.p1,
            fontFamily: theme => theme.fonts.family.light,
        });
        RkTheme.setType('RkText', 'primary2', {
            fontSize: theme => theme.fonts.sizes.p2,
            fontFamily: theme => theme.fonts.family.regular,
        });
        RkTheme.setType('RkText', 'primary3', {
            fontSize: theme => theme.fonts.sizes.p3,
            fontFamily: theme => theme.fonts.family.light,
        });
        RkTheme.setType('RkText', 'primary4', {
            fontSize: theme => theme.fonts.sizes.p4,
            fontFamily: theme => theme.fonts.family.regular,
        });

    }

    componentWillMount() {
        this.loadAssets();
    }

    loadAssets = async () => {
        await Font.loadAsync({
            fontawesome: require('@asset/fonts/fontawesome.ttf'),
            icomoon: require('@asset/fonts/icomoon.ttf'),
            'Righteous-Regular': require('@asset/fonts/Righteous-Regular.ttf'),
            'Roboto-Bold': require('@asset/fonts/Roboto-Bold.ttf'),
            'Roboto-Medium': require('@asset/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('@asset/fonts/Roboto-Regular.ttf'),
            'Roboto-Light': require('@asset/fonts/Roboto-Light.ttf'),
        });
        this.setState({ isLoadingComplete: true });
    };


    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading />
            );
        } else {
            return (
                <View style={styles.container}>
                    <AppSwitchNavigator />
                </View>
            );
        }
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