import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Colors';

export const HeaderNavigationOptions = ({ navigation }) => ({
    headerBackTitle: null,
    headerStyle: {
        backgroundColor: colors.blueyGray,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        elevation: 0,
        //
    },
    headerTitleStyle: {
        flex: 1,
        color: 'white',
        textAlign: 'center',   //
        alignSelf: 'center'
    },
    headerTintColor: 'red',
    
    title: "Setting",
    headerLeft: () => {
        const { routeName } = navigation.state;
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { navigation.navigate('Notice') }}
            >
                <Text style={styles.txt}>알람
                   <Text style={styles.txtSub}>3</Text>
                </Text>
            </TouchableOpacity>
        )
    },
    headerRight: 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Settings')}
            >
                <Text style={styles.txt}>계정</Text>
            </TouchableOpacity>,
})


const styles = StyleSheet.create({
    txt: {
        color: 'white',
        fontSize: 15,
    },
    txtSub: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
        left: 55,
    },
    imgHeaderLeft: {
        marginLeft: 20,
        width: 28,
        height: 28,
        borderRadius: 14,
        borderColor: 'white',
        borderWidth: 1,
    },
    imgHeaderRight: {
        width: 24,
        height: 24,
        right: 12,
        tintColor: 'white',
        marginLeft: 20,
    },
});