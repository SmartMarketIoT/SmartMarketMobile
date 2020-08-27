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

export default function Images({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('Contact');
                    }}
                />
                <PageTitle text="Hora da foto" />
                <View>
                    <InputLabel text="Selecione até 3 imagens para o seu produto" />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Location');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
