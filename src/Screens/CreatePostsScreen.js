import React from "react";
import {
    StyleSheet,
    Pressable,
    Image,
    Keyboard,
    TextInput,
    Platform,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Text,
    View,
} from "react-native";
import { Circle, ClipPath, G, Path, Defs, Rect, Svg } from "react-native-svg";
import { BtnStyled } from "../Components/BtnStyled";

export const CreatePostsScreen = () => {
    const onPublic = () => {};

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.imageWrapper}>
                        <Pressable style={styles.camera}>
                            <Svg
                                width="60"
                                height="60"
                                viewBox="0 0 60 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Circle cx="30" cy="30" r="30" fill="white" />
                                <G clip-path="url(#clip0_32_29)">
                                    <Path
                                        d="M29.9998 33.2C31.7671 33.2 33.1998 31.7673 33.1998 30C33.1998 28.2327 31.7671 26.8 29.9998 26.8C28.2325 26.8 26.7998 28.2327 26.7998 30C26.7998 31.7673 28.2325 33.2 29.9998 33.2Z"
                                        fill="#BDBDBD"
                                    />
                                    <Path
                                        d="M27 20L25.17 22H22C20.9 22 20 22.9 20 24V36C20 37.1 20.9 38 22 38H38C39.1 38 40 37.1 40 36V24C40 22.9 39.1 22 38 22H34.83L33 20H27ZM30 35C27.24 35 25 32.76 25 30C25 27.24 27.24 25 30 25C32.76 25 35 27.24 35 30C35 32.76 32.76 35 30 35Z"
                                        fill="#BDBDBD"
                                    />
                                </G>
                                <Defs>
                                    <ClipPath id="clip0_32_29">
                                        <Rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                            transform="translate(18 18)"
                                        />
                                    </ClipPath>
                                </Defs>
                            </Svg>
                        </Pressable>
                        <Image style={styles.image} />
                    </View>
                    <Text style={styles.imageTitle}>Завантажте фото</Text>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <TextInput
                            style={styles.input}
                            placeholder="Назва..."
                        />
                    </KeyboardAvoidingView>
                    <View style={styles.geoInputWrapper}>
                        <Svg
                            style={styles.marker}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                                stroke="#BDBDBD"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                stroke="#BDBDBD"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </Svg>
                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                        >
                            <TextInput
                                style={styles.geoInput}
                                placeholder="Місцевість..."
                            />
                        </KeyboardAvoidingView>
                    </View>
                    <BtnStyled onPress={onPublic} title="Опублікувати" />
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.footer}>
                <Pressable
                    style={styles.btnDeletePublication}
                    onPress={() => navigation.navigate("Create post")}
                >
                    <Svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M3 6H5H21"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
                            fill="#BDBDBD"
                        />
                        <Path
                            d="M10 11V17"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            d="M14 11V17"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </Svg>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    imageWrapper: {
        position: "relative",
        marginBottom: 8,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
    },
    camera: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -30 }, { translateY: -30 }],
    },
    image: {
        width: "100%",
        height: 240,
    },
    imageTitle: {
        marginBottom: 32,
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#bdbdbd",
    },
    input: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
    },
    geoInputWrapper: {
        position: "relative",
    },
    marker: {
        position: "absolute",
        top: 13,
        left: 0,
    },
    geoInput: {
        width: "100%",
        height: 50,
        marginBottom: 32,
        paddingLeft: 28,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
    },
    footer: {
        flexGrow: 0,
        alignItems: "center",
        width: "100%",
        height: 58,
        paddingVertical: 9,
        backgroundColor: "#fff",
    },
    btnDeletePublication: {
        width: 70,
        height: 40,
        marginLeft: 31,
        marginRight: 31,
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
});
