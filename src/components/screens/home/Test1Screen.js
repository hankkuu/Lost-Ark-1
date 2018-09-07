import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Test1Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test1Screen</Text>
            </View>
        );
    }
}
export default Test1Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});