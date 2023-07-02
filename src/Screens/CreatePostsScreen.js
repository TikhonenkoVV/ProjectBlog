import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
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
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/selectors";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const layoutHeight = Dimensions.get("window").height;

const CreatePostsScreen = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [location, setLocation] = useState(null);
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(false);

    const navigation = useNavigation();

    const headerHeight = useHeaderHeight();

    const userId = useSelector(selectUserId);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }
            const currentPosition = await Location.getCurrentPositionAsync({});
            const geoCode = await Location.reverseGeocodeAsync(
                currentPosition.coords
            );
            setLatitude(currentPosition.coords.latitude);
            setLongitude(currentPosition.coords.longitude);
            const region = geoCode[0]["region"];
            const country = geoCode[0]["country"];
            setLocation(`${region}, ${country}`);
        })();
    }, []);

    useEffect(() => {
        if (photo && location && postTitle.length > 3) setAllowSubmit(true);
        else setAllowSubmit(false);
    }, [photo, location, postTitle]);

    const onLoadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });
        console.log(result.assets[0].uri);
        if (result.assets[0].uri) setPhoto(result.assets[0].uri);
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            setShowCamera(false);
            await MediaLibrary.createAssetAsync(uri);
            setPhoto(uri);
        }
    };

    const onPublic = async () => {
        const post = {
            userId,
            photo,
            postTitle,
            location,
            latitude,
            longitude,
            comments: 0,
            likes: 0,
            postDate: Date.now(),
        };
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                ...post,
            });
            const postImageRef = ref(storage, `posts/${docRef.id}.jpg`);
            const img = await fetch(post.photo);
            const blobImg = await img.blob();
            await uploadBytes(postImageRef, blobImg);
            const avatarUrl = await getDownloadURL(ref(storage, postImageRef));
            await updateDoc(docRef, {
                photo: avatarUrl,
                postId: docRef.id,
            });
        } catch (error) {
            return console.log(error.message);
        }
        navigation.navigate("Posts");
    };

    const onClear = () => {
        setAllowSubmit(false);
        setPhoto(null);
        setLocation(null);
        setLatitude(null);
        setLongitude(null);
        setPostTitle(null);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                style={{
                    ...styles.container,
                    height: layoutHeight - headerHeight,
                }}
            >
                {showCamera && (
                    <View style={styles.cameraContainer}>
                        <Camera
                            style={styles.camera}
                            type={type}
                            ref={setCameraRef}
                        ></Camera>
                        <View style={styles.btnWrapper}>
                            <TouchableOpacity
                                style={{ padding: 10 }}
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
                                style={{ padding: 10 }}
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
                <KeyboardAvoidingView
                    keyboardVerticalOffset={headerHeight}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ marginBottom: "auto" }}
                >
                    <ScrollView>
                        <View style={styles.imageWrapper}>
                            <TouchableOpacity
                                onPress={() => setShowCamera(true)}
                                style={styles.btnCamera}
                            >
                                <SvgXml xml={iconCamera} />
                            </TouchableOpacity>
                            <Image
                                source={{ uri: photo }}
                                style={styles.image}
                            />
                        </View>
                        <Pressable onPress={onLoadImage}>
                            <Text style={styles.imageTitle}>
                                Завантажте фото
                            </Text>
                        </Pressable>
                        <TextInput
                            style={styles.input}
                            value={postTitle}
                            onChangeText={setPostTitle}
                            placeholder="Назва..."
                        />
                        <View style={styles.geoInputWrapper}>
                            <Pressable
                                onPress={() =>
                                    navigation.navigate(
                                        "Map",
                                        (locationValue = {
                                            latitude,
                                            longitude,
                                        })
                                    )
                                }
                            >
                                <SvgXml
                                    xml={iconMarker}
                                    style={styles.marker}
                                />
                            </Pressable>
                            <TextInput
                                style={styles.geoInput}
                                value={location}
                                onChangeText={setLocation}
                                placeholder="Місцевість..."
                            />
                        </View>
                        <BtnStyled
                            onPress={onPublic}
                            isAllowed={allowSubmit}
                            bgColor={allowSubmit ? "#FF6C00" : "#F6F6F6"}
                            textColor={allowSubmit ? "#fff" : "#BDBDBD"}
                            title="Опублікувати"
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
                <View style={styles.footer}>
                    <Pressable
                        style={styles.btnDeletePublication}
                        onPress={onClear}
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
        paddingTop: 32,
        paddingBottom: 1,
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
        backgroundColor: "#000",
        opacity: 0.4,
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        marginBottom: 8,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        height: 240,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "contain",
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
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
        borderBottomWidth: 1,
        borderColor: "#E8E8E8",
    },
    marker: {},
    geoInput: {
        width: "100%",
        height: 50,
        paddingLeft: 4,
    },
    footer: {
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

export default CreatePostsScreen;
