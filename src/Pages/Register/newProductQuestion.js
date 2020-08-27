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

export default function NewProductQuestion({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Olá {{Nome}}" />
                <InputLabel text="Agora já te conheço, mas chegou a hora de saber o que você vende" />
                <View>
                    <InputLabel text="Deseja cadastrar seu produto agora?" />
                </View>
                <View>
                    <Button
                        title="Sim :)"
                        onButtonPress={() => {
                            navigation.navigate('Title');
                        }}
                    />
                    <Button
                        outline
                        title="Prefiro fazer depois"
                        onButtonPress={() => {
                            navigation.navigate('RegisterFinish');
                        }}
                    />
                </View>
            </ContentContainer>
        </Container>
    );
}
