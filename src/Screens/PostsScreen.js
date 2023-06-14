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
import { Path, Svg } from "react-native-svg";
import post_01 from "../../assets/img/post-photo-01.jpg";
import post_02 from "../../assets/img/post-photo-02.jpg";
import post_03 from "../../assets/img/post-photo-03.jpg";

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
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            // fill="none"
                            fill="#FF6C00"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: 6 }}
                        >
                            <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                                // stroke="#BDBDBD"
                                stroke="#FF6C00"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </Svg>
                        <Text>3</Text>
                    </Pressable>
                    <View
                        style={{
                            marginLeft: "auto",
                            ...styles.statsItem,
                        }}
                    >
                        <Svg
                            style={{
                                ...styles.marker,
                                marginRight: 6,
                            }}
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
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#FF6C00"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: 6 }}
                        >
                            <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                                stroke="#FF6C00"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </Svg>
                        <Text>8</Text>
                    </Pressable>
                    <View
                        style={{
                            marginLeft: "auto",
                            ...styles.statsItem,
                        }}
                    >
                        <Svg
                            style={{
                                ...styles.marker,
                                marginRight: 6,
                            }}
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
                        <Svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#FF6C00"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginRight: 6 }}
                        >
                            <Path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                                stroke="#FF6C00"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </Svg>
                        <Text>50</Text>
                    </Pressable>
                    <View
                        style={{
                            marginLeft: "auto",
                            ...styles.statsItem,
                        }}
                    >
                        <Svg
                            style={{
                                ...styles.marker,
                                marginRight: 6,
                            }}
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
