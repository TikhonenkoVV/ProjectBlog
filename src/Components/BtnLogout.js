import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Path, Svg } from "react-native-svg";

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