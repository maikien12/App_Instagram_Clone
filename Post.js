import React from "react";
import { View, Text, Image, StyleSheet, props, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

import { User } from "./user";



const Post = () => {
    return (
        <View>
<View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 5,
                alignItems: 'center',
                 }}>
            {/* <Divider width={1} orientation='vertical' /> */}
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
               <TouchableOpacity>
            <Image source={require('./assets/kkk.jpg') }
                style={styles.story}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text
            style={{marginLeft: 5, fontWeight:'900'}}
            >Enlarger</Text>
            </TouchableOpacity>
          
            </View>
            <TouchableOpacity>
            <Text style={{color: 'black', marginRight: 5 ,fontWeight: '900'}}>...</Text>
            </TouchableOpacity>

 </View>


 <Image source={require('./assets/hihi.jpg')} 
    style={{height: 400, width: 440}}
 />

 
 <View style={{marginTop: 10, marginLeft: 10, flexDirection: 'row',}}>
    <TouchableOpacity>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 30, width: 30}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 10}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/speech-bubble--v1.png'}} 
    style={{height: 30, width: 30}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 10}}>
 <Image source={{uri: 'https://img.icons8.com/dotty/80/null/filled-sent.png'}} 
    style={{height: 30, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 250}}>
 <Image source={{uri: 'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/null/external-bookmark-social-media-interface-anggara-basic-outline-anggara-putra-3.png'}} 
    style={{height: 32, width: 30}} />
    </TouchableOpacity>
 </View>

{/*-----------like--------- */}
 <View style={{flexDirection: 'row'}}>
   <TouchableOpacity>
 <Image source={require('./assets/kkk.jpg') }
                style={styles.avata}
            />
            </TouchableOpacity>
   <Text style={{padding: 5, marginLeft: 3}}>have</Text>
   <TouchableOpacity>
   <Text style={{marginTop:5, fontWeight: '600'}}>Enlarger</Text>
   </TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3}}>and </Text>
   <TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3, fontWeight: '600'}}>40 other</Text>
   </TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3}}>likes </Text>
 </View>

 <View style={{flexDirection: 'row'}} >
   <TouchableOpacity>
    <Text style={{fontWeight: '900', marginLeft: 10,}}>Enlarger</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>change the avatar after many years</Text>
 </View>

 <View style={{marginLeft: 10, flexDirection: 'row', padding: 2}}>
   <TouchableOpacity>
    <Text style={{fontWeight: '900'}}>Sharon</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>So beautiful</Text>
    <TouchableOpacity style={{marginLeft: 270,}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 15, width: 15,}} />
    </TouchableOpacity>
 </View>

 <View style={{marginLeft: 10, flexDirection: 'row', padding: 2}}>
   <TouchableOpacity>
    <Text style={{fontWeight: '900'}}>Helms</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>this is nice picture</Text>
    <TouchableOpacity style={{marginLeft: 236}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 15, width: 15}} />
    </TouchableOpacity>
 </View>

 <TouchableOpacity style={{marginLeft: 10, padding: 2}}>
            <Text style={{color: 'grey', marginBottom: 10}}>Xem thêm Bình Luận</Text>
 </TouchableOpacity>



               {/* -------------------------- USER 2 ------------------------ */}

 <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 5,
                alignItems: 'center',
                 }}>
           
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
               <TouchableOpacity>
            <Image source={require('./assets/user2.jpg')} 
                style={styles.story}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text
            style={{marginLeft: 5, fontWeight:'900'}}
            
            >vina_cava</Text>
            </TouchableOpacity>
          
            </View>
            <TouchableOpacity>
            <Text style={{color: 'black', marginRight: 5 ,fontWeight: '900'}}>...</Text>
            </TouchableOpacity>

 </View>


 <Image source={require('./assets/haha.jpg')} 
    style={{height: 400, width: 440}}
 />

 
 <View style={{marginTop: 10, marginLeft: 10, flexDirection: 'row',}}>
    <TouchableOpacity>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 30, width: 30}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 10}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/speech-bubble--v1.png'}} 
    style={{height: 30, width: 30}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 10}}>
 <Image source={{uri: 'https://img.icons8.com/dotty/80/null/filled-sent.png'}} 
    style={{height: 30, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 250}}>
 <Image source={{uri: 'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/null/external-bookmark-social-media-interface-anggara-basic-outline-anggara-putra-3.png'}} 
    style={{height: 32, width: 30}} />
    </TouchableOpacity>
 </View>

 <View style={{flexDirection: 'row'}}>
   <TouchableOpacity>
 <Image source={require('./assets/hihi.jpg') }
                style={styles.avata}
            />
            </TouchableOpacity>
   <Text style={{padding: 5, marginLeft: 3}}>have</Text>
   <TouchableOpacity>
   <Text style={{marginTop:5, fontWeight: '600'}}>Ovantine</Text>
   </TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3}}>and </Text>
   <TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3, fontWeight: '600'}}>100 other</Text>
   </TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3}}>likes </Text>
 </View>

 <View style={{flexDirection: 'row'}} >
   <TouchableOpacity>
    <Text style={{fontWeight: '900', marginLeft: 10,}}>vina_cava</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>Very nice</Text>
 </View>

 <View style={{marginLeft: 10, flexDirection: 'row', padding: 2}}>
   <TouchableOpacity>
    <Text style={{fontWeight: '900'}}>Ovantine</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>your parents are so beautiful</Text>
    <TouchableOpacity style={{marginLeft: 152,}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 15, width: 15,}} />
    </TouchableOpacity>
 </View>

 <View style={{marginLeft: 10, flexDirection: 'row', padding: 2}}>
   <TouchableOpacity>
    <Text style={{fontWeight: '900'}}>Mike</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>They look so happy</Text>
    <TouchableOpacity style={{marginLeft: 235}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 15, width: 15}} />
    </TouchableOpacity>
 </View>

 <TouchableOpacity style={{marginLeft: 10, padding: 2}}>
            <Text style={{color: 'grey', marginBottom: 10}}>Xem thêm Bình Luận</Text>
 </TouchableOpacity>



                  {/*-------------------------- USER 3 ------------------------*/}

 <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 5,
                alignItems: 'center',
                 }}>
           
            <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
               <TouchableOpacity>
            <Image source={require('./assets/user3.jpg')} 
                style={styles.story}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Text
            style={{marginLeft: 5, fontWeight:'900'}}
            
            >Tk.Wrieless</Text>
            </TouchableOpacity>
          
            </View>
            <TouchableOpacity>
            <Text style={{color: 'black', marginRight: 5 ,fontWeight: '900'}}>...</Text>
            </TouchableOpacity>

 </View>

 <Image source={require('./assets/tree.jpg')} 
    style={{height: 400, width: 440}}
 />

 <View style={{marginTop: 10, marginLeft: 10, flexDirection: 'row',}}>
    <TouchableOpacity>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 30, width: 30}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 10}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/speech-bubble--v1.png'}} 
    style={{height: 30, width: 30}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 10}}>
 <Image source={{uri: 'https://img.icons8.com/dotty/80/null/filled-sent.png'}} 
    style={{height: 30, width: 40}} />
    </TouchableOpacity>
    <TouchableOpacity style={{marginLeft: 250}}>
 <Image source={{uri: 'https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/null/external-bookmark-social-media-interface-anggara-basic-outline-anggara-putra-3.png'}} 
    style={{height: 32, width: 30}} />
    </TouchableOpacity>
 </View>

 <View style={{flexDirection: 'row', marginBottom: 5, marginLeft: 5}}>
   
   <TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3, fontWeight: '600'}}>100 other</Text>
   </TouchableOpacity>
   <Text style={{marginTop:5, marginLeft: 3}}>likes </Text>
 </View>

 <View style={{flexDirection: 'row'}} >
   <TouchableOpacity>
    <Text style={{fontWeight: '900', marginLeft: 10,}}>Tk.Wrieless</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>allways</Text>
 </View>

 <View style={{marginLeft: 10, flexDirection: 'row', padding: 2}}>
   <TouchableOpacity>
    <Text style={{fontWeight: '900'}}>Alex</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>where is this place</Text>
    <TouchableOpacity style={{marginLeft: 240,}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 15, width: 15,}} />
    </TouchableOpacity>
 </View>

 <View style={{marginLeft: 10, flexDirection: 'row', padding: 2}}>
   <TouchableOpacity>
    <Text style={{fontWeight: '900'}}>Chris</Text>
    </TouchableOpacity>
    <Text style={{marginLeft: 10}}>A Great photo</Text>
    <TouchableOpacity style={{marginLeft: 266}}>
 <Image source={{uri: 'https://img.icons8.com/ios/50/null/like--v1.png'}} 
    style={{height: 15, width: 15}} />
    </TouchableOpacity>
 </View>

 <TouchableOpacity style={{marginLeft: 10, padding: 2}}>
            <Text style={{color: 'grey', marginBottom: 10}}>Xem thêm Bình Luận</Text>
 </TouchableOpacity>



 </View>
  
            
        
    );
}


const styles = StyleSheet.create({
    story: {
        width: 40,
        height: 40,
        borderRadius: 50,
        marginLeft: 13,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
    avata: {
      width: 20,
      height: 17,
      borderRadius: 50,
      marginLeft: 15,
      borderWidth: 1.6,
      borderColor: 'grey',
      marginTop: 5
    }
})

export default Post;