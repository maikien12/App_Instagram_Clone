import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";
import Header from "./Header";
import Stories from "./Stories";
import Post from "./Post";

import { User } from "./user";
import Bottom from "./Bottom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./Profile";

const Stack = createNativeStackNavigator();

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            
            <ScrollView >
            <Stories />
            <Post 
           
           
             
             />
            {/* <Post name='SugaerShaw'
             status='
             Never hide your secrets from a person .'
             nameCMT= 'hihi'
             comments='So beautiful'
             nameCMT2= 'haha'
             comments2='So beautiful'
             
             /> */}
            

            
            </ScrollView>
            <View style={styles.container2}>
            {/* <Bottom /> */}
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
           
           onPress={() => props.navigation.navigate("Profile")}
           >
        <Image source={require('./assets/user3.jpg')} 
           style={styles.story} 
           
          />
           
           
           
           </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    container2: {
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

export default HomeScreen;