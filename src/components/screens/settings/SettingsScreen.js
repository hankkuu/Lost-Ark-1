import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
    Image
} from "react-native";

import { colors } from '@util/Colors'
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
                <View style={{ flexDirection: 'column', marginTop: 10, padding: 10, borderColor: 'black', borderBottomWidth: 1}}>
                    <Text style={{marginBottom : 5}}>Section1</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Image source={require("../../../../assets/setting1.png")} />
                        <Text style={{ left: -100}}>Alarm1</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}
                        onPress={() => this.props.navigation.navigate("Notice")}
                    >
                        <Image source={require("../../../../assets/setting2.png")} />
                        <Text style={{ left: -110 }}>Alarm2</Text>
                        <Text style={{ marginRight: 10 }}>>></Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10, padding: 10, borderColor: 'black', borderBottomWidth: 1 }}>
                    <Text style={{ marginBottom : 5}}>Section2</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Image source={require("../../../../assets/setting3.png")} />
                        <Text style={{ left: -100 }}>Alarm3</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Image source={require("../../../../assets/setting4.png")} />
                        <Text style={{ left: -100 }}>Alarm4</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10, padding: 10, borderColor: 'black', borderBottomWidth: 1 }}>
                    <Text style={{ marginBottom : 5}}>Section3</Text>
                    <View >
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}
                            onPress={() => this.props.navigation.navigate("SystemAlarm")}
                        >
                            <Image source={require("../../../../assets/setting5.png")} />
                            <Text style={{ left: -110 }}>Alarm5</Text>
                            <Text style={{ marginRight: 10 }}>>></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Image source={require("../../../../assets/setting1.png")} />
                        <Text style={{ left: -100 }}>Alarm6</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10, padding: 10, borderColor: 'black', borderBottomWidth: 1 }}>
                    <Text style={{ marginBottom : 5}}>Section4</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Image source={require("../../../../assets/setting2.png")} />
                        <Text style={{ left: -100 }}>Alarm7</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Image source={require("../../../../assets/setting3.png")} />
                        <Text style={{ left: -100 }}>Alarm8</Text>
                        <Switch
                            onValueChange={this.onValChange}
                            value={this.state.value1}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', marginTop: 10, padding: 10, borderColor: 'black', borderBottomWidth: 1 }}>
                    <Text style={{ marginBottom : 5}}>Section5</Text>
                    <View >
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}
                            onPress={() => this.props.navigation.navigate("Setting4")}
                        >
                            <Image source={require("../../../../assets/setting4.png")} />
                            <Text style={{ left: -110 }}>Alarm9</Text>
                            <Text style={{ marginRight: 10 }}>>></Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}
                            onPress={() => this.props.navigation.navigate("Setting4")}
                        >
                            <Image source={require("../../../../assets/setting5.png")} />
                            <Text style={{ left: -105 }}>Alarm10</Text>
                            <Text style={{ marginRight: 10 }}>>></Text>
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
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
        backgroundColor: 'white'
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