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

export default function SmsConfirmation({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Te enviei um SMS" />
                <View>
                    <InputLabel text="Você pode informar o código que recebeu nesse SMS?" />
                    <TextInput/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Name');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
