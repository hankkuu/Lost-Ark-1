import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class NewContents5 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NewContents5</Text>
            </View>
        );
    }
}
export default NewContents5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});