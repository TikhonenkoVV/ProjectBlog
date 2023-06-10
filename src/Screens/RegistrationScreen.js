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
import { Circle, Path, Svg } from "react-native-svg";
import { useState } from "react";

const RegistrationScreen = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const onPressShowPassword = () => {
        const passState = showPassword;
        setShowPassword(!passState);
    };

    const signUp = () => {
        const userData = {
            userName,
            email,
            password,
        };
        console.debug(userData);
        setUserName("");
        setEmail("");
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
                        <View style={styles.photoWrapper}>
                            <Pressable style={styles.btnAddImage}>
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="12"
                                        fill="white"
                                        stroke="#FF6C00"
                                    />
                                    <Path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                                        fill="#FF6C00"
                                    />
                                </Svg>
                            </Pressable>
                        </View>
                        <View style={styles.form}>
                            <Text style={styles.title}>Реєстрація</Text>
                            <KeyboardAvoidingView
                                behavior={
                                    Platform.OS === "ios" ? "padding" : "height"
                                }
                            >
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Логін"
                                        value={userName}
                                        onChangeText={setUserName}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Адреса електронної пошти"
                                        value={email}
                                        onChangeText={setEmail}
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
                            <Pressable
                                style={styles.btnSubmit}
                                onPress={signUp}
                            >
                                <Text style={styles.btnSubmitTitle}>
                                    Зареєстуватися
                                </Text>
                            </Pressable>
                            <Pressable style={styles.btnLogin}>
                                <Text style={styles.btnLoginiTitle}>
                                    Вже є акаунт? Увійти
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
        height: "70%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
    },
    photoWrapper: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: -60 }, { translateY: -60 }],
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    btnAddImage: {
        position: "absolute",
        bottom: 14,
        right: -12,
        width: 25,
        height: 25,
        border: 2,
        borderColor: "black",
        backgroundColor: "black",
        borderRadius: 12,
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
        height: 182,
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
    btnLoginiTitle: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },
});

export default RegistrationScreen;
