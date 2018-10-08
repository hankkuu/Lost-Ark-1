import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class RechargeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>RechargeScreen</Text>
            </View>
        );
    }
}
export default RechargeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});