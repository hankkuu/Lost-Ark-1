import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class PresentScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>PresentScreen</Text>
            </View>
        );
    }
}
export default PresentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});