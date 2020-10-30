import * as React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity, Alert} from 'react-native'
//import { FlatList, ScrollView } from 'react-native-gesture-handler'
//import db from '../config.js'

export default class Request extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Request</Text>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    }
})