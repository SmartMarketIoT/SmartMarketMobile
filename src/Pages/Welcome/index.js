import React from 'react';
import {
    PageTitle,
    Button,
    Container,
    ContentContainer,
} from '../../Components';
import { Media } from './styles';
import ShoppingCart from '../../Assets/images/shoppingCart.png';
import { View } from 'react-native';

export default function Welcome({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <PageTitle text="Chega de enfrentar filas no supermercado!" />
                <Media source={ShoppingCart} />
                <View>
                    <Button
                        title="Acessar o aplicativo"
                        onButtonPress={() => {
                            navigation.navigate('MainTabNavigator');
                        }}
                    />
                    <Button
                        outline
                        title="Desejo me cadastrar agora"
                        onButtonPress={() => {
                            navigation.navigate('Name');
                        }}
                    />
                </View>
            </ContentContainer>
        </Container>
    );
}
