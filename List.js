import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView } from "react-native";


const List = () => {
    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent:'center', padding: 1, marginTop: 12}}>
            <Image source={require('./assets/house1.jpg')} 
            style={styles.image}
            />
            <Image source={require('./assets/house2.jpg')} 
            style={styles.image}
            />
            <Image source={require('./assets/house3.jpg')} 
            style={styles.image}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent:'center', padding: 1}}>
            <Image source={require('./assets/interior1.jpg')} 
            style={styles.image}
            />
            <Image source={require('./assets/interior2.jpg')} 
            style={styles.image}
            />
            <Image source={require('./assets/interior3.jpg')} 
            style={styles.image}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent:'center', padding: 1}}>
            <Image source={require('./assets/interior1.jpg')} 
            style={styles.image}
            />
            <Image source={require('./assets/interior2.jpg')} 
            style={styles.image}
            />
            <Image source={require('./assets/interior3.jpg')} 
            style={styles.image}
            />
        </View>
        <View style={{flexDirection: 'row', justifyContent:'center', padding: 1}}>
            <Image source={require('./assets/kitchen1.jpeg')} 
            style={styles.image}
            />
            <Image source={require('./assets/kitchen2.jpeg')} 
            style={styles.image}
            />
            <Image source={require('./assets/kitchen3.jpg')} 
            style={styles.image}
            />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 140,
        height: 155,
        alignSelf:'center',
        marginLeft: 2,

    },
   
});

export default List;