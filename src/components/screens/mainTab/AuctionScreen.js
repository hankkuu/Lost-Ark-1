import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class AuctionScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>AuctionScreen</Text>
            </View>
        );
    }
}
export default AuctionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});