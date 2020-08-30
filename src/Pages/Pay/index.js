import React from 'react';
import { Text } from 'react-native';
import { Container, Media, PageTitle, InputLabel } from '../../Components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


export default function Pay({ navigation }) {

    function onRead(e) {
        console.log("scanned")
        navigation.navigate('WaitingSensor')
    }

    return (
        <Container>
            <QRCodeScanner
                onRead={onRead}
                containerStyle={{flex:1}}
                showMarker
            />
        </Container>
    );
}
