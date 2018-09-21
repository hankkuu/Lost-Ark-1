import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class CouponScreen extends Component {
    static navigatonOptions = {
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>CouponScreen</Text>
            </View>
        );
    }
}
export default CouponScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});