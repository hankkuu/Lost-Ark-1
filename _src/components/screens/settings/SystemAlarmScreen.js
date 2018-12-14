import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Modal,
    Switch,
    Picker,
    TouchableOpacity
} from "react-native";

import { statusBarHeight } from '@util/Styles';

class SystemAlarmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            ex1: false,
            ex2: false,
            ex3: false,
            ex4: ''
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible })
        this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='fade'
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={this.setModalVisible.bind(this, false)}
                >
                    <View style={styles.modalView}>
                        <View style={{ flexDirection: 'row', }}>
                            <TouchableOpacity
                                onPress={() => console.log("a")}
                            >
                                <Text Style={{ fontSize: 30 }}>HeadLine</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.setModalVisible.bind(this, false)}
                                style={{ position: "absolute", left: 400, }}
                            >
                                <Text Style={{ fontSize: 30, }}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.img}>Image</Text>
                        <View style={styles.content}>
                            <View style={styles.item}>
                                <Text style={styles.txt}>Description</Text>
                                <Switch
                                    onValueChange={(val) => this.onValChange('ex1', val)}
                                    value={this.state.ex1}
                                />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.txt}>Description</Text>
                                <Switch
                                    onValueChange={(val) => this.onValChange('ex2', val)}
                                    value={this.state.ex2}
                                />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.txt}>Description</Text>
                                <Switch
                                    onValueChange={(val) => this.onValChange('ex3', val)}
                                    value={this.state.ex3}
                                />
                            </View>
                            <View style={styles.item}>
                                <Text style={styles.txt}>Description</Text>
                                <Picker
                                    selectedValue={this.state.ex4}
                                    style={{ height: 100, width: 150 }}
                                    onValueChange={(itemValue, itemIndex) => this.onValChange('ex4', itemValue )}>
                                    <Picker.Item label="react" value="react" />
                                    <Picker.Item label="react native" value="reactnative" />
                                    <Picker.Item label="dart" value="dart" />
                                    <Picker.Item label="flutter" value="flutter" />
                                    <Picker.Item label="objective c" value="objective-c" />
                                    <Picker.Item label="swift" value="swift" />
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="Kotlin" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

    onValChange = (type, val) => {
        switch (type) {
            case 'ex1':
                this.setState({ ex1: val });
                break;
            case 'ex2':
                this.setState({ ex2: val });
                break;
            case 'ex3':
                this.setState({ ex3: val });
                break;
            case 'ex4':
                this.setState({ ex4: val });
                break;
        }
    }
}
export default SystemAlarmScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: statusBarHeight,
    },
    modalView: {
        backgroundColor: 'white',
        height: '100%'
    },
    img: {
        height: 100
    },
    content: {
        flexDirection: 'column',
    },
    item: {
        alignItems: 'center',
        flexDirection: 'row',
    }
});