import React from 'react';

import { View } from 'react-native';
import {
    Container,
    ContentContainer,
    PageTitle,
    Button,
    InputLabel,
    TextInput,
    BackButton,
} from '../../Components';

export default function Price({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('Delivery');
                    }}
                />
                <PageTitle text="Preço" />
                <View>
                    <InputLabel text="Qual a faixa de preço da sua máscara?" />
                    <TextInput description="Dica: Informe o preço inicial do produto" />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Contact');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
