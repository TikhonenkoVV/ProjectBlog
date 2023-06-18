import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { iconComments, iconMarker } from "../../assets/img/icons";
import { data } from "../data";

const PostsScreen = () => {
    const navigation = useNavigation();
    const iconCommentsFalse = iconComments("none", "#BDBDBD");
    const iconCommentsTrue = iconComments("#FF6C00", "#FF6C00");

    return (
        <ScrollView style={styles.main}>
            <View style={styles.users}>
                <View style={styles.user}>
                    <Image
                        style={styles.avatar}
                        source={require("../../assets/img/natali_romanova.jpg")}
                    />
                    <View style={styles.infoWrapper}>
                        <Text style={styles.userName}>Natali Romanova</Text>
                        <Text style={styles.userEmail}>email@example.com</Text>
                    </View>
                </View>
            </View>
            {data.map(
                ({
                    id,
                    image,
                    title,
                    comments,
                    region,
                    location,
                    latitude,
                    longitude,
                }) => {
                    return (
                        <View key={id} style={styles.postWrapper}>
                            <Image source={image} style={styles.image} />
                            <Text style={styles.imageTitle}>{title}</Text>
                            <View style={styles.stats}>
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate("Comments")
                                    }
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <SvgXml
                                        xml={
                                            comments > 0
                                                ? iconCommentsTrue
                                                : iconCommentsFalse
                                        }
                                        style={{ marginRight: 6 }}
                                    />
                                    <Text>{comments}</Text>
                                </Pressable>
                                <View
                                    style={{
                                        marginLeft: "auto",
                                        ...styles.statsItem,
                                    }}
                                >
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
                                        style={{ marginRight: 4 }}
                                    >
                                        <SvgXml xml={iconMarker} />
                                    </Pressable>
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                    >
                                        {`${region}, ${location}`}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    );
                }
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        paddingTop: 32,
        paddingHorizontal: 16,
        width: "100%",
        backgroundColor: "#fff",
    },
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
});

export default PostsScreen;
