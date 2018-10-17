import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch
} from "react-native";

import { colors } from '@util/Styles'
import Button from '@shared/Button'
import NavigationService from '@navigation/options/NavigationService';

class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: true,
        }
    }

    onValChange = (setValue) => {
        this.setState({
            value1: setValue
        })
    }

    render() {
       
        return (
            <ScrollView style={styles.mainScroll}
                contentContainerStyle={styles.container}
            >
                <View style={{ flexDirection: 'column' }}>
                    <Text>Section1</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm1</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm2</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("")}
                        >
                            <Text>>></Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Section2</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm3</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm4</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Section3</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm5</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("")}
                        >
                            <Text>>></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm6</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Section4</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm7</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm8</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Section5</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm9</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("")}
                        >
                            <Text>>></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between" }}>
                        <Text>IMG</Text>
                        <Text>Alarm10</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("")}
                        >
                            <Text>>></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
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