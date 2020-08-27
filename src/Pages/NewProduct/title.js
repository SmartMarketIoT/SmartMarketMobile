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

export default function Title({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('MainTabNavigator');
                    }}
                />
                <PageTitle text="Vamos começar..." />
                <View>
                    <InputLabel text="Informe o título do seu anúncio" />
                    <TextInput description="0 - 30 Caracteres" />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('Customizable');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
