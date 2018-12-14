import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    Animated,
    TextInput,
    Image
} from "react-native";

import UserListItem from '@item/UserListItem'
import { colors } from '@util/Colors'

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

class AuctionScreen extends Component {

    _users = []

    constructor(props) {
        super(props);
        this.state= {
            users: [],
            searchTxt: '',
            scrollY: new Animated.Value(0)
        }
    }

    componentDidMount() {
        users = [
            { uid: 0, img: 'KangHG', displayName: '강한규', statusMsg: 'hello'  },
            { uid: 1, img: 'IMHG', displayName: '임형관', statusMsg: 'hello' },
            { uid: 2, img: 'JungDM', displayName: '정동민', statusMsg: 'hello' },
            { uid: 3, img: 'KimSK', displayName: '김성기', statusMsg: 'hello' },
            { uid: 4, img: 'KimYH', displayName: '김윤희', statusMsg: 'hello' },
            { uid: 5, img: 'LeeWG', displayName: '이원지', statusMsg: 'hello' },
            { uid: 6, img: 'LeeDY', displayName: '이동용', statusMsg: 'hello' },
            { uid: 7, img: 'JungIS', displayName: '정인수', statusMsg: 'hello' },
            { uid: 8, img: 'JungJY', displayName: '정재윤', statusMsg: 'hello' },
            { uid: 9, img: 'JungGH', displayName: '정규호', statusMsg: 'hello' },
            { uid: 10, img: 'ParkKW', displayName: '박경원', statusMsg: 'hello' },
            { uid: 11, img: 'LeeMH', displayName: '이명호', statusMsg: 'hello' },
            { uid: 12, img: 'AnMH', displayName: '안명환', statusMsg: 'hello' },
            { uid: 13, img: 'LeeYG', displayName: '이윤관', statusMsg: 'hello' },
            { uid: 14, img: 'OhYT', displayName: '오용택', statusMsg: 'hello' },        
        ]
        this._users = users;
        this.setState({
            users: users
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    style={[styles.viewSearch, {
                        height: 50,
                        transform: [{
                            translateY: this.state.scrollY.interpolate({
                                inputRange: [-50, 0, 50, 100],
                                outputRange: [0, 0, -50, -50]
                            })
                        }]
                    }]}
                >
                    <Animated.View style={{
                        position: 'absolute', width: '100%', paddingHorizontal: 20, height: 50,
                        opacity: this.state.scrollY.interpolate({
                            inputRange: [-50, 0, 50, 100],
                            outputRange: [1, 1, 0, 0]
                        })
                    }}>
                        <TextInput
                            onChangeText={(text => this.onTxtChanged(text))}
                            underlineColorAndroid='transparent'
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={false}
                            style={styles.txtInput}
                            onSubmitEditing={this.onSearch}
                            defaultValue={this.state.searchTxt}
                        />
                        <Image source={require('../../../../assets/picSearch.png')}
                            style={styles.imgSearch}
                        />
                    </Animated.View>
                </Animated.View>
                <AnimatedFlatList 
                                style={{
                                    width: '100%', height: '100%', marginBottom: -50,
                                    transform: [{
                                        translateY: this.state.scrollY.interpolate({
                                            inputRange: [-50, 0, 50, 100],
                                            outputRange: [0, 0, -50, -50],
                                        })
                                    }],
                                }}
                                contentContainerStyle={
                                    this.state.users.length === 0 ? { flex: 1, alignItems: 'center', justifyContent: 'center' } : null
                                }
                                keyExtractor={(item, index) => item.uid.toString()}
                                data={this.state.users}
                                renderItem={this.renderItem}
                                ListEmptyComponent={<Text>{'NO CONTENT'}</Text>}
                                onScroll={Animated.event(
                                    [{ nativeEvent: { 
                                        contentOffset: { 
                                            y: this.state.scrollY 
                                        }
                                    }
                                }],
                                {
                                    useNativeDriver: true,
                                    listener: this.onScroll }
                                )}
                >                
                </AnimatedFlatList>
            </View>
        );
    }
    onScroll = (e) => {
        //console.log(e.nativeEvent.contentOffset.y);
    }
    renderItem = ({item}) => {
        return (
            <UserListItem
                item={item}
                onPress={() => this.onItemClick(item)}
            ></UserListItem>
        );
    }
    onItemClick = (item) => {

    }

    // async ~ await 패턴을 사용했다 왜냐하면 setState가 완전히 변경이 안되었는데 onSerch()가 호출되어 문자열 비교의 불일치가 일어났다 
    // await는 이런 점을 보완해준다 즉 단어 그대로 기다리는 것이다 그리고 await를 사용하면 async를 사용하는 패턴으로 코딩해야 에러가 나지 않는다 
    onTxtChanged = async (txt) => {
    //onTxtChanged = (txt) => {
        //console.log(txt);
        await this.setState({
            searchTxt: txt
        });
        // 아래와 같은 식으로 state를 건르리지 않는다.
        //this.state.searchTxt = txt;
        //console.log(txt);
        if( this.state.searchTxt === '') {
           this.setState({ users: this._users });
        }
        //this.onSearch();
    }

    onSearch = () => {
        const { users, searchTxt } = this.state;
        //const re = /[\u3131-\uD79D]/ugi;
        let findUsers = users.filter( (item) => item.displayName.includes(searchTxt));
        //console.log('onSearch: ' + searchTxt);       
        //console.log(findUsers); 
        if (searchTxt === '') {
            //console.log("전체가 보여야 한다"); // 임시로 전체를 이렇게 가져와야 할것 같다.. state 배열이 비어 있다.
            // 아래에서 상태를변경시켜 놔서 맨 처음것으로 다시 덮어써야 한다 
            this.setState({ users: this._users });
        } else {           
            if(findUsers !== undefined && findUsers !== null && findUsers.length > 0) {
                this.setState({ users: findUsers //users.filter( (item) => item.displayName.includes(searchTxt) ) 
                });
            }           
        }
    }


}
export default AuctionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    txtInput: {
        width: '100%', 
        height: 30, 
        top: 10, 
        backgroundColor: 'white',
        borderRadius: 4, 
        paddingLeft: 34, 
        paddingRight: 10
    },
    viewSearch: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: colors.paleGray,
        overflow: 'hidden',
    },
    imgSearch: {
        position: 'absolute',
        width: 16,
        height: 16,
        left: 30, top: 18,
    },
});