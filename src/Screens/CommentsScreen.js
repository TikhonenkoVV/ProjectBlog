import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    TextInput,
    Text,
    Pressable,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    onSnapshot,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect, useState, useRef } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useHeaderHeight } from "@react-navigation/elements";
import { SvgXml } from "react-native-svg";
import { iconSendComment } from "../../assets/img/icons";
import { CommentItem } from "../Components/CommentItem";
import { useSelector } from "react-redux";
import { selectUserId, selectUserPhoto } from "../redux/selectors";

const windowHeight = Dimensions.get("window").height;

const CommentsScreen = () => {
    const {
        params: { postId },
    } = useRoute();

    const headerHeight = useHeaderHeight();

    const commentsList = useRef();

    const avatar = useSelector(selectUserPhoto);
    const author = useSelector(selectUserId);

    const [photo, setPhoto] = useState(null);
    const [commentsCounter, setCommentsCounter] = useState(0);
    const [commentsArray, setCommentsArray] = useState([]);
    const [message, setMessage] = useState(null);

    const getComments = () => {
        try {
            const postRef = doc(db, "posts", postId);
            const snapShot = collection(postRef, "comments");
            onSnapshot(snapShot, (comments) => {
                const arr = [];
                comments.forEach((comment) => arr.push(comment.data()));
                arr.sort((a, b) => a.commentDate - b.commentDate);
                setCommentsArray(arr);
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const addComment = async () => {
        if (!message) {
            return Alert.alert("Поле не може бути порожнім");
        }
        try {
            const postRef = doc(db, "posts", postId);
            const commentsRef = collection(postRef, "comments");
            const newComment = {
                message,
                commentDate: Date.now(),
                author,
                avatar,
                photo,
            };
            await addDoc(commentsRef, newComment);
            await updateDoc(postRef, { comments: commentsCounter + 1 });
            setMessage(null);
            Keyboard.dismiss();
            commentsList.current.scrollToEnd();
        } catch (error) {
            console.log(error.message);
        }
    };

    const getPost = async () => {
        try {
            const post = await getDoc(doc(db, "posts", postId));
            setPhoto(post.data().photo);
            setCommentsCounter(post.data().comments);
        } catch (error) {
            return console.log(error.message);
        }
    };

    useEffect(() => {
        getPost();
    }, []);

    useEffect(() => {
        getComments();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
                <View
                    style={{
                        ...styles.layout,
                        height: windowHeight - headerHeight - 82,
                    }}
                >
                    <FlatList
                        ref={commentsList}
                        style={styles.commentsList}
                        ListHeaderComponent={
                            <Image
                                source={{ uri: photo }}
                                style={styles.image}
                            />
                        }
                        data={commentsArray}
                        renderItem={({ item }) => <CommentItem item={item} />}
                        ListEmptyComponent={
                            <Text style={styles.text}>
                                Комментарії відсутні
                            </Text>
                        }
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Pressable
                        style={styles.btnCreatePost}
                        onPress={addComment}
                    >
                        <SvgXml xml={iconSendComment} />
                    </Pressable>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                    >
                        <TextInput
                            multiline={true}
                            style={styles.input}
                            placeholder="Коментувати..."
                            value={message}
                            onChangeText={setMessage}
                        />
                    </KeyboardAvoidingView>
                </View>
            </>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    layout: {
        flexGrow: 1,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
    },
    image: {
        flex: 1,
        flexGrow: 1,
        width: "100%",
        marginTop: 32,
        minHeight: 240,
        borderRadius: 8,
        marginBottom: 32,
    },
    commentsList: {
        backgroundColor: "#fff",
    },
    inputWrapper: {
        position: "relative",
        padding: 16,
        marginTop: "auto",
        backgroundColor: "#fff",
    },
    btnCreatePost: {
        position: "absolute",
        top: 24,
        right: 24,
        width: 34,
        height: 34,
        zIndex: 1,
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 25,
        paddingVertical: 16,
        paddingLeft: 16,
        paddingRight: 50,
        fontFamily: "Roboto",
        fontSize: 16,
    },
});

export default CommentsScreen;
