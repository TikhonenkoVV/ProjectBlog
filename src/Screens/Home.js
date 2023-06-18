import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { View } from "react-native";
import { BtnLogout } from "../Components/BtnLogout";
import { SvgXml } from "react-native-svg";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { iconGrid, iconAdd, iconUser } from "../../assets/img/icons";

const Home = () => {
    const FooterTabs = createBottomTabNavigator();

    const navigation = useNavigation();

    const iconAddPost = iconAdd("none", "none", "#fff");

    const defaultOptions = {
        headerTitleAlign: "center",
        headerStyle: {
            borderBottomWidth: 1,
            borderColor: "#b3b3b3",
        },
        headerTitleStyle: {
            fontFamily: "Roboto",
            fontSize: 17,
            fontWeight: 500,
        },
    };

    const goHome = () => navigation.navigate("Posts");
    const goCreatePost = () => navigation.navigate("CreatePost");
    const goProfile = () => navigation.navigate("Profile");

    return (
        <FooterTabs.Navigator
            initialRouteName="Posts"
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    alignItems: "center",
                    height: 58,
                    paddingVertical: 9,
                },
                tabBarShowLabel: false,
                tabBarButton: () => {
                    if (route.name === "Posts") {
                        return (
                            <>
                                <TouchableOpacity onPress={goHome}>
                                    <SvgXml xml={iconGrid} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={goCreatePost}>
                                    <View style={styles.btnCreatePublication}>
                                        <SvgXml xml={iconAddPost} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={goProfile}>
                                    <SvgXml xml={iconUser} />
                                </TouchableOpacity>
                            </>
                        );
                    }
                },
            })}
        >
            <FooterTabs.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    title: "Публікації",
                    ...defaultOptions,
                    headerLeft: false,
                    headerRight: () => (
                        <BtnLogout
                            onPress={() => navigation.navigate("Login")}
                        />
                    ),
                }}
            />
            <FooterTabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
        </FooterTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    btnCreatePublication: {
        width: 70,
        height: 40,
        marginLeft: 31,
        marginRight: 31,
        backgroundColor: "#FF6C00",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default Home;
