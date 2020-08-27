import React from 'react';
import { View } from 'react-native';
import { Media } from './styles';
import ProductFinishImage from '../../Assets/images/product-finish.png';
import {
    Container,
    ContentContainer,
    PageTitle,
    Button,
    InputLabel,
    TextInput,
    BackButton,
} from '../../Components';

export default function ProductFinish({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('Location');
                    }}
                />
                <PageTitle text="Produto Cadastrado!" />
                <InputLabel text="Você pode editar ou adicionar mais informações na aba de perfil" />
                <Media source={ProductFinishImage} />
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
