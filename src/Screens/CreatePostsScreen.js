import React, { useEffect, useState, useRef } from "react";
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
import {
    iconCamera,
    iconCameraExit,
    iconCameraFlip,
    iconCameraSnap,
    iconMarker,
    iconRecicle,
} from "../../assets/img/icons";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [showCamera, setShowCamera] = useState(true);
    const [photo, setPhoto] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            await MediaLibrary.createAssetAsync(uri);
            setPhoto(uri);
            setShowCamera(false);
        }
    };

    const onPublic = () => {};

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {showCamera && (
                    <View style={styles.cameraContainer}>
                        <Camera
                            style={styles.camera}
                            type={type}
                            ref={setCameraRef}
                        ></Camera>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    setShowCamera(false);
                                }}
                            >
                                <SvgXml xml={iconCameraExit} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={takePhoto}
                            >
                                <SvgXml xml={iconCameraSnap} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}
                            >
                                <SvgXml xml={iconCameraFlip} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                <View style={styles.imageWrapper}>
                    <TouchableOpacity
                        onPress={() => setShowCamera(true)}
                        style={styles.btnCamera}
                    >
                        <SvgXml xml={iconCamera} />
                    </TouchableOpacity>
                    <Image source={{ uri: photo }} style={styles.image} />
                </View>
                <Text style={styles.imageTitle}>Завантажте фото</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <TextInput style={styles.input} placeholder="Назва..." />
                </KeyboardAvoidingView>
                <View style={styles.geoInputWrapper}>
                    <SvgXml xml={iconMarker} style={styles.marker} />
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <TextInput
                            style={styles.geoInput}
                            placeholder="Місцевість..."
                        />
                    </KeyboardAvoidingView>
                </View>
                <BtnStyled onPress={onPublic} title="Опублікувати" />
                <View style={styles.footer}>
                    <Pressable
                        style={styles.btnDeletePublication}
                        onPress={() => navigation.navigate("Posts")}
                    >
                        <SvgXml xml={iconRecicle} />
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        flexGrow: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    cameraContainer: {
        flex: 1,
        flexGrow: 1,
        position: "absolute",
        top: 0,
        left: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - StatusBar.currentHeight - 55,
        backgroundColor: "red",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 2,
    },
    camera: {
        flex: 1,
        height: "auto",
        aspectRatio: 3 / 4,
    },
    btnWrapper: {
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between",
        width: Dimensions.get("window").width,
    },
    imageWrapper: {
        position: "relative",
        marginBottom: 8,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
    },
    image: {
        width: "100%",
        height: 240,
    },
    btnCamera: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: [{ translateX: -30 }, { translateY: -30 }],
        zIndex: 1,
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
        position: "absolute",
        bottom: 0,
        left: 0,
        alignItems: "center",
        width: Dimensions.get("window").width,
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
