import {
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
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../Components/Background";
import { BtnStyled } from "../Components/BtnStyled";
import { useDispatch, useSelector } from "react-redux";
import { signInOperation } from "../redux/auth/operations";
import { Alert } from "react-native";
import { REQIRED_FIELD, UNAUTHORISED } from "../services/constants";
import { selectError, selectIsLoggedIn } from "../redux/selectors";
import { useEffect } from "react";

const LoginScreen = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const isLogged = useSelector(selectIsLoggedIn);
    const authError = useSelector(selectError);

    useEffect(() => {
        if (authError) Alert.alert(UNAUTHORISED);
        if (isLogged) navigation.navigate("Home");
    }, [isLogged, authError]);

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const onPressShowPassword = () => {
        const passState = showPassword;
        setShowPassword(!passState);
    };

    const onSignIn = () => {
        if (userEmail === "" || userPassword === "") {
            Alert.alert(REQIRED_FIELD);
            return;
        }
        dispatch(
            signInOperation({
                userEmail,
                userPassword,
            })
        );
        setUserEmail("");
        setUserPassword("");
        setShowPassword(true);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Background>
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
                                        value={userEmail}
                                        onChangeText={setUserEmail}
                                    />
                                    <View style={styles.passInputWrapper}>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Пароль"
                                            secureTextEntry={showPassword}
                                            value={userPassword}
                                            onChangeText={setUserPassword}
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
                            <BtnStyled
                                onPress={onSignIn}
                                bgColor="#FF6C00"
                                textColor="#fff"
                                title="Увійти"
                            />
                            <Pressable
                                style={styles.btnSignUp}
                                onPress={() =>
                                    navigation.navigate("Registration")
                                }
                            >
                                <Text style={styles.btnSignUpTitle}>
                                    Немає акаунту? Зареєструватися
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </Background>
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
    btnSignUpTitle: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
    },
});

export default LoginScreen;
