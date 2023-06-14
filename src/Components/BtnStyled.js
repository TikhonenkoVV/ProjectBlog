import { Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export const BtnStyled = ({ onPress, title }) => {
    return (
        <Pressable style={styles.btnStyle} onPress={onPress}>
            <Text style={styles.btnTitle}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        width: "100%",
        height: 50,
        backgroundColor: "#FF6C00",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    btnTitle: {
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#fff",
    },
});
