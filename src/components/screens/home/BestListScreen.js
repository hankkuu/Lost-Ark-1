import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class BestListScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>BestListScreen</Text>
            </View>
        );
    }
}
export default BestListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});