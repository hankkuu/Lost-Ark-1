import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export const MainTabNavigationOptions = ({ navigation }) => ({
    title: 'Lost Ark',
    headerLeft: () => {
        const { routeName } = navigation.state;
        //console.log(navigation);
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    
                    navigation.navigate('My')
                }}
            >
                <Text>계정<Text style={styles.txtSub}>0</Text></Text>
            </TouchableOpacity>
        )
    },
    headerRight:
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('New2')}
            style={{marginRight: 10}}
        >
            <Text>검색</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('Alarm')}
        >
            <Text>알람<Text style={styles.txtSub}>0</Text></Text>
        </TouchableOpacity>
        </View>,
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