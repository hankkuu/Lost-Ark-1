import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { colors } from '@util/Styles';

const Right = () => {
    const { routeName } = navigation.state;
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {console.log(routeName)}}
        >
            <Text style={styles.txt}>My</Text>
        </TouchableOpacity>
    )        
}

export const RightHeaderNavigationOptions = ({ navigation }) => ({
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
    title: navigation.state.routeName,
    headerTintColor: 'white',
    headerRight: 
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {console.log(navigation.state.routeName)}}
            >
                <Text style={styles.txt}>My</Text>
            </TouchableOpacity>
        ,
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
        marginLeft: 5,
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