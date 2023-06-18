import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useRoute } from "@react-navigation/native";

const MapScreen = () => {
    const {
        params: { latitude, longitude },
    } = useRoute();

    // console.log(latitude, longitude);
    const [location, setLocation] = useState(locationValue);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <MapView
            style={styles.mapStyle}
            region={{
                ...location,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
            mapType="standard"
            minZoomLevel={15}
        >
            <Marker
                title="I am here"
                coordinate={location}
                description="Hello"
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});

export default MapScreen;
