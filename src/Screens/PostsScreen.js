import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import { PostItem } from "../Components/PostItem";
import { View } from "react-native";

const PostsScreen = () => {
    const [postsArray, setPostArray] = useState([]);

    const gtPosts = () => {
        try {
            const snapShot = collection(db, "posts");
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
        gtPosts();
    }, []);

    return (
        <>
            <FlatList
                ListFooterComponent={<View style={{ height: 32 }} />}
                style={styles.main}
                data={postsArray}
                renderItem={({ item }) => <PostItem item={item} />}
            />
            <StatusBar style="light" />
        </>
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
});

export default PostsScreen;
