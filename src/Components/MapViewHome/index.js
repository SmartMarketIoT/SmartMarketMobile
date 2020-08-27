import React, { useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { mapColorStyle } from '../../Styles';
import { MapMarker } from '../index';

export default function MapViewHome() {
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function LocationPermition() {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            }
            return false;
        }
        async function loadInitialPosition() {
            try {
                const hasLocationPermition = await LocationPermition();
                if (hasLocationPermition) {
                    Geolocation.getCurrentPosition(
                        (position) => {
                            const { latitude, longitude } = position.coords;

                            setCurrentRegion({
                                latitude,
                                longitude,
                                latitudeDelta: 0.004,
                                longitudeDelta: 0.004,
                            });
                        },
                        (error) => {
                            console.log(error.code, error.message);
                        },
                        {
                            enableHighAccuracy: true,
                            timeout: 15000,
                            maximumAge: 10000,
                            forceRequestLocation: true,
                        }
                    );
                }
            } catch (_err) {
                console.warn(_err);
            }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) return null;

    const mapConfigs = {
        initialRegion: currentRegion,
        style: { flex: 1 },
        customMapStyle: mapColorStyle,
        showsUserLocation: true,
    };

    return (
        <MapView
            {...mapConfigs}
            onLongPress={(res) => {
                console.log(
                    `latitude: ${res.nativeEvent.coordinate.latitude}, longitude: ${res.nativeEvent.coordinate.longitude}`
                );
            }}
        >
            <MapMarker />
        </MapView>
    );
}
