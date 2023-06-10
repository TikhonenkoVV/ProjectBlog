import {
    StatusBar,
    Pressable,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    FlatList,
} from "react-native";
import { Path, Svg } from "react-native-svg";

const PostsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
                <Pressable style={styles.logOut}>
                    <Svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M10 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H10"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            d="M17 16L21 12L17 8"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            d="M21 12H9"
                            stroke="#BDBDBD"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </Svg>
                </Pressable>
            </View>
            <View style={styles.main}>
                <View style={styles.users}>
                    <View style={styles.user}>
                        <Image
                            style={styles.avatar}
                            source={require("../../assets/img/natali_romanova.jpg")}
                        />
                        <View style={styles.infoWrapper}>
                            <Text style={styles.userName}>Natali Romanova</Text>
                            <Text style={styles.userEmail}>
                                email@example.com
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.btnGrid}>
                    <Svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11 11H18V18H11V11Z"
                            stroke="#212121"
                            stroke-opacity="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 11H29V18H22V11Z"
                            stroke="#212121"
                            stroke-opacity="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M22 22H29V29H22V22Z"
                            stroke="#212121"
                            stroke-opacity="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11 22H18V29H11V22Z"
                            stroke="#212121"
                            stroke-opacity="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </Svg>
                </Pressable>
                <Pressable style={styles.btnCreatePublication}>
                    <Svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                            fill="#fff"
                        />
                    </Svg>
                </Pressable>
                <Pressable style={styles.btnUser}>
                    <Svg
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <Path
                            d="M28 29V27C28 24.7909 26.2091 23 24 23H16C13.7909 23 12 24.7909 12 27V29"
                            stroke="#212121"
                            stroke-opacity="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <Path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
                            stroke="#212121"
                            stroke-opacity="0.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </Svg>
                </Pressable>
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        position: "relative",
        height: 45,
        paddingVertical: 11,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#b3b3b3",
    },
    title: {
        textAlign: "center",
        fontFamily: "Roboto",
        fontSize: 17,
        fontWeight: 500,
    },
    logOut: {
        position: "absolute",
        top: 10,
        right: 16,
    },
    main: {
        width: "100%",
        flexGrow: 1,
    },
    users: {
        width: "100%",
        paddingTop: 32,
        paddingHorizontal: 16,
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
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: 58,
        paddingVertical: 9,
        borderTopWidth: 1,
        borderColor: "#b3b3b3",
    },
    btnCreatePublication: {
        width: 70,
        height: 40,
        marginLeft: 31,
        marginRight: 31,
        backgroundColor: "#FF6C00",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
});

export default PostsScreen;
