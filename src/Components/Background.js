import { ImageBackground } from "react-native";
import bgrimg from "../../assets/img/background.png";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const Background = ({ children }) => {
    return (
        <ImageBackground
            children={children}
            source={bgrimg}
            style={{ ...styles.background }}
            imageStyle={{
                resizeMode: "cover",
                height: Dimensions.get("window").height,
            }}
        ></ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        justifyContent: "flex-end",
        overflow: "hidden",
    },
});
