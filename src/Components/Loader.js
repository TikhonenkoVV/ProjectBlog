import { useEffect } from "react";
import { useState } from "react";
import { Easing } from "react-native";
import { View } from "react-native";
import { Animated } from "react-native";
import { Modal } from "react-native";
import { Circle, Svg } from "react-native-svg";

export const Loader = () => {
    const [animationL] = useState(new Animated.Value(0));
    const [animationM] = useState(new Animated.Value(0));
    const [animationS] = useState(new Animated.Value(0));

    const spinL = () => {
        animationL.setValue(0);
        Animated.loop(
            Animated.timing(animationL, {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start(() => spin());
    };

    const spinM = () => {
        animationM.setValue(0);
        Animated.loop(
            Animated.timing(animationM, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start(() => spinM());
    };

    const spinS = () => {
        animationS.setValue(0);
        Animated.loop(
            Animated.timing(animationS, {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start(() => spinM());
    };

    useEffect(() => {
        spinL();
        spinM();
        spinS();
    }, []);

    const rotateL = animationL.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const rotateM = animationM.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "-360deg"],
    });

    const rotateS = animationS.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    return (
        <Modal transparent={true}>
            <View
                style={{
                    position: "relative",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#ffffffc0",
                }}
            >
                <View
                    style={{
                        position: "relative",
                        width: 100,
                        height: 100,
                    }}
                >
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: 100,
                            height: 100,
                            transform: [{ rotate: rotateS }],
                        }}
                    >
                        <Svg
                            width="100"
                            height="100"
                            viewBox="0 0 8.4666665 8.4666669"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Circle
                                fill="none"
                                stroke="#ff6c00"
                                strokeWidth="0.529167"
                                strokeDasharray="4"
                                id="path846"
                                cx="5.9508076"
                                cy="-0.65582532"
                                r="1.3581959"
                                transform="rotate(51.289056)"
                            />
                        </Svg>
                    </Animated.View>
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: 100,
                            height: 100,
                            transform: [{ rotate: rotateM }],
                        }}
                    >
                        <Svg
                            width="100"
                            height="100"
                            viewBox="0 0 8.4666665 8.4666669"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Circle
                                fill="none"
                                stroke="#ff6c00"
                                strokeWidth="0.529167"
                                strokeDasharray="8"
                                id="circle2406"
                                cx="-0.096576542"
                                cy="5.9860582"
                                r="2.5539398"
                                transform="rotate(-45.924306)"
                            />
                        </Svg>
                    </Animated.View>
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: 100,
                            height: 100,
                            transform: [{ rotate: rotateL }],
                        }}
                    >
                        <Svg
                            width="100"
                            height="100"
                            viewBox="0 0 8.4666665 8.4666669"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Circle
                                fill="none"
                                stroke="#ff6c00"
                                strokeWidth="0.529167"
                                strokeDasharray="12"
                                id="circle2427"
                                cx="-5.8925977"
                                cy="-1.0580695"
                                transform="rotate(-145.1795)"
                                r="3.6927435"
                            />
                        </Svg>
                    </Animated.View>
                </View>
            </View>
        </Modal>
    );
};
