import { ImageBackground } from "react-native";
import bgrimg from "../../assets/img/background.png";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

export const Background = ({ pad, children }) => {
    return (
        <ImageBackground
            children={children}
            source={bgrimg}
            style={{ ...styles.background, paddingTop: pad }}
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
        width: "100%",
        justifyContent: "flex-end",
    },
});
