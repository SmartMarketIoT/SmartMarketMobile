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

export default function Email({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Qual seu melhor e-mail?" />
                <View>
                    <InputLabel text="Digite Abaixo:" />
                    <TextInput/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('EmailConfirmation');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
