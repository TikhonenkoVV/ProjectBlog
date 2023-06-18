import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Background } from "../Components/Background";
import { SvgXml } from "react-native-svg";
import avatar from "../../assets/img/avatar_large.jpg";
import { useNavigation } from "@react-navigation/native";
import { BtnLogout } from "../Components/BtnLogout";
import {
    iconAdd,
    iconComments,
    iconLikes,
    iconMarker,
} from "../../assets/img/icons";
import { data } from "../data";

const windowHeight = Dimensions.get("window").height;

export const ProfileScreen = () => {
    const barHeight = useBottomTabBarHeight();
    const navigation = useNavigation();
    const iconAddAvatar = iconAdd("white", "#E8E8E8", "#BDBDBD");
    const iconCommentsFalse = iconComments("none", "#BDBDBD");
    const iconCommentsTrue = iconComments("#FF6C00", "#FF6C00");
    const iconLikesFalse = iconLikes("#BDBDBD");
    const iconLikesTrue = iconLikes("#FF6C00");

    return (
        <Background>
            <ScrollView style={styles.scrollView}>
                <View
                    style={{
                        minHeight: windowHeight - 150 - barHeight,
                        ...styles.wrapper,
                    }}
                >
                    <View style={styles.container}>
                        <BtnLogout
                            position="absolute"
                            top={22}
                            right={16}
                            onPress={() => navigation.navigate("Login")}
                        />
                        <View style={styles.photoWrapper}>
                            <Pressable style={styles.btnAddImage}>
                                <SvgXml
                                    xml={iconAddAvatar}
                                    style={{ transform: [{ rotate: "45deg" }] }}
                                />
                            </Pressable>
                            <Image
                                style={{ borderRadius: 16 }}
                                source={avatar}
                            />
                        </View>
                        <Text style={styles.title}>Natali Romanova </Text>
                        {data.map(
                            ({
                                id,
                                image,
                                title,
                                comments,
                                likes,
                                location,
                                latitude,
                                longitude,
                            }) => {
                                return (
                                    <View key={id} style={styles.postWrapper}>
                                        <Image
                                            source={image}
                                            style={styles.image}
                                        />
                                        <Text style={styles.imageTitle}>
                                            {title}
                                        </Text>
                                        <View style={styles.stats}>
                                            <Pressable
                                                onPress={() =>
                                                    navigation.navigate(
                                                        "Comments"
                                                    )
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
                                                    marginRight: 24,
                                                    ...styles.statsItem,
                                                }}
                                            >
                                                <SvgXml
                                                    xml={
                                                        likes > 0
                                                            ? iconLikesTrue
                                                            : iconLikesFalse
                                                    }
                                                    style={{ marginRight: 6 }}
                                                />
                                                <Text>{likes}</Text>
                                            </View>
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
                                                    style={{
                                                        marginRight: 6,
                                                    }}
                                                >
                                                    <SvgXml xml={iconMarker} />
                                                </Pressable>
                                                <Text
                                                    style={{
                                                        textDecorationLine:
                                                            "underline",
                                                    }}
                                                >
                                                    {location}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                );
                            }
                        )}
                    </View>
                </View>
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        height: windowHeight,
    },
    wrapper: {
        paddingHorizontal: 16,
        width: "100%",
        marginTop: 150,
        position: "relative",
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container: {
        position: "relative",
        flex: 1,
        flexGrow: 1,
        paddingTop: 92,
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
