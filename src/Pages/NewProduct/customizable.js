import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import {
    Container,
    ContentContainer,
    PageTitle,
    Button,
    InputLabel,
    RadioInput,
    BackButton,
} from '../../Components';

export default function Title({ navigation }) {
    const [radioValue, setRadioValue] = useState(0);

    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('Title');
                    }}
                />
                <PageTitle text="Personalização" />
                <View>
                    <InputLabel text="Sua máscara pode ser personalizada pelo cliente?" />
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
                        navigation.navigate('FabricType');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
