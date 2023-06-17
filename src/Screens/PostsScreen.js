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
import post_01 from "../../assets/img/post-photo-01.jpg";
import post_02 from "../../assets/img/post-photo-02.jpg";
import post_03 from "../../assets/img/post-photo-03.jpg";
import { iconComments, iconMarker } from "../../assets/img/icons";

const PostsScreen = () => {
    const navigation = useNavigation();

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
            <View style={styles.postWrapper}>
                <Image source={post_01} style={styles.image} />
                <Text style={styles.imageTitle}>Ліс</Text>
                <View style={styles.stats}>
                    <Pressable
                        onPress={() => navigation.navigate("Comments")}
                        style={{
                            marginRight: 24,
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml xml={iconComments} style={{ marginRight: 6 }} />
                        <Text>3</Text>
                    </Pressable>
                    <View
                        style={{
                            marginLeft: "auto",
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml xml={iconMarker} style={{ marginRight: 4 }} />
                        <Text
                            style={{
                                textDecorationLine: "underline",
                            }}
                        >
                            Ivano-Frankivs'k Region, Ukraine
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.postWrapper}>
                <Image source={post_02} style={styles.image} />
                <Text style={styles.imageTitle}>Захід на Чорному морі</Text>
                <View style={styles.stats}>
                    <Pressable
                        onPress={() => navigation.navigate("Comments")}
                        style={{
                            marginRight: 24,
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml xml={iconComments} style={{ marginRight: 6 }} />
                        <Text>8</Text>
                    </Pressable>
                    <View
                        style={{
                            marginLeft: "auto",
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml xml={iconMarker} style={{ marginRight: 4 }} />
                        <Text
                            style={{
                                textDecorationLine: "underline",
                            }}
                        >
                            Kherson region, Ukraine
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.postWrapper}>
                <Image source={post_03} style={styles.image} />
                <Text style={styles.imageTitle}>
                    Старий будиночок у Венеції
                </Text>
                <View style={styles.stats}>
                    <Pressable
                        onPress={() => navigation.navigate("Comments")}
                        style={{
                            marginRight: 24,
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml xml={iconComments} style={{ marginRight: 6 }} />
                        <Text>50</Text>
                    </Pressable>
                    <View
                        style={{
                            marginLeft: "auto",
                            ...styles.statsItem,
                        }}
                    >
                        <SvgXml xml={iconMarker} style={{ marginRight: 4 }} />
                        <Text
                            style={{
                                textDecorationLine: "underline",
                            }}
                        >
                            Venice, Italy
                        </Text>
                    </View>
                </View>
            </View>
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
