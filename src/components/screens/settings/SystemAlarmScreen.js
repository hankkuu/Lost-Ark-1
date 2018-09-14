import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Modal
} from "react-native";

import { statusBarHeight } from '@util/Styles';

class SystemAlarmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible})
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
                        <Text>SystemAlarmScreen</Text>
                    </View>
                </Modal>                
            </View>
        );
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
    }
});