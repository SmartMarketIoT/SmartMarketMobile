import React from 'react';
import { Text } from 'react-native';
import { Container, Media, PageTitle, InputLabel, PurchaseCard } from '../../Components';
import QRCodeScanner from 'react-native-qrcode-scanner';
import AsyncStorage from '@react-native-community/async-storage';
import { RNCamera } from 'react-native-camera';
import HELIX_HTTP, { GetNextProduct, CreateOrUPdate, GetNextPurchase } from '../../Services/Helix'

export default function Pay({ navigation }) {
    async function onRead(e) {
        const purchaseId = await GetNextPurchase._55;
        console.log("Próxima compra id:", purchaseId);
        const clientId = await AsyncStorage.getItem('@userId');
        try {
            const register = HELIX_HTTP.post(CreateOrUPdate, {
                actionType: "APPEND",
                entities: [{
                    type: "Purchase",
                    id: purchaseId,
                    refClient: {
                        type: "Relationship", 
                        value: clientId
                    },
                    itemsPrice: {
                        type: "decimal", 
                        value: 0
                    },
                    discounts: {
                        type: "decimal", 
                        value: 0
                    },
                }]
            });
            if((await register).status == 204) {
                console.log("rgs",(await register).request) 
                navigation.navigate('WaitingSensor', {purchaseId, clientId})
            } 
        } catch(e) {
            console.log(`erro: ${e}`)
        }
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
