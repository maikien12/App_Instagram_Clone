import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Header = () => {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
            <Image
            source={require('./assets/logo.png')}
             style={styles.logo} />
             </TouchableOpacity>

             <View style={styles.iconsContainer}>
                
                <TouchableOpacity>
                        <Image
                        source={{uri:'https://img.icons8.com/ios-glyphs/30/null/filled-like.png'}}
                        style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity style={{marginRight: 10}}>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                        <Image
                        source={{uri:'https://img.icons8.com/ios-glyphs/30/null/facebook-messenger.png'}}
                        style={styles.icon} />
                </TouchableOpacity>
             </View>

        </View>
        
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 100,
        marginTop: 5,
       
        // resizeMode: 'contain'
    },
    iconsContainer: {
        flexDirection: 'row',
    },
    container: {
        justifyContent: 'space-between',
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
    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: '600'
    }
});

export default Header;