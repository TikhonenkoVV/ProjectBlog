import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Path, Svg, SvgXml } from "react-native-svg";
import { iconLogOut } from "../../assets/img/icons";

export const BtnLogout = ({ onPress, position, top, right }) => {
    return (
        <Pressable
            style={{
                ...styles.logOut,
                position: position,
                top: top,
                right: right,
            }}
            onPress={onPress}
        >
            <SvgXml xml={iconLogOut} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    logOut: {
        position: "absolute",
        top: 10,
        right: 16,
        paddingRight: 16,
    },
});
