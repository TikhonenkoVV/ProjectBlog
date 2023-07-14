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
import { useNavigation, useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/selectors";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Alert } from "react-native";
import { Modal } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";
import { Loader } from "../Components/Loader";

const windowSize = Dimensions.get("window");
const StatusBarHeight = Constants.statusBarHeight;

const CreatePostsScreen = () => {
    const [coords, setCoords] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [location, setLocation] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [showCamera, setShowCamera] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [postTitle, setPostTitle] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(true);
    const [bgrColor, setBgrColor] = useState("#F6F6F6");
    const [orientation, setOrientation] = useState(1);
    const [style, setStyle] = useState(styles.btnWrapperP);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        params: { latitude, longitude },
    } = useRoute();

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.log("Permission to access location was denied");
                return;
            }
            const { coords } = await Location.getCurrentPositionAsync({});
            setCoords({
                latitude: coords.latitude,
                longitude: coords.longitude,
            });
            const geoCode = await Location.reverseGeocodeAsync(coords);
            const region = geoCode[0]["region"];
            const country = geoCode[0]["country"];
            setCurrentLocation(`${region}, ${country}`);
        })();

        ScreenOrientation.addOrientationChangeListener(
            ({ orientationInfo }) => {
                setOrientation(orientationInfo.orientation);
            }
        );
    }, []);

    useEffect(() => {
        if (latitude & longitude) {
            setCoords({ latitude, longitude });
            (async () => {
                const geoCode = await Location.reverseGeocodeAsync({
                    latitude,
                    longitude,
                });
                const region = geoCode[0]["region"];
                const country = geoCode[0]["country"];
                setLocation(`${region}, ${country}`);
            })();
        }
    }, [latitude]);

    useEffect(() => {
        if (orientation === 1) {
            setStyle(styles.btnWrapperP);
        } else {
            setStyle(styles.btnWrapperLL);
        }
    }, [orientation]);

    useEffect(() => {
        (async () => {
            if (showCamera) await ScreenOrientation.unlockAsync();
            if (!showCamera)
                await ScreenOrientation.lockAsync(
                    ScreenOrientation.OrientationLock.PORTRAIT_UP
                );
        })();
    }, [showCamera]);

    useEffect(() => {
        if (photo && location && postTitle.length > 3) setAllowSubmit(false);
        else setAllowSubmit(true);
        if (photo || location || postTitle.length > 1) setBgrColor("#FF6C00");
        else setBgrColor("#F6F6F6");
    }, [photo, location, postTitle]);

    const navigation = useNavigation();

    const headerHeight = useHeaderHeight();

    const userId = useSelector(selectUserId);

    const onLoadImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });
        if (!result.canceled) {
            setLocation(null);
            setPostTitle("");
            setShowModal(true);
            setPhoto(result.assets[0].uri);
        }
    };

    const takePhoto = async () => {
        if (cameraRef) {
            const { uri } = await cameraRef.takePictureAsync();
            setShowCamera(false);
            await MediaLibrary.createAssetAsync(uri);
            setPhoto(uri);
            setLocation(currentLocation);
        }
    };

    const onShowCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("Ви не надали доступ до камери");
            return;
        }
        await MediaLibrary.requestPermissionsAsync();
        setShowCamera(true);
    };

    const onClear = () => {
        setAllowSubmit(false);
        setPhoto(null);
        setLocation(null);
        setPostTitle("");
    };

    const goToMap = () =>
        navigation.navigate(
            "Map",
            (params = {
                latitude: coords.latitude,
                longitude: coords.longitude,
                goBack: "CreatePost",
            })
        );

    const onSetCurrentLocation = () => {
        setLocation(currentLocation);
        setShowModal(false);
    };
    const closeModal = () => setShowModal(false);

    const onPublic = async () => {
        const post = {
            userId,
            photo,
            postTitle,
            location,
            latitude: coords.latitude,
            longitude: coords.longitude,
            comments: 0,
            likes: 0,
            postDate: Date.now(),
        };
        setAllowSubmit(false);
        try {
            setIsLoading(true);
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
            setIsLoading(false);
            Alert.alert("Ви опубліковали повідомлення");
            navigation.navigate("Posts");
        } catch (error) {
            setAllowSubmit(true);
            return console.log(error.message);
        }
    };

    return (
        <>
            {isLoading && <Loader />}
            {showCamera && (
                <Modal style={styles.cameraContainer}>
                    <Camera
                        style={styles.camera}
                        type={type}
                        ref={setCameraRef}
                        ratio="16:9"
                    />
                    <View style={{ ...styles.btnWrapper, ...style }}>
                        <TouchableOpacity
                            style={{ padding: 10 }}
                            onPress={() => setShowCamera(false)}
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
                </Modal>
            )}
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={{
                        ...styles.layout,
                        height:
                            windowSize.height - headerHeight - StatusBarHeight,
                        width: windowSize.width,
                    }}
                >
                    <Modal
                        animationType="slide"
                        visible={showModal}
                        transparent={true}
                    >
                        <View style={styles.modal}>
                            <View style={styles.modalBody}>
                                <Text style={styles.modalTitle}>
                                    Додати геолокацію?
                                </Text>
                                <BtnStyled
                                    onPress={goToMap}
                                    bgColor="#FF6C00"
                                    textColor="#fff"
                                    title="Обрати на мапі"
                                />
                                <BtnStyled
                                    onPress={onSetCurrentLocation}
                                    bgColor="#FF6C00"
                                    textColor="#fff"
                                    title="Моє місцезнаходження"
                                />
                                <BtnStyled
                                    onPress={closeModal}
                                    bgColor="#FF6C00"
                                    textColor="#fff"
                                    title="Вихід"
                                />
                            </View>
                        </View>
                    </Modal>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={headerHeight}
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={{ ...styles.container, marginBottom: "auto" }}
                    >
                        <ScrollView>
                            <View style={styles.imageWrapper}>
                                <TouchableOpacity
                                    onPress={onShowCamera}
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
                                            (params = {
                                                latitude: coords.latitude,
                                                longitude: coords.longitude,
                                                goBack: "CreatePost",
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
                                bgColor={!allowSubmit ? "#FF6C00" : "#F6F6F6"}
                                textColor={!allowSubmit ? "#fff" : "#BDBDBD"}
                                title="Опублікувати"
                            />
                        </ScrollView>
                    </KeyboardAvoidingView>
                    <View style={styles.footer}>
                        <Pressable
                            style={{
                                ...styles.btnDeletePublication,
                                backgroundColor: bgrColor,
                            }}
                            onPress={onClear}
                        >
                            <SvgXml xml={iconRecicle} />
                        </Pressable>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
};

const styles = StyleSheet.create({
    cameraContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 1,
    },
    camera: {
        flex: 1,
        width: "100%",
        height: "auto",
    },
    layout: {
        position: "relative",
        backgroundColor: "#fff",
    },
    btnWrapper: {
        position: "absolute",
        padding: 16,
        justifyContent: "space-between",
        backgroundColor: "#00000060",
    },
    btnWrapperP: {
        bottom: 0,
        left: 0,
        flexDirection: "row",
        width: "100%",
        height: "auto",
    },
    btnWrapperLL: {
        top: 0,
        right: 0,
        flexDirection: "column",
        width: "auto",
        height: "100%",
    },
    modal: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: "#00000090",
        justifyContent: "center",
    },
    modalBody: {
        borderRadius: 10,
        padding: 16,
        backgroundColor: "#fff",
    },
    modalTitle: {
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        fontSize: 22,
        marginBottom: 16,
    },
    modalBtn: {
        alignItems: "center",
        width: "100%",
        backgroundColor: "#FF6C00",
    },
    container: {
        paddingTop: 32,
        paddingBottom: 1,
        paddingHorizontal: 16,
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
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
});

export default CreatePostsScreen;
