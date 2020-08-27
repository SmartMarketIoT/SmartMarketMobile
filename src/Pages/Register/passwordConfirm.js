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

export default function PasswordConfirm({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Confirmação de senha" />
                <View>
                    <InputLabel text="Digite novamente a senha" />
                    <TextInput/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('RegisterFinish');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
