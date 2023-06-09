import { Text, Pressable } from "react-native";
import { StyleSheet } from "react-native";

export const BtnStyled = ({
    bgColor,
    textColor,
    onPress,
    title,
    isAllowed = false,
}) => {
    return (
        <Pressable
            style={{
                ...styles.btnStyle,
                backgroundColor: bgColor,
            }}
            onPress={onPress}
            disabled={isAllowed}
        >
            <Text style={{ ...styles.btnTitle, color: textColor }}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        width: "100%",
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    btnTitle: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
    },
});
