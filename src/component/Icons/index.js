import React from "react"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Zocial from 'react-native-vector-icons/Zocial'
import { Image, StyleSheet } from "react-native"
import { icons, images } from "../../constants"




const Icons = ({ name, color, size, style, src, type }) => {
    if (type == "image") {
        return <Image source={src}
            style={[{ tintColor: color, height: size, width: size }, style]}
            resizeMode="contain"
        />
    } else {
        switch (name) {

            // icons
            case 'home':
                return <Fontisto style={StyleSheet.create(style)} name="home" size={size} color={color} />
            case 'users':
                return <Feather style={StyleSheet.create(style)} name="users" size={size} color={color} />
            case 'hearto':
                return <AntDesign style={StyleSheet.create(style)} name="hearto" size={size} color={color} />
            case 'heart':
                return <AntDesign style={StyleSheet.create(style)} name="heart" size={size} color={color} />
            case 'profile':
                return <FontAwesome style={StyleSheet.create(style)} name="user-circle-o" size={size} color={color} />
            case 'bag':
                return <FontAwesome6 style={StyleSheet.create(style)} name="bag-shopping" size={size} color={color} />
            case 'location':
                return <MaterialIcons style={StyleSheet.create(style)} name="location-pin" size={size} color={color} />
            default:
                return <MaterialIcons style={StyleSheet.create(style)} name="logout" size={size} color={color} />
        }
    }
}

Icons.defaultProps = {
    style: null,
    color: null
}

export default Icons