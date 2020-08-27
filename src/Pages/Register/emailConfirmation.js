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

export default function EmailConfirmation({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Confirmação do e-mail" />
                <View>
                    <InputLabel text="O seu e-mail está correto?" />
                    <InputLabel text="teste@teste.com" />
                </View>

                <View>
                    <Button
                        outline
                        title="Quero corrigir!"
                        onButtonPress={() => {
                            navigation.navigate('Email');
                        }}
                    />
                    <Button
                        title="Confirmar"
                        onButtonPress={() => {
                            navigation.navigate('Password');
                        }}
                    />
                </View>
            </ContentContainer>
        </Container>
    );
}
