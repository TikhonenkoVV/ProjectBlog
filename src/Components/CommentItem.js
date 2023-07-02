import { Dimensions } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";
import { formatDate } from "../services/format-date";
import { useSelector } from "react-redux";
import { selectUserId } from "../redux/selectors";

const windowWidth = Dimensions.get("window").width;

export const CommentItem = ({ item }) => {
    const userId = useSelector(selectUserId);

    return (
        <View style={styles.commentWrapper}>
            {userId === item.author ? (
                <>
                    <View style={styles.textWrapper}>
                        <Text style={styles.comment}>{item.message}</Text>
                        <Text style={styles.ourDate}>
                            {formatDate(item.commentDate)}
                        </Text>
                    </View>
                    <Image
                        style={styles.ourAvatar}
                        source={{ uri: item.avatar }}
                    />
                </>
            ) : (
                <>
                    <Image
                        style={styles.avatar}
                        source={{ uri: item.avatar }}
                    />
                    <View style={styles.textWrapper}>
                        <Text style={styles.comment}>{item.message}</Text>
                        <Text style={styles.date}>
                            {formatDate(item.commentDate)}
                        </Text>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    commentWrapper: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 24,
    },
    ourAvatar: {
        width: 28,
        height: 28,
        marginLeft: 16,
        borderRadius: 14,
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
    ourDate: {
        fontFamily: "Roboto",
        fontSize: 12,
        color: "#BDBDBD",
    },
    date: {
        fontFamily: "Roboto",
        fontSize: 12,
        textAlign: "right",
        color: "#BDBDBD",
    },
});
