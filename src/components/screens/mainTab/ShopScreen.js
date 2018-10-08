import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class ShopScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ShopScreen</Text>
                <Button title='Alarm' onPress={() => this.props.navigation.navigate('Alarm')}></Button>
                <Button title='New Contents1' onPress={() => this.props.navigation.navigate('Notice')}></Button>
                <Button title='New Contents2' onPress={() => this.props.navigation.navigate('DetailNotice')}></Button>
                <Button title='New Contents3' onPress={() => this.props.navigation.navigate('New3')}></Button>
                <Button title='New Contents4' onPress={() => this.props.navigation.navigate('New4')}></Button>
            </View>
        );
    }
}
export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});