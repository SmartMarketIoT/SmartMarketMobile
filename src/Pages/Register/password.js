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

export default function Password({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Senha" />
                <View>
                    <InputLabel text="Escolha uma senha para usar o app" />
                    <TextInput/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('PasswordConfirm');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
