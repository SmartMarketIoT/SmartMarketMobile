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

export default function Contact({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('Price');
                    }}
                />
                <PageTitle text="Informações de contato" />
                <View>
                    <InputLabel text="Messenger" />
                    <InputLabel text="Whatsapp" />
                    <TextInput />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Images');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
