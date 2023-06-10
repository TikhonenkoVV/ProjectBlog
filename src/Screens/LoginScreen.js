import { StatusBar } from "expo-status-bar";
import {
    Dimensions,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import bgrimg from "../../assets/img/background.png";
import { useState } from "react";

const LoginScreen = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const onPressShowPassword = () => {
        const passState = showPassword;
        setShowPassword(!passState);
    };

    const signIn = () => {
        const userData = {
            userName,
            password,
        };
        console.debug(userData);
        setUserName("");
        setPassword("");
        setShowPassword(true);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <ImageBackground
                    source={bgrimg}
                    style={styles.background}
                    imageStyle={{
                        resizeMode: "cover",
                        height: Dimensions.get("window").height,
                    }}
                >
                    <View style={styles.wrapper}>
                        <View style={styles.form}>
                            <Text style={styles.title}>Увійти</Text>
                            <KeyboardAvoidingView
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Адреса електронної пошти"
                                        value={userName}
                                        onChangeText={setUserName}
                                    />
                                    <View style={styles.passInputWrapper}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Пароль"
                                            secureTextEntry={showPassword}
                                            value={password}
                                            onChangeText={setPassword}
                                        />
                                        <Pressable
                                            style={styles.btnShowPass}
                                            onPress={onPressShowPassword}
                                        >
                                            <Text>
                                                {showPassword
                                                    ? "Показати"
                                                    : "Приховати"}
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </KeyboardAvoidingView>
                            <Pressable style={styles.btnSubmit}>
                                <Text
                                    style={styles.btnSubmitTitle}
                                    onPress={signIn}
                                >
                                    Увійти
                                </Text>
                            </Pressable>
                            <Pressable style={styles.btnSignUp}>
                                <Text style={styles.btnSignUpTitle}>
                                    Немає акаунту? Зареєструватися
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </ImageBackground>
                <StatusBar style="auto" />
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    background: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        overflow: "hidden",
    },
    wrapper: {
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "60%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 32,
    },
    form: {
        paddingHorizontal: 16,
        width: "100%",
        height: "100%",
    },
    title: {
        fontFamily: "Roboto",
        textAlign: "center",
        fontSize: 30,
        fontWeight: 500,
        color: "#212121",
        marginBottom: 32,
    },
    inputWrapper: {
        height: 116,
        justifyContent: "space-between",
        marginBottom: 43,
    },
    passInputWrapper: {
        position: "relative",
    },
    btnShowPass: {
        position: "absolute",
        top: 16,
        right: 16,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontFamily: "Roboto",
        fontSize: 16,
    },
    btnSubmit: {
        width: "100%",
        height: 50,
        backgroundColor: "#FF6C00",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    btnSubmitTitle: {
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#fff",
    },
    btnSignUpTitle: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },
});

export default LoginScreen;
