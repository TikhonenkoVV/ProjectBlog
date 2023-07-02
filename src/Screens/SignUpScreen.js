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
import { SvgXml } from "react-native-svg";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Background } from "../Components/Background";
import { BtnStyled } from "../Components/BtnStyled";
import { iconAdd } from "../../assets/img/icons";
import { useDispatch } from "react-redux";
import { signUpOperation } from "../redux/auth/operations";
import { Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { NO_AVATAR, REQIRED_FIELD } from "../services/constants";

const SignUpScreen = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userPhoto, setUserPhoto] = useState(NO_AVATAR);
    const [showPassword, setShowPassword] = useState(true);
    const iconAddAvatar = iconAdd("white", "#FF6C00", "#FF6C00");

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const onPressShowPassword = () => {
        const passState = showPassword;
        setShowPassword(!passState);
    };

    const onLoadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        setUserPhoto(result.assets[0].uri);
    };

    const onSignUp = () => {
        if (userName === "" || userEmail === "" || userPassword === "") {
            Alert.alert(REQIRED_FIELD);
            return;
        }
        dispatch(
            signUpOperation({
                userName,
                userEmail,
                userPassword,
                userPhoto,
            })
        );
        setUserName("");
        setUserEmail("");
        setUserPassword("");
        setShowPassword(true);
        if (authError) {
            Alert.alert(UNAUTHORISED);
            return;
        }
        navigation.navigate("Home");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Background>
                    <View style={styles.wrapper}>
                        <View style={styles.photoWrapper}>
                            <Image
                                source={{ uri: userPhoto }}
                                style={{
                                    width: 120,
                                    height: 120,
                                    borderRadius: 16,
                                }}
                            />
                            <Pressable
                                onPress={onLoadImage}
                                style={styles.btnAddImage}
                            >
                                <SvgXml xml={iconAddAvatar} />
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
                                onPress={onSignUp}
                                bgColor="#FF6C00"
                                textColor="#fff"
                                title="Зареєстуватися"
                            />
                            <Pressable
                                style={styles.btnLogin}
                                onPress={() => navigation.navigate("Login")}
                            >
                                <Text style={styles.btnLoginiTitle}>
                                    Вже є акаунт? Увійти
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

export default SignUpScreen;
