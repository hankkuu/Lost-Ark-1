import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    TouchableHighlight,
    ScrollView
} from "react-native";
import Swiper from "react-native-swiper";
import { ScrollableTabBar, ScrollableTabView, DefaultTabBar } from "@valdio/react-native-scrollable-tabview";
import { screenWidth } from '@util/Styles' 

class AuctionScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const collapsableComponent = (
            <View style={styles.notice}>
                <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                    buttonWrapperStyle={{}} paginationStyle={{ bottom: 5 }}
                    nextButton={<Text>&gt;</Text>} prevButton={<Text>&lt;</Text>}
                >
                    <View style={styles.slide}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Test1')}>
                            <Image style={{ height: "100%", width: "100%", }} source={require("../../../../assets/shop_banner.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Test1')}>
                            <Image style={{ height: "100%", width: "100%", }} source={require("../../../../assets/lostArk2.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.slide}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Test1')}>
                            <Image style={{ height: "100%", width: "100%", }} source={require("../../../../assets/lostArk3.png")} />
                        </TouchableOpacity>
                    </View>
                </Swiper>
            </View>
        )
        return (
            <View style={styles.container}>               
                    <ScrollableTabView
                        style={{ marginTop: 0, }}
                        renderTabBar={() => <DefaultTabBar renderTab={this.renderTab} />}
                        initialPage={0}
                        locked={true}
                        showsHorizontalScrollIndicator={false}
                        collapsableBar={collapsableComponent}
                    >
                        <ScrollList tabLabel='패키지'></ScrollList>
                        <ScrollList tabLabel='부가서비스'></ScrollList>
                        <ScrollList tabLabel='프레스티지'></ScrollList>
                    </ScrollableTabView>   
            </View>
        );        
    }

    renderTab = (name, page, isTabActive, onPressHandler) => {
        return (
            <TouchableHighlight
                key={`${name}_${page}`}
                onPress={() => onPressHandler(page)}
                style={{ flex: 1, width: 80, alignItems: 'center', justifyContent: 'center', backgroundColor:"#aaaaaa"  }}
                underlayColor="#aaaaaa"  // 이색은 뭐냐??
            >
                <Text>{name}</Text>
            </TouchableHighlight>
        )
    }
}
export default AuctionScreen;

export class ScrollList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <ScrollView Style={{ flex: 1 }}>
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: "space-between"}}>
                    <Text>항목</Text>
                    <Text>더보기</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    snapToInterval={screenWidth - 60}
                    snapToAlignment={'end'}
                    decelerationRate={0}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                      }}
                >
                    {/* <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>이미지</Text>
                    </TouchableOpacity> */}
                </ScrollView>
            </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    notice: {
        flexDirection: "row",
        //justifyContent: "space-around",
        height: 80,
        //alignItems: 'center',
    },
    slide: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        width: "100%",
        height: "100%"
    },
});