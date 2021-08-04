import React,{Component} from "react";
import { ImageBackground, Text, View, TouchableOpacity, Platform, SafeAreaView, StyleSheet, StatusBar, Image } from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>
                    <SafeAreaView style = {styles.droidSafeArea}/>
                    <ImageBackground source = {require('../assets/bg_image.png')} style = {styles.backgroundImage}>
                    <View style ={styles.titleBar}>
                    <Text style={styles.titleText}>ISS Tracking App</Text>
                    
            </View>

            <TouchableOpacity style={styles.routeCard} onPress = {() => 
                this.props.navigation.navigate("IssLocation")
            }>
                <Text style={styles.routeText}>ISS Location</Text>
                <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                <Text style = {styles.bgDigit}>1</Text>
                <Image source = {require('../assets/iss_icon.png')} style = {styles.iconImage}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCard} onPress = {() => 
                this.props.navigation.navigate("Meteor")
            }>
                <Text style={styles.routeText}>Meteors</Text>
                <Text style = {styles.knowMore}>{"Know More ---> "}</Text>
                <Text style = {styles.bgDigit}>2</Text>
                <Image source = {require('../assets/meteor_icon.png')} style = {styles.iconImage}></Image>
            </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea :{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex: 0.15,
        justifyContent :"center",
        alignItems: "center"
    },
   titleText:{
        fontSize: 40,
        fontWeight:"bold",
        color:"white"
    },
    routeText:{
        fontSize: 40,
        fontWeight:"bold",
        color:"black",
        marginTop: 75,
        paddingLeft:30
    },
    routeCard:{
        flex: 0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor: 'white'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    knowMore:{
        paddingLeft:30,
        color:"Red",
        fontSize:15
    },
    bgDigit:{
        position:"absolute",
        color:"RGBA(183,183,183,0.5)",
        fontSize:150,
        bottom:-15,
        zIndex:-1
    },
    iconImage: { position: "absolute", height: 200, width: 200, resizeMode: "contain", right: 20, top: -80 }
})