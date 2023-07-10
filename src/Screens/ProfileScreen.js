import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
    selectIsLoggedIn,
    selectUserId,
    selectUserName,
    selectUserPhoto,
} from "../redux/selectors";
import { signOutOperation } from "../redux/auth/operations";

import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";

import { Background } from "../Components/Background";
import { iconAdd, iconLogOut } from "../../assets/img/icons";
import { PostItem } from "../Components/PostItem";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { FlatList } from "react-native";
import { db } from "../../firebase-config";

export const ProfileScreen = () => {
    const navigation = useNavigation();

    const [postsArray, setPostArray] = useState([]);

    const dispatch = useDispatch();

    const isLoggedUser = useSelector(selectIsLoggedIn);
    const userId = useSelector(selectUserId);
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const iconAddAvatar = iconAdd("white", "#E8E8E8", "#BDBDBD");

    const getAllPosts = () => {
        try {
            const snapShot = query(
                collection(db, "posts"),
                where("userId", "==", userId)
            );
            onSnapshot(snapShot, (posts) => {
                const arr = [];
                posts.forEach((post) => arr.push(post.data()));
                arr.sort((a, b) => b.postDate - a.postDate);
                setPostArray(arr);
            });
        } catch (error) {
            return console.log(error.message);
        }
    };

    useEffect(() => {
        if (isLoggedUser) getAllPosts();
        if (!isLoggedUser) navigation.navigate("Login");
    }, [isLoggedUser]);

    const onSignOut = () => {
        dispatch(signOutOperation());
    };

    return (
        <Background>
            <View style={styles.container}>
                <Pressable
                    onPress={onSignOut}
                    style={{
                        position: "absolute",
                        width: 24,
                        height: 24,
                        top: 172,
                        right: 16,
                        paddingRight: 16,
                        zIndex: 1,
                    }}
                >
                    <SvgXml xml={iconLogOut} />
                </Pressable>
                <View style={styles.photoWrapper}>
                    <Pressable style={styles.btnAddImage}>
                        <SvgXml
                            xml={iconAddAvatar}
                            style={{
                                transform: [{ rotate: "45deg" }],
                            }}
                        />
                    </Pressable>
                    <Image
                        style={{
                            display: "flex",
                            width: 120,
                            height: 120,
                            borderRadius: 16,
                        }}
                        source={{ uri: userPhoto }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#fff",
                        paddingTop: 92,
                        borderTopLeftRadius: 25,
                        borderTopRightRadius: 25,
                    }}
                >
                    <Text style={styles.title}>{userName}</Text>
                    <FlatList
                        data={postsArray}
                        renderItem={({ item }) =>
                            postsArray.length > 0 && (
                                <View
                                    style={{
                                        paddingHorizontal: 16,
                                        backgroundColor: "#fff",
                                    }}
                                >
                                    <PostItem item={item} />
                                </View>
                            )
                        }
                        ListEmptyComponent={
                            <Text style={styles.empty}>
                                Ви ще не опубліковали жодного посту.
                            </Text>
                        }
                    />
                </View>
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        paddingTop: 150,
        flex: 1,
        flexGrow: 1,
    },
    photoWrapper: {
        position: "absolute",
        top: 90,
        left: "50%",
        transform: [{ translateX: -60 }],
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
        zIndex: 1,
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
        zIndex: 2,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: 500,
        fontSize: 30,
        textAlign: "center",
        marginBottom: 32,
    },
    postWrapper: {
        marginBottom: 32,
    },
    image: {
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        width: "100%",
        height: 240,
    },
    imageTitle: {
        marginBottom: 8,
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#212121",
    },
    stats: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    statsItem: {
        flexDirection: "row",
    },
    empty: {
        fontFamily: "Roboto-Medium",
        fontSize: 18,
        paddingHorizontal: 16,
    },
});
