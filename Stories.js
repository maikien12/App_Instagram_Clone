import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { User } from "./user";



const Stories = () => {
    return(
        <View style={{marginBottom: 13}}>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                {User.map((story, index) =>(
                    <View key={index} style={{alignItems: 'center'}}>
                        <TouchableOpacity>
                    <Image source={{uri: story.image}}
                        style={styles.story}
                    />
                    </TouchableOpacity>
                    <Text style={{color: 'black', fontWeight: '800'}}>
                        {story.user.length > 11 ? story.user.slice(0,10).toLowerCase() + '...' : story.user.toLowerCase()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 13,
        borderWidth: 3,
        borderColor: '#ff8501'
    }
});

export default Stories;