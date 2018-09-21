import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Platform
} from "react-native";

import { screenWidth } from '@util/Styles';
import List2ItemScreen from '@screen/home/List2ItemScreen';

class List2Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
                newToDo: "",            
                toDos: {}  
        }
    }
    render() {
        const { newToDo, loadedToDos, toDos } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <TextInput style={styles.input} placeholder={"New"}
                        value={newToDo}
                        onChangeText={this._controllNewToDo}
                        placeholderTextColor={"#999"}
                        returnKeyType={"done"}
                        autoCorrect={false}
                        onSubmitEditing={this._addToDo}
                        underlineColorAndroid={"transparent"} >
                    </TextInput>
                    <ScrollView contentContainerStyle={styles.toDos}>
                        {Object.values(toDos)
                            .reverse()
                            .map(toDo => (
                                <List2ItemScreen
                                    key={toDo.id}
                                    deleteToDo={this._deleteToDo}
                                    uncompleteToDo={this._uncompleteToDo}
                                    completeToDo={this._completeToDo}
                                    updateToDo={this._updateToDo}
                                    {...toDo}
                                />
                            ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
export default List2Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
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
      }
});