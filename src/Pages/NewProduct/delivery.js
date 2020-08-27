import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import {
    Container,
    ContentContainer,
    PageTitle,
    Button,
    InputLabel,
    RadioInput,
    TextInput,
    BackButton,
} from '../../Components';

export default function Delivery({ navigation }) {
    const [radioValue, setRadioValue] = useState(0);
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('MaskType');
                    }}
                />
                <PageTitle text="Entrega" />
                <View>
                    <InputLabel text="Você realiza entregas?" />
                    <RadioInput
                        initial={radioValue}
                        onPress={(value) => {
                            setRadioValue(value);
                        }}
                    />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Price');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
