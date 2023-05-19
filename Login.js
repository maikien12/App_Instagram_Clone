import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from "react-native";
import { Button } from "react-native-elements";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const image = {uri: 'https://i.pinimg.com/564x/c4/a3/8b/c4a38bebdf9eeb6d10963e5957d3ed69.jpg'};

const Login = (props) => {
    return (
        <ImageBackground source={image}  style={{height:900 , width: "100%"}}>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', }}>
            
        <Image style={{height: 200, width: 300}} 
        
        source = {require('./assets/logo.png')}
        />
    

        <TextInput
        placeholder="  Số điện thoại, tên người dùng hoặc Email" 
        style={{
            borderColor:'black',
            borderWidth: 3,
            width: 350,
            height: 60,
            borderRadius: 10,
            
        }}
        />
            <TextInput
        placeholder="  Password" 
        secureTextEntry={true}
        style={{
            borderColor:'black',
            borderWidth: 3,
            width: 350,
            height: 60,
            marginTop: 20,
            borderRadius: 10
        }}
        />

        
            <TouchableOpacity
            >
                <Text
                  style={{
                    color:'#2196F3',
                    fontWeight: '900',
                    marginLeft: 210,
                    marginTop: 7,
                    fontSize: 17,
                }}
                >Quên mật khẩu?</Text>
            </TouchableOpacity>

           <TouchableOpacity 
           style={{marginTop: 50}}
           onPress={() => props.navigation.navigate("HomeScreen")}>
            <Text
            style={{
                fontSize:20,
                fontWeight: '400',
                color:'white',
                backgroundColor: '#2196F3',
                height: 47,
                width: 350,

                textAlign: 'center',
                borderRadius: 5,
                padding: 10,
            }}
            > Đăng nhập</Text>
           </TouchableOpacity>
            <View
            style={{
                flexDirection: 'row', marginTop: 10 }}
            >
           <Text style={{color:'grey'}}>________________________</Text>
           <Text style={{fontSize: 15, padding: 2}}> Hoặc </Text>
           <Text style={{color:'grey'}}>________________________</Text>
           </View>

        <View style={{flexDirection: 'row', marginTop: 20}}>
           <Image source={{uri: 'https://img.icons8.com/external-those-icons-flat-those-icons/24/null/external-Facebook-Logo-social-media-those-icons-flat-those-icons.png'}} 
    style={{height: 40, width: 40}} />
    <TouchableOpacity style={{ alignSelf: 'center', }}>
    <Text 
    style={{
       
        marginLeft: 10,
     color: 'blue',
     fontWeight: '600',
     fontSize: 17
     
     }}>
        Đăng nhập với Facebook</Text>
        </TouchableOpacity>
    </View>

    <View 
    style={{marginTop: 70}}
    >
        <Text style={{color: 'grey'}}>_____________________________________________________</Text>
 
    <Text style={{textAlign:'center', color:'black', fontSize: 15}}>
        Bạn chưa có tài khoản ư ?
    </Text>
    <TouchableOpacity >
     <Text
      style={{
        textAlign:'center',
        color:'#2196F3',
        fontWeight: '900',
        fontSize: 16
        
        }}>Đăng Ký.</Text>
    </TouchableOpacity>
   </View>
  
   
    </View>
    </ImageBackground>
        

    );
}

export default Login;