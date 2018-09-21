import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class NewContents4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NewContents4</Text>
            </View>
        );
    }
}
export default NewContents4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});