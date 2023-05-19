import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import SearchContent from "./SearchContent";


const Search = () => {
    return(
        <View style={{flex: 1}}>
            <ScrollView >
            <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/search--v1.png'}} 
           style={{
            height: 20,
             width: 20,  
             marginTop: 38,
             
             position: 'absolute',
             zIndex: 1,
             left: 25
             
             }} />
           <TextInput placeholder="Search" placeholderTextColor= "#909090"
           style={{
            marginTop: 30,
            width: '94%',
            backgroundColor: '#EBEBEB',
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            padding: 4,
            paddingLeft: 50, marginLeft: 5
        
        
        }}
           />


           {/* image */}
           <SearchContent />
           </ScrollView>
          

           <View style={style.container2}>
            {/* <Bottom /> */}
            <TouchableOpacity >
        <Image source={{uri: 'https://img.icons8.com/fluency-systems-filled/48/null/home.png'}} 
           style={{height: 40, width: 40}} />
           </TouchableOpacity>
           <TouchableOpacity >
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

           >
        <Image source={require('./assets/user3.jpg')} 
           style={style.story2} 
           
          />
           
           
           </TouchableOpacity>
            </View>
           
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        with: '100%',
        paddingvertical: 10,
        position: 'relative',
       
    },
    story2: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 13,
        borderWidth: 3,
        borderColor: 'grey'
        
    },
    container2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 5

    },
})

export default Search;