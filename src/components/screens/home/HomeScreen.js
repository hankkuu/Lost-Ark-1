import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import Swiper from 'react-native-swiper';

import NavigationService from '@navigation/options/NavigationService';
import Button from '@shared/Button';
import { colors } from '@util/Styles'

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeList: [],
            notice: '',
            name: 'Home'
        }

        const dummyNotice = [
            { uid: 0, text: '[공지]로스트 아크 앱 출시' },
            { uid: 1, text: '[사과]로스트 아크 버그 발견' },
            { uid: 2, text: '[공지]로스트 아크 이벤트' },
            { uid: 3, text: '[점검]로스트 아크 정기 점검' },
        ]
        this.state.noticeList = dummyNotice;
        //console.log( this.state.noticeList);
        //this.setState({
        this.state.notice = this.state.noticeList[0].text
        //})
        //this.state.notice = noticeList[0];
    }

    componentDidMount() {
        let count = this.state.noticeList.length;
        let i = 0;
        // setInterval(() => {
        //     if(i === count) {
        //         i = 0;
        //     }
        //     this.setState({
        //         notice: this.state.noticeList[i].text
        //     })
        //     i++;
        // }, 3000);
    }

    render() {
        const { name } = this.state;
        return (
            <ScrollView style={styles.mainScroll}
                contentContainerStyle={styles.container}
            >
                <View style={styles.notice}>
                    {/* <Text style={styles.clock}>12:33</Text> */}   
                    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}
                            buttonWrapperStyle={{}} paginationStyle={{bottom: 5}}
                            nextButton={<Text>&gt;</Text>} prevButton={<Text>&lt;</Text>}
                    >
                        <View style={styles.slide}>
                            <TouchableOpacity style={styles.link}
                                onPress={() => this.props.navigation.navigate('Test1')}>
                                <Image style={{ height: "100%", width: "100%", }}  source={require("../../../../assets/shop_banner.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.slide}>
                            <TouchableOpacity style={styles.link}
                                onPress={() => this.props.navigation.navigate('Test1')}>
                                <Image style={{ height: "100%", width: "100%", }}  source={require("../../../../assets/shop_banner2.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.slide}>
                            <TouchableOpacity style={styles.link}
                                onPress={() => this.props.navigation.navigate('Test1')}>
                                <Image style={{ height: "100%", width: "100%", }}  source={require("../../../../assets/shop_banner3.png")} />
                            </TouchableOpacity>
                        </View>
                    </Swiper>                    
                </View>
                <View style={{ flex: 1 ,flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center'}}>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Notice')}
                    >공지사항</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Coupon')}
                    >쿠폰</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('Recharge')}
                    >충전</Button>  
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('AdditionService')}
                    >부가서비스</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('MyShop')}
                    >내 상점현황</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('PCRoom')}
                    >전용피시방 찾기</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('CS')}
                    >고객상담실</Button>         
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('List')}
                    >Best Practice</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('WebView')}
                    >로스트아크 N샵</Button>     
                    {/* <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('')}
                    >Null</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('')}
                    >Null</Button>
                    <Button
                        style={styles.btn}
                        onPress={() => this.props.navigation.navigate('')}
                    >Null</Button> */}
                </View>
            </ScrollView>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //backgroundColor: colors.background,
        flexDirection: 'column',
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    mainScroll: {
        //backgroundColor: colors.background,
    },
    btn: {
        backgroundColor: colors.dusk,
        //alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 2,
        width: 130,
        height: 152,
        borderColor: 'white',
        //marginBottom: 25,

        alignItems: 'center',
        justifyContent: 'center',
    },
    notice: {
        flexDirection: "row",
        justifyContent: "space-around",
        //alignItems: "flex-start",
        height: 80,

        //borderColor: 'red',
        alignItems: 'center',
        //justifyContent: 'flex-start',
    },
    clock: {
        //justifyContent:"space-around"
    },
    content: {
        //justifyContent:"center"
    },
    link: {
        //justifyContent:"space-around",
        //alignItems: "flex-start"
    },
    wrapper: {
 
    },
    slide: {
        
    },
});