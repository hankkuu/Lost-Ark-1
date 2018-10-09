import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    Image,
    TouchableOpacity,
    Animated,
    TextInput,
    FlatList,
    Platform
} from "react-native";
import { colors } from '@util/Styles'

import Swiper from "react-native-swiper";
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";
import GoodsItem from "@item/GoodsItem";

class ShopScreen extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searchTxt: '',
            scrollY: new Animated.Value(0),
            items: [],
            refreshing: false
        }
    }

    componentDidMount() {        
        const dummy = [
            { uid: 0, tag: 'New', img: require('../../../../assets/shop_goods.png'), displayName: '베아트리스의 축복 3일', cost: '45000원'  },
            { uid: 1, tag: '인기', img: require('../../../../assets/shop_goods.png'), displayName: '베아트리스의 축복 3일', cost: '45000원'  },
            { uid: 2, tag: '추천', img: require('../../../../assets/shop_goods.png'), displayName: '베아트리스의 축복 3일', cost: '45000원'  },
            { uid: 3, tag: '한정', img: require('../../../../assets/shop_goods.png'), displayName: '베아트리스의 축복 3일', cost: '45000원'  },
        ]
        this.setState({ items: dummy })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.notice}>
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                        buttonWrapperStyle={{}} paginationStyle={{ bottom: 5 }}
                        nextButton={<Text>&gt;</Text>} prevButton={<Text>&lt;</Text>}
                    >
                        <View style={styles.slide}>
                            <TouchableOpacity style={styles.link}
                                onPress={() => this.props.navigation.navigate('Test1')}>
                                <Image source={require("../../../../assets/shop_banner.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.slide}>
                            <TouchableOpacity style={styles.link}
                                onPress={() => this.props.navigation.navigate('Test1')}>
                                <Image source={require("../../../../assets/lostArk2.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.slide}>
                            <TouchableOpacity style={styles.link}
                                onPress={() => this.props.navigation.navigate('Test1')}>
                                <Image source={require("../../../../assets/lostArk3.png")} />
                            </TouchableOpacity>
                        </View>
                    </Swiper>
                </View>
                <ScrollableTabView
                    style={{ marginTop: 0 }}
                    renderTabBar={() => <ScrollableTabBar />}
                    initialPage={0}
                >
                    <Text tabLabel='패키지'></Text>
                    <Text tabLabel='부가서비스'></Text>
                    <Text tabLabel='프레스티지'></Text>
                    <Text tabLabel='임시다'></Text>
                    <Text tabLabel='임시다'></Text>
                    <Text tabLabel='임시다'></Text>
                </ScrollableTabView>
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
                
                <View style={styles.container}>
                    <FlatList
                        style={{ alignSelf: 'stretch' }}
                        contentContainerStyle={this.state.items.length === 0 ? styles.noContents : null}
                        keyExtractor={(item, index) => item.uid.toString()}
                        data={this.state.items}
                        renderItem={this.renderItem}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefesh}
                        extraData={this.state}
                        ListEmptyComponent={<Text>{('NO_CONTENT')}</Text>}
                    ></FlatList>
                </View>
            </ScrollView>
        );
    }

    onRefesh = () => {
        console.log('refreshing')
    }
    // 자바스크립트의 비구조화 할당 == https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // ({item, index}) = Object  이렇게 하면 전체 객체에서 item과 index 부분만 가져올 수 있다 
    // (item, index) => { }  이렇게 사용할 경우는 item.item 에 접근해서 직접 꺼내와야 한다 
    renderItem = ({ item, index }) => {
        //console.log(index);
        const listItem =
            <GoodsItem
                item={item}
                onPress={() => this.onItemClick(item)}
                onLongPress={Platform.select({ ios: null, android: () => this.showActionSheet(item) })}
            />
        return listItem;
    }
    onItemClick = (item) => {
        const { items } = this.state;
        //<DetailListScreen />
        //this.props.navigation.navigate('Detail', { item: item, list: items });
    }
}
export default ShopScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    notice: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 80,

        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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