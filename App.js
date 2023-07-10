import "react-native-gesture-handler";
import React from "react";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Screens/Home";

import SignUpScreen from "./src/Screens/SignUpScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import MapScreen from "./src/Screens/MapScreen";

import CreatePostsScreen from "./src/Screens/CreatePostsScreen";
import CommentsScreen from "./src/Screens/CommentsScreen";
import { persistor, store } from "./src/redux/store";
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

export default App = () => {
    const [fontsLoaded] = useFonts({
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    const defaultOptions = {
        headerTitleAlign: "center",
        headerStyle: {
            borderBottomWidth: 1,
            borderColor: "#b3b3b3",
        },
        headerTitleStyle: {
            fontFamily: "Roboto-Medium",
            fontSize: 17,
            fontWeight: 500,
        },
    };

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <MainStack.Navigator initialRouteName="Home">
                        <MainStack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}
                        />
                        <MainStack.Screen
                            name="Registration"
                            component={SignUpScreen}
                            options={{ headerShown: false }}
                        />
                        <MainStack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <MainStack.Screen
                            name="CreatePost"
                            component={CreatePostsScreen}
                            options={{
                                title: "Створити публікацію",
                                ...defaultOptions,
                            }}
                        />
                        <MainStack.Screen
                            name="Comments"
                            component={CommentsScreen}
                            options={{
                                title: "Коментарі",
                                ...defaultOptions,
                            }}
                        />
                        <MainStack.Screen
                            name="Map"
                            component={MapScreen}
                            options={{
                                ...defaultOptions,
                            }}
                        />
                    </MainStack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};
