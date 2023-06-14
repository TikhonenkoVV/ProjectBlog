import { StyleSheet } from "react-native";
import { ScrollView, View, Text, Pressable, Image } from "react-native";
import { Path, Svg } from "react-native-svg";
import post_01 from "../../assets/img/post-photo-01.jpg";
import { Dimensions } from "react-native";
import user_01 from "../../assets/img/natali_romanova.jpg";
import user_02 from "../../assets/img/user_02_avatar_small.jpg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const CommentsScreen = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <Image source={post_01} style={styles.image} />
            <View style={styles.commentWrapper}>
                <Image style={styles.avatar} source={user_02} />
                <View style={styles.textWrapper}>
                    <Text style={styles.comment}>
                        Really love your most recent photo. I’ve been trying to
                        capture the same thing for a few months and would love
                        some tips!
                    </Text>
                    <Text style={styles.date}>09 червня, 2020 | 09:20</Text>
                </View>
            </View>
            <View
                style={{
                    ...styles.commentWrapper,
                    flexDirection: "row-reverse",
                }}
            >
                <Image
                    style={{ ...styles.avatar, marginRight: 0, marginLeft: 16 }}
                    source={user_01}
                />
                <View style={styles.textWrapper}>
                    <Text style={styles.comment}>
                        A fast 50mm like f1.8 would help with the bokeh. I’ve
                        been using primes as they tend to get a bit sharper
                        images.
                    </Text>
                    <Text style={{ ...styles.date, textAlign: "right" }}>
                        09 червня, 2020 | 09:20
                    </Text>
                </View>
            </View>
            <View style={styles.commentWrapper}>
                <Image style={styles.avatar} source={user_02} />
                <View style={styles.textWrapper}>
                    <Text style={styles.comment}>
                        Thank you! That was very helpful!
                    </Text>
                    <Text style={styles.date}>09 червня, 2020 | 09:20</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        height: windowHeight,
        paddingTop: 32,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        borderRadius: 8,
        marginBottom: 32,
    },
    commentWrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 24,
    },
    avatar: {
        width: 28,
        height: 28,
        marginRight: 16,
        borderRadius: 14,
    },
    textWrapper: {
        width: windowWidth - 76,
        padding: 16,
        borderRadius: 6,
        backgroundColor: "#F7F7F7",
    },
    comment: {
        fontFamily: "Roboto",
        fontSize: 13,
        color: "#212121",
        marginBottom: 8,
    },
    date: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: "#BDBDBD",
    },
});
