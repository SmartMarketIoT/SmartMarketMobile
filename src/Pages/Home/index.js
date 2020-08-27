import React from 'react';
import { View } from 'react-native';
import { MapViewHome, SearchBar } from '../../Components';

export default function Home({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <SearchBar />
            <MapViewHome />
        </View>
    );
}
