import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView } from "react-native";
import Bottom from "./Bottom";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from "./List";




const Profile = () => {
    return(
        <SafeAreaView style={{flex: 1}}>

            {/* Header */}
        <View style={styles.container}>
            <TouchableOpacity style={styles.Text}>
            <Image
                        source={{uri:'https://img.icons8.com/material/24/null/padlock-outline.png'}}
                        style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity >
           <Text style={{marginTop: 30, fontSize: 25, marginLeft: 5 ,fontWeight: '900'}}>Enlarger</Text>
            </TouchableOpacity>

            <View style={styles.iconsContainer}>
            <TouchableOpacity >
            <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/plus-2-math.png'}} 
           style={{height: 40, width: 40}} />
            </TouchableOpacity>
            <TouchableOpacity >
            <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/overview-pages-3--v2.png'}} 
           style={{height: 40, width: 40}} />
            </TouchableOpacity>
            </View>
        </View>
        <ScrollView>

        {/* Details */}
        <View style={styles.Details}>
        <Image source={require('./assets/user3.jpg')} 
                style={styles.story}
            />

            <View style={{marginLeft: 30, flexDirection: 'column', marginTop: 35}}>
            <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 25}}>25</Text>
            <Text style={{fontSize: 13}} >Bài Viết</Text>
           </View>
           <View style={{marginLeft: 20, flexDirection: 'column',  marginTop: 35}}>
            <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 25}}>1000</Text>
            <Text style={{fontSize: 13}} >Người Theo dõi</Text>
           </View>
           <View style={{marginLeft: 20, flexDirection: 'column',  marginTop: 35}}>
            <Text style={{textAlign: 'center', fontWeight: '900', fontSize: 25}}>80</Text>
            <Text style={{fontSize: 13}} >Đang Theo dõi</Text>
           </View>
        </View>

        <Text style={{fontSize: 20, marginTop: 12, marginLeft: 12, fontWeight: '900'}}>Enlarger</Text>
        <Text style={{marginLeft: 13}}>Descripstion</Text>

        {/* touchable */}
        <View style={{marginTop: 25, flexDirection:'row', alignSelf: 'center' }}>
            <TouchableOpacity style={styles.boder}>
                <Text style={{ textAlign:'center', marginTop: 8, color: 'white'}}>Chỉnh sửa trang cá nhân</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.boder}>
                <Text style={{ textAlign:'center', marginTop: 8, color: 'white'}}>Chia sẻ trang cá nhân</Text>
            </TouchableOpacity>
        </View>

        {/* Tag */}
        <View style={{flexDirection: 'row', marginTop: 40, alignSelf: 'center'}}>
            <TouchableOpacity>
        <Image source={{uri: 'https://img.icons8.com/ios-filled/50/null/overview-pages-3.png'}} 
           style={{height: 40, width: 40, marginRight: 75 }} />
           </TouchableOpacity>
           <TouchableOpacity>
            <Image source={{uri: 'https://img.icons8.com/ios-glyphs/30/null/name-tag-woman-horizontal.png'}} 
           style={{height: 40, width: 50, marginLeft: 90}} />
           </TouchableOpacity>
        </View>


        
       <List />

       </ScrollView>

       {/* bottom */}
       <View style={styles.container2}>
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
           style={styles.story2} 
           
          />
           
           
           
           </TouchableOpacity>
            </View>



        </SafeAreaView>
    );
}

export default Profile;

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 100,
        marginTop: 5,
       
        // resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
        marginLeft: 210,
        marginTop: 30
    },
    container: {
        // justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        // marginHorizontal: 20,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain',
        
    },
    Text: {
        marginTop: 30
    },
    Details: {
        flexDirection: 'row', 
        marginTop: 20,
        marginLeft: 10
    },
    story: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 1.6,
        borderColor: 'black'
    },
    boder: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3, 
        marginRight: 10,
        height: 40,
        width: 180,
        backgroundColor: 'grey'
        
    },
    image: {
        width: 140,
        height: 155,
        alignSelf:'center',
        marginLeft: 2,

    },
    container2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10,
        marginBottom: 5

    },
    story2: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 13,
        borderWidth: 3,
        borderColor: 'grey'
        
    }
   
    
});
