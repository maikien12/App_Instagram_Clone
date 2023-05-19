import React from "react";
import { View, ScrollView, Image, SafeAreaView } from "react-native";

const SearchContent = () => {
    return(
        <SafeAreaView>
             <ScrollView>
           <View style={{marginTop: 15, flexDirection: 'row'}}>
           <Image source={require('./assets/Search/post1.jpg' )}
                    style={{height: 150, width: 145, marginLeft: 0}}
                />
                <Image source={require('./assets/Search/post2.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
                 <Image source={require('./assets/Search/post3.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
           </View>

           <View style={{marginTop: 1, flexDirection: 'row'}}>
           <Image source={require('./assets/Search/post4.jpg' )}
                    style={{height: 150, width: 145, marginLeft: 0}}
                />
                <Image source={require('./assets/Search/post5.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
                 <Image source={require('./assets/Search/post6.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
           </View>

           <View style={{marginTop: 1, flexDirection: 'row'}}>
           <Image source={require('./assets/Search/post7.jpg' )}
                    style={{height: 150, width: 145, marginLeft: 0}}
                />
                <Image source={require('./assets/Search/post8.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
                 <Image source={require('./assets/Search/post9.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
           </View>

           <View style={{marginTop: 1, flexDirection: 'row'}}>
           <Image source={require('./assets/Search/post10.jpg' )}
                    style={{height: 150, width: 145, marginLeft: 0}}
                />
                <Image source={require('./assets/Search/post11.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
                 <Image source={require('./assets/Search/post12.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
           </View>

           <View style={{marginTop: 1, flexDirection: 'row'}}>
           <Image source={require('./assets/Search/post13.jpg' )}
                    style={{height: 150, width: 145, marginLeft: 0}}
                />
                <Image source={require('./assets/Search/post14.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
                 <Image source={require('./assets/Search/post15.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
           </View>

           <View style={{marginTop: 1, flexDirection: 'row',}}>
           <Image source={require('./assets/Search/image1.jpg' )}
                    style={{height: 150, width: 145, marginLeft: 0}}
                />
                <Image source={require('./assets/Search/image2.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
                 <Image source={require('./assets/Search/image3.jpg')} 
                    style={{height: 150, width: 145, marginLeft: 1}}
                />
           </View>

           </ScrollView>
        </SafeAreaView>
    )
}

export default SearchContent