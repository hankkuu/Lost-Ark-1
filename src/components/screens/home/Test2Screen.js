import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Test2Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test1Screen</Text>
            </View>
        );
    }
}
export default Test2Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});