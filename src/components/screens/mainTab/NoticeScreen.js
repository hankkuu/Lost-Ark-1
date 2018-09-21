import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class NoticeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>NoticeScreen</Text>
            </View>
        );
    }
}
export default NoticeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});