import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Test5Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Test1Screen</Text>
            </View>
        );
    }
}
export default Test5Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});