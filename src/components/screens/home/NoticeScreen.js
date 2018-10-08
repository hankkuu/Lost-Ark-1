import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Platform,
    TouchableOpacity,
    FlatList
} from "react-native";
import { createStackNavigator } from 'react-navigation';

import { screenWidth } from '@util/Styles';
import NoticeItem from '@item/NoticeItem';

class NoticeScreen extends Component {
    static navigationOptions = {
        // 정렬을 두가지식으로 할수있다 일단 컴포넌트로 스타일 주는 것을 우선순위하나 Option만 따로 할경우 string으로 설정하자
        //headerTitle: <Text style={{flex:1, textAlign: 'center', alignSelf: 'center',}}>공지사항</Text>,
        title: '공지사항',
        headerTitleStyle: { flex:1, textAlign: 'center', alignSelf: 'center', }
    }

    constructor(props) {
        super(props);
        this.state = {
            notices: [],
        }
  
    }

    componentDidMount() {
        const dummy = [
            { uid: '0', img: '1', content: '새단장 중인 8.0 업데이트', },
            { uid: '1', img: '2', content: '어벤저스급 업데이트', },
            { uid: '2', img: '3', content: '추석연휴 이벤트',  },
            { uid: '3', img: '4', content: '안드로이드 4.0 지원중단 안내', },
        ]
        this.setState({
            notices: dummy
        })
        // 이렇게 하지 말자 this.state.notices = dummy;
    }

    render() {
    
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={
                        this.state.notices.length === 0
                        ? { flex: 1, alignItems: 'center', justifyContent: 'center', }
                        : null}    // 이방식으로 해야 한 가운데 No Content를 볼 수 있다 
                    keyExtractor={(item, index) => item.uid}
                    data={this.state.notices}
                    renderItem={this.renderItem}
                    onRefresh={this.onRefresh}
                    extraData={this.state}
                    ListEmptyComponent={<Text>NO CONTENT</Text>}
                >
                </FlatList>
                
            </View>
        );
    }

    renderItem = ({item, index}) => {
        const listItem = 
            <NoticeItem
                item={item}
                onPress={() => this.onItemClick(item)}
            />
            return listItem;
    }

    onItemClick = (item) => {
        this.props.navigation.navigate('DetailNotice', { });
    }

}
export default NoticeScreen;

// const DismissButton = ({ navigation, style }) => (
//     <TouchableOpacity style={[{ width: 24, height: 24, left: 14, marginRight: 20 }, style]} onPress={() => navigation.dismiss()}>
//         <Text>ttt</Text>
//     </TouchableOpacity>);

// const commonNavigationOptionsForModal = (props) => ({
//     headerLeft: <DismissButton navigation={props.navigation} />,
// });

// const navigatorConfig = {
//     navigationOptions: commonNavigationOptionsForModal,
// }

// export default TestNavigator = createStackNavigator({
//     TestNavigator: { screen: NoticeScreen }
// }, navigatorConfig);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: 'white',
        flex: 1,
        width: screenWidth ,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        ...Platform.select({
          ios: {
            shadowColor: "rgb(50,50,50)",
            shadowOpacity: 0.5,
            shadowRadious: 5,
            shadowOffset: {
              height: -1,          
              width: 0
            }
          },
          android: {
            elevation: 3 
          }
        })
      },
      input: {
        padding: 20,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        fontSize: 25,
      },
      toDos: {
        alignItems: "center",
      },
      list: {
          alignSelf: 'stretch'
      }
});