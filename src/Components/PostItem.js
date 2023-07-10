import { View, Image, Text, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { iconComments, iconLikes, iconMarker } from "../../assets/img/icons";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/selectors";
import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../firebase-config";

export const PostItem = ({ item }) => {
    const navigation = useNavigation();
    const author = useSelector(selectUserId);

    const [likesArray, setLikesArray] = useState([]);
    const [likesCounter, setLikesCounter] = useState(0);

    const iconCommentsFalse = iconComments("none", "#BDBDBD");
    const iconCommentsTrue = iconComments("#FF6C00", "#FF6C00");
    const iconLikesFalse = iconLikes("#BDBDBD");
    const iconLikesTrue = iconLikes("#FF6C00");

    const addLike = async () => {
        if (likesArray.includes(author)) return;
        try {
            const postRef = doc(db, "posts", item.postId);
            const likessRef = collection(postRef, "likes");
            await addDoc(likessRef, { author });
            await updateDoc(postRef, { likes: likesCounter + 1 });
        } catch (error) {
            console.log(error.message);
        }
    };

    const getLikes = async () => {
        try {
            const postRef = doc(db, "posts", item.postId);
            const snapShot = collection(postRef, "likes");
            onSnapshot(snapShot, (likes) => {
                const arr = [];
                likes.forEach((like) => arr.push(like.data().author));
                setLikesArray(arr);
                setLikesCounter(arr.length);
            });
        } catch (error) {
            return console.log(error.message);
        }
    };

    useEffect(() => {
        getLikes();
    }, []);

    return (
        <View key={item.postDate} style={styles.postWrapper}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text style={styles.imageTitle}>{item.postTitle}</Text>
            <View style={styles.stats}>
                <Pressable
                    onPress={() =>
                        navigation.navigate("Comments", { postId: item.postId })
                    }
                    style={{
                        marginRight: 24,
                        ...styles.statsItem,
                    }}
                >
                    <SvgXml
                        xml={
                            item.comments > 0
                                ? iconCommentsTrue
                                : iconCommentsFalse
                        }
                        style={{
                            marginRight: 6,
                        }}
                    />
                    <Text>{item.comments}</Text>
                </Pressable>
                <Pressable onPress={addLike}>
                    <View
                        style={{
                            marginRight: 24,
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml
                            xml={
                                item.likes > 0 ? iconLikesTrue : iconLikesFalse
                            }
                            style={{
                                marginRight: 6,
                            }}
                        />
                        <Text>{item.likes}</Text>
                    </View>
                </Pressable>
            </View>
            {item.location && (
                <Pressable
                    style={{
                        marginTop: 8,
                        ...styles.statsItem,
                    }}
                    onPress={() =>
                        navigation.navigate(
                            "Map",
                            (locationValue = {
                                latitude: item.latitude,
                                longitude: item.longitude,
                            })
                        )
                    }
                >
                    <SvgXml xml={iconMarker} />
                    <Text
                        style={{
                            fontFamily: "Roboto-Regular",
                            fontSize: 16,
                            textDecorationLine: "underline",
                            marginLeft: 6,
                        }}
                    >
                        {item.location}
                    </Text>
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    users: {
        width: "100%",
        marginBottom: 32,
    },
    user: {
        flexDirection: "row",
        width: "100%",
    },
    avatar: {
        backgroundColor: "#000",
        width: 60,
        height: 60,
        borderRadius: 16,
        marginRight: 8,
    },
    infoWrapper: {
        justifyContent: "center",
        width: "100%",
    },
    userName: {
        fontFamily: "Roboto",
        fontSize: 13,
        fontWeight: 700,
    },
    userEmail: {
        fontFamily: "Roboto",
        fontSize: 11,
    },
    photoWrapper: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: -60 }, { translateY: -60 }],
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
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
        fontFamily: "Roboto-Medium",
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
});
