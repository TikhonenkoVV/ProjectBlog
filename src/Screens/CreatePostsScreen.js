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
import { SvgXml } from "react-native-svg";
import { BtnStyled } from "../Components/BtnStyled";
import { iconCamera, iconMarker, iconRecicle } from "../../assets/img/icons";

export const CreatePostsScreen = () => {
    const onPublic = () => {};

    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.imageWrapper}>
                        <Pressable style={styles.camera}>
                            <SvgXml xml={iconCamera} />
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
                        <SvgXml xml={iconMarker} style={styles.marker} />
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
                    <SvgXml xml={iconRecicle} />
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
