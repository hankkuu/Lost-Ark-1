import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Test4Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>dfgsdfgsfdg</Text>
            </View>
        );
    }
}
export default Test4Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});