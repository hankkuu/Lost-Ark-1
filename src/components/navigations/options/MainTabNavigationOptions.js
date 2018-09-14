import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const MainTabNavigationOptions = ({ navigation }) => ({
    title: 'Lost Ark',
    headerLeft:     
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Account')}
        >
            <Text>계정<Text style={styles.txtSub}>0</Text></Text>
        </TouchableOpacity>,
    headerRight:
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Alarm')}
        >
            <Text>알람<Text style={styles.txtSub}>0</Text></Text>
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
})