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

export default function Name({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Que falta de educação..." />
                <InputLabel text="Acabei de perceber que não tinha perguntado seu nome, poderia me informar?" />
                <View>
                    <TextInput description="0 - 30 Caracteres" />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Email');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
