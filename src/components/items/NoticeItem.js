import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class NoticeItem extends Component {
    constructor(props){
        super(props);        
        //console.log(props);
    }
    render() {
        const { img, displayName } = this.props.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={this.props.onPress}
                >
                    <Text style={{ fontSize: 20 }}>{img}</Text>
                    <Text style={{ paddingLeft: 50 }}>{displayName}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default NoticeItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
});