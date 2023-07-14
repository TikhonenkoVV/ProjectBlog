import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import { PostItem } from "../Components/PostItem";
import { View } from "react-native";
import { Loader } from "../Components/Loader";
import { useEffect } from "react";

const PostsScreen = () => {
    const [postsArray, setPostArray] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
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

    return (
        <>
            {/* <Loader /> */}
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
