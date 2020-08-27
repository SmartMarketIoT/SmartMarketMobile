import React from 'react';
import { View } from 'react-native';
import { Container } from '../../Components'

export default function Home({ navigation }) {
    React.useEffect(() => {
        navigation.openDrawer();
      }, [navigation]);
    return (
        <Container/>
    );
}
