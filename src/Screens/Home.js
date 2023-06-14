import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import { CreatePostsScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { View } from "react-native";
import { BtnLogout } from "../Components/BtnLogout";
import { Path, Svg } from "react-native-svg";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
    const FooterTabs = createBottomTabNavigator();

    const navigation = useNavigation();

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
                                    <Svg
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11 11H18V18H11V11Z"
                                            stroke="#212121"
                                            stroke-opacity="0.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M22 11H29V18H22V11Z"
                                            stroke="#212121"
                                            stroke-opacity="0.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M22 22H29V29H22V22Z"
                                            stroke="#212121"
                                            stroke-opacity="0.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11 22H18V29H11V22Z"
                                            stroke="#212121"
                                            stroke-opacity="0.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={goCreatePost}>
                                    <View style={styles.btnCreatePublication}>
                                        <Svg
                                            width={25}
                                            height={25}
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                                                fill="#fff"
                                            />
                                        </Svg>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={goProfile}>
                                    <Svg
                                        width={40}
                                        height={40}
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29"
                                            stroke="#212121"
                                            stroke-opacity="0.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
                                            stroke="#212121"
                                            stroke-opacity="0.8"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                </TouchableOpacity>
                            </>
                        );
                    }
                },
                // tabBarButton: () => {
                //     if (route.name === "Posts") {
                //         return (
                //             <TouchableOpacity onPress={goHome}>
                //                 <Svg
                //                     width="40"
                //                     height="40"
                //                     viewBox="0 0 40 40"
                //                     fill="none"
                //                     xmlns="http://www.w3.org/2000/svg"
                //                 >
                //                     <Path
                //                         fill-rule="evenodd"
                //                         clip-rule="evenodd"
                //                         d="M11 11H18V18H11V11Z"
                //                         stroke="#212121"
                //                         stroke-opacity="0.8"
                //                         stroke-linecap="round"
                //                         stroke-linejoin="round"
                //                     />
                //                     <Path
                //                         fill-rule="evenodd"
                //                         clip-rule="evenodd"
                //                         d="M22 11H29V18H22V11Z"
                //                         stroke="#212121"
                //                         stroke-opacity="0.8"
                //                         stroke-linecap="round"
                //                         stroke-linejoin="round"
                //                     />
                //                     <Path
                //                         fill-rule="evenodd"
                //                         clip-rule="evenodd"
                //                         d="M22 22H29V29H22V22Z"
                //                         stroke="#212121"
                //                         stroke-opacity="0.8"
                //                         stroke-linecap="round"
                //                         stroke-linejoin="round"
                //                     />
                //                     <Path
                //                         fill-rule="evenodd"
                //                         clip-rule="evenodd"
                //                         d="M11 22H18V29H11V22Z"
                //                         stroke="#212121"
                //                         stroke-opacity="0.8"
                //                         stroke-linecap="round"
                //                         stroke-linejoin="round"
                //                     />
                //                 </Svg>
                //             </TouchableOpacity>
                //         );
                //     }
                //     if (route.name === "CreatePost") {
                //         return (
                //             <TouchableOpacity onPress={goCreatePost}>
                //                 <View style={styles.btnCreatePublication}>
                //                     <Svg
                //                         width={25}
                //                         height={25}
                //                         viewBox="0 0 25 25"
                //                         fill="none"
                //                         xmlns="http://www.w3.org/2000/svg"
                //                     >
                //                         <Path
                //                             fillRule="evenodd"
                //                             clipRule="evenodd"
                //                             d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                //                             fill="#fff"
                //                         />
                //                     </Svg>
                //                 </View>
                //             </TouchableOpacity>
                //         );
                //     }
                //     if (route.name === "Profile") {
                //         return (
                //             <TouchableOpacity onPress={goProfile}>
                //                 <Svg
                //                     width={40}
                //                     height={40}
                //                     viewBox="0 0 40 40"
                //                     fill="none"
                //                     xmlns="http://www.w3.org/2000/svg"
                //                 >
                //                     <Path
                //                         d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29"
                //                         stroke="#212121"
                //                         stroke-opacity="0.8"
                //                         stroke-linecap="round"
                //                         stroke-linejoin="round"
                //                     />
                //                     <Path
                //                         fill-rule="evenodd"
                //                         clip-rule="evenodd"
                //                         d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
                //                         stroke="#212121"
                //                         stroke-opacity="0.8"
                //                         stroke-linecap="round"
                //                         stroke-linejoin="round"
                //                     />
                //                 </Svg>
                //             </TouchableOpacity>
                //         );
                //     }
                // },
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
            {/* <FooterTabs.Screen
                name="CreatePost"
                component={CreatePostsScreen}
                options={{
                    title: "Створити публікацію",
                    ...defaultOptions,
                }}
            /> */}
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
