import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class NewContents3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NewContents3</Text>
            </View>
        );
    }
}
export default NewContents3;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});