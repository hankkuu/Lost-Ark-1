import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert
} from "react-native";

import AlarmItem from '@item/AlarmItem'


class AlarmScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alarmList: [
                { uid: 0, subject: '[선물]', content: '아이템 수령' },
                { uid: 1, subject: '[쿠폰]', content: '아이템 수령' },
                { uid: 2, subject: '[전체공지]', content: '아이템 수령' } 
            ],
            isUpdate: false
        }

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.alarmList}
                    keyExtractor={item => item.uid.toString()}
                    renderItem={this.renderItem}
                >
                </FlatList>
            </View>
        );
    }
    renderItem = ({item, index}) => {
        const listItem = 
            <AlarmItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
        return listItem;
    }
    onItemClick = (item) => {       
        Alert.alert(
            '알람 확인',
            '수령하시겠습니까?',
            [                
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => this.receiveItem(item) },
            ],
            { cancelable: false }
        )
    }
    receiveItem = (item) => {
        //console.log(item);
        const { alarmList } = this.state;
      
        this.setState({ isUpdate: true }, () => {
            let n = alarmList.indexOf(item);
            //console.log(n);
            alarmList.splice(n, 1);
            if(alarmList.length === 0) {
                this.setState({
                    alarmList: []
                })
                return;
            }
            //console.log(alarmList);
            this.setState({
                alarmList: alarmList
            })
        })
        //this.props.navigation.goBack();
    }
}
export default AlarmScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    }
});