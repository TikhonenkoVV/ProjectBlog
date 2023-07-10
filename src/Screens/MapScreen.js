import { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { iconCheck } from "../../assets/img/icons";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

const MapScreen = () => {
    const {
        params: { goBack, latitude, longitude },
    } = useRoute();

    const headerHeight = useHeaderHeight();
    const navigation = useNavigation();

    const [location, setLocation] = useState({ latitude, longitude });
    const [showOkBtn, setShowOkBtn] = useState(false);

    return (
        <View
            style={{
                position: "relative",
                width: Dimensions.get("window").width,
                height:
                    Dimensions.get("window").height -
                    headerHeight -
                    StatusBarHeight,
            }}
        >
            <MapView
                style={styles.mapStyle}
                region={{
                    ...location,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                mapType="standard"
                minZoomLevel={1}
                moveOnMarkerPress="false"
                onPress={(event) => {
                    setShowOkBtn(true);
                    setLocation(event.nativeEvent.coordinate);
                }}
            >
                <Marker
                    title="I am here"
                    coordinate={location}
                    description="Hello"
                />
            </MapView>
            {showOkBtn && (
                <Pressable
                    onPress={() => {
                        navigation.navigate(goBack, (params = { ...location }));
                    }}
                    style={styles.okBtn}
                >
                    <SvgXml xml={iconCheck} />
                </Pressable>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    okBtn: {
        position: "absolute",
        bottom: 14,
        right: 14,
        width: 70,
        height: 70,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#ddd",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        opacity: 0.7,
    },
    mapStyle: {
        width: "100%",
        height: "100%",
    },
});

export default MapScreen;
