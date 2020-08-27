import React from 'react';
import { View } from 'react-native';
import { Media } from './styles';
import GoToMoon from '../../Assets/images/goToMoon.png';
import {
    Container,
    ContentContainer,
    PageTitle,
    Button,
    InputLabel,
    TextInput,
    BackButton,
} from '../../Components';

export default function RegisterFinish({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Cadastro realizado!" />
                <InputLabel text="Não esqueça que você ainda precisa adicionar os dados de pagamento!" />
                <Media source={GoToMoon} />
                <Button
                    title="Finalizar"
                    onButtonPress={() => {
                        navigation.navigate('MainTabNavigator');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
