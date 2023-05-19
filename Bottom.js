import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Profile from "./Profile";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Bottom = (props) => {
    return(
        <View style={styles.container}>
        <TouchableOpacity >
        <Image source={{uri: 'https://img.icons8.com/fluency-systems-filled/48/null/home.png'}} 
           style={{height: 40, width: 40}} />
           </TouchableOpacity>
           <TouchableOpacity 
           onPress={() => props.navigation.navigate("Search")}
           >
        <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/search--v1.png'}} 
           style={{height: 40, width: 40}} />
           </TouchableOpacity>
           <TouchableOpacity >
        <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/plus-2-math.png'}} 
           style={{height: 40, width: 40}} />
           </TouchableOpacity>
           <TouchableOpacity >
        <Image source={{uri: 'https://img.icons8.com/ios-filled/50/null/instagram-reel.png'}} 
           style={{height: 35, width: 35}} />
           </TouchableOpacity>

           <TouchableOpacity 
           titles="profile"
           onPress={() => props.navigation.navigate("Profile")}
           >
        <Image source={require('./assets/sugaershaw.jpg')} 
           style={styles.story} 
           
          />
           
           
           
           </TouchableOpacity>
           </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 5
    },
    story: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 13,
        borderWidth: 3,
        borderColor: 'grey'
        
    }
});

export default Bottom;