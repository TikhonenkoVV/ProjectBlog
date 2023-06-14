import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    Image,
    Dimensions,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { Background } from "../Components/Background";
import { Circle, Path, Svg } from "react-native-svg";
import post_01 from "../../assets/img/post-photo-01.jpg";
import post_02 from "../../assets/img/post-photo-02.jpg";
import post_03 from "../../assets/img/post-photo-03.jpg";
import avatar from "../../assets/img/avatar_large.jpg";
import { useNavigation } from "@react-navigation/native";
import { BtnLogout } from "../Components/BtnLogout";

const windowHeight = Dimensions.get("window").height;

export const ProfileScreen = () => {
    const barHeight = useBottomTabBarHeight();
    const navigation = useNavigation();
    return (
        <Background>
            <ScrollView style={styles.scrollView}>
                <View
                    style={{
                        minHeight: windowHeight - 150 - barHeight,
                        ...styles.wrapper,
                    }}
                >
                    <View style={styles.container}>
                        <BtnLogout
                            position="absolute"
                            top={22}
                            right={16}
                            onPress={() => navigation.navigate("Login")}
                        />
                        <View style={styles.photoWrapper}>
                            <Pressable style={styles.btnAddImage}>
                                <Svg
                                    width={25}
                                    height={25}
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <Circle
                                        cx="12.5"
                                        cy="12.5"
                                        r="12"
                                        fill="white"
                                        stroke="#FF6C00"
                                    />
                                    <Path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                                        fill="#FF6C00"
                                    />
                                </Svg>
                            </Pressable>
                            <Image
                                style={{ borderRadius: 16 }}
                                source={avatar}
                            />
                        </View>
                        <Text style={styles.title}>Natali Romanova </Text>
                        <View style={styles.postWrapper}>
                            <Image source={post_01} style={styles.image} />
                            <Text style={styles.imageTitle}>Ліс</Text>
                            <View style={styles.stats}>
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate("Comments")
                                    }
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        // fill="none"
                                        fill="#FF6C00"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginRight: 6 }}
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                                            // stroke="#BDBDBD"
                                            stroke="#FF6C00"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text>3</Text>
                                </Pressable>
                                <View
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginRight: 6 }}
                                    >
                                        <Path
                                            fill="none"
                                            stroke="#BDBDBD"
                                            stroke-width="1px"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-opacity="1"
                                            d="M 7.318635,9.199955 4.72741,9.19995 C 3.5133055,9.25962 2.995996,10.126292 3,10.7999 v 5.6 c -0.014744,0.912971 0.5755239,1.437006 1.72741,1.6 h 2.59111 9.74268 c 0.825316,-0.203817 1.482963,-0.575304 1.7274,-1.36 L 19.9805,9.43995 C 19.805616,8.70871 19.793107,7.929713 18.25315,7.599965 L 13.3646,7.59996 13.3021,4.39998 C 13.229,2.632305 11.094728,1.269548 10.648501,2.375 Z"
                                            id="path3050"
                                        />
                                        <Path
                                            fill="none"
                                            stroke="#BDBDBD"
                                            stroke-width="1px"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-opacity="1"
                                            d="m 7.318635,9.199955 -5e-6,8.799945"
                                            id="path4210"
                                        />
                                    </Svg>
                                    <Text>0</Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: "auto",
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        style={{
                                            ...styles.marker,
                                            marginRight: 6,
                                        }}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                                            stroke="#BDBDBD"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                            stroke="#BDBDBD"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                    >
                                        Ukraine
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.postWrapper}>
                            <Image source={post_02} style={styles.image} />
                            <Text style={styles.imageTitle}>
                                Захід на Чорному морі
                            </Text>
                            <View style={styles.stats}>
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate("Comments")
                                    }
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#FF6C00"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginRight: 6 }}
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                                            stroke="#FF6C00"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text>8</Text>
                                </Pressable>
                                <View
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginRight: 6 }}
                                    >
                                        <Path
                                            fill="none"
                                            stroke="#FF6C00"
                                            stroke-width="1px"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-opacity="1"
                                            d="M 7.318635,9.199955 4.72741,9.19995 C 3.5133055,9.25962 2.995996,10.126292 3,10.7999 v 5.6 c -0.014744,0.912971 0.5755239,1.437006 1.72741,1.6 h 2.59111 9.74268 c 0.825316,-0.203817 1.482963,-0.575304 1.7274,-1.36 L 19.9805,9.43995 C 19.805616,8.70871 19.793107,7.929713 18.25315,7.599965 L 13.3646,7.59996 13.3021,4.39998 C 13.229,2.632305 11.094728,1.269548 10.648501,2.375 Z"
                                            id="path3050"
                                        />
                                        <Path
                                            fill="none"
                                            stroke="#FF6C00"
                                            stroke-width="1px"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-opacity="1"
                                            d="m 7.318635,9.199955 -5e-6,8.799945"
                                            id="path4210"
                                        />
                                    </Svg>
                                    <Text>153</Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: "auto",
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        style={{
                                            ...styles.marker,
                                            marginRight: 6,
                                        }}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                                            stroke="#BDBDBD"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                            stroke="#BDBDBD"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                    >
                                        Ukraine
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.postWrapper}>
                            <Image source={post_03} style={styles.image} />
                            <Text style={styles.imageTitle}>
                                Старий будиночок у Венеції
                            </Text>
                            <View style={styles.stats}>
                                <Pressable
                                    onPress={() =>
                                        navigation.navigate("Comments")
                                    }
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="#FF6C00"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginRight: 6 }}
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                                            stroke="#FF6C00"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text>50</Text>
                                </Pressable>
                                <View
                                    style={{
                                        marginRight: 24,
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ marginRight: 6 }}
                                    >
                                        <Path
                                            fill="none"
                                            stroke="#FF6C00"
                                            stroke-width="1px"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-opacity="1"
                                            d="M 7.318635,9.199955 4.72741,9.19995 C 3.5133055,9.25962 2.995996,10.126292 3,10.7999 v 5.6 c -0.014744,0.912971 0.5755239,1.437006 1.72741,1.6 h 2.59111 9.74268 c 0.825316,-0.203817 1.482963,-0.575304 1.7274,-1.36 L 19.9805,9.43995 C 19.805616,8.70871 19.793107,7.929713 18.25315,7.599965 L 13.3646,7.59996 13.3021,4.39998 C 13.229,2.632305 11.094728,1.269548 10.648501,2.375 Z"
                                            id="path3050"
                                        />
                                        <Path
                                            fill="none"
                                            stroke="#FF6C00"
                                            stroke-width="1px"
                                            stroke-linecap="butt"
                                            stroke-linejoin="miter"
                                            stroke-opacity="1"
                                            d="m 7.318635,9.199955 -5e-6,8.799945"
                                            id="path4210"
                                        />
                                    </Svg>
                                    <Text>200</Text>
                                </View>
                                <View
                                    style={{
                                        marginLeft: "auto",
                                        ...styles.statsItem,
                                    }}
                                >
                                    <Svg
                                        style={{
                                            ...styles.marker,
                                            marginRight: 6,
                                        }}
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                                            stroke="#BDBDBD"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <Path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                                            stroke="#BDBDBD"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </Svg>
                                    <Text
                                        style={{
                                            textDecorationLine: "underline",
                                        }}
                                    >
                                        Italy
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Background>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        height: windowHeight,
    },
    wrapper: {
        paddingHorizontal: 16,
        width: "100%",
        marginTop: 150,
        position: "relative",
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    container: {
        position: "relative",
        flex: 1,
        flexGrow: 1,
        paddingTop: 92,
    },
    photoWrapper: {
        position: "absolute",
        left: "50%",
        transform: [{ translateX: -60 }, { translateY: -60 }],
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    btnAddImage: {
        position: "absolute",
        bottom: 14,
        right: -12,
        width: 25,
        height: 25,
        border: 2,
        borderColor: "black",
        backgroundColor: "black",
        borderRadius: 12,
        zIndex: 2,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: 500,
        fontSize: 30,
        textAlign: "center",
        marginBottom: 32,
    },
    postWrapper: {
        marginBottom: 32,
    },
    image: {
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
        width: "100%",
        height: 240,
    },
    imageTitle: {
        marginBottom: 8,
        fontFamily: "Roboto",
        fontSize: 16,
        color: "#212121",
    },
    stats: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    statsItem: {
        flexDirection: "row",
    },
});
