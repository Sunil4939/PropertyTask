import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES, icons, images } from '../constants'
import Icons from "../component/Icons";
import styles from "./styles";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import home from "../screens/home";
import Expert from "../screens/expert";
import Saved from "../screens/saved";
import Investors from "../screens/investors";
import profile from "../screens/profile";


const Tab = createBottomTabNavigator();


const BottomTab = ({ navigation, getAllWishlist }) => {
    // token = "null"

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarStyle: styles.tabBarStyle,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray60,
                headerTitleStyle: styles.headerTitleStyle,
                headerStyle: styles.headerStyle,
                tabBarLabelStyle: styles.labelStyle,
                // headerTitleAlign: 'center',
                // tabBarLabel: '',
            })}
        >
            <Tab.Screen name="Home" component={home}
                options={() => ({
                    tabBarIcon: ({ color, focused }) => <Icons name={'home'} color={color} size={SIZES.width * .07} />
                })}
            />
            <Tab.Screen name="Expert" component={Expert}
                options={() => ({
                    title: 'City Expert',
                    tabBarIcon: ({ color, focused }) => <Icons name={'users'} color={color} size={SIZES.width * .07} />
                })}
            />
            <Tab.Screen name="Saved" component={Saved}
                options={() => ({
                    headerTitle: 'Saved Properties',
                    tabBarIcon: ({ color, focused }) =>
                        <View>
                            {getAllWishlist?.length > 0 && <View style={styles.dot} />}
                            <Icons name={'hearto'} color={color} size={SIZES.width * .07} />
                        </View>

                })}
            />
            <Tab.Screen name="Investors" component={Investors}
                options={() => ({
                    tabBarIcon: ({ color, focused }) => <Icons name={'bag'} color={color} size={SIZES.width * .07} />
                })}
            />
            <Tab.Screen name="Profile" component={profile}
                options={() => ({
                    tabBarIcon: ({ color, focused }) => <Icons name={'profile'} color={color} size={SIZES.width * .07} />
                })}
            />

        </Tab.Navigator >
    )
}

const mapStateToProps = state => ({
    getAllWishlist: state.property.getAllWishlist
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(BottomTab);
