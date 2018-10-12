import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import Swiper from "react-native-swiper";

class AuctionScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
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
            </View>
        );
    }
}
export default AuctionScreen;

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
        //width: "100%",
        //height: 200
    },
});