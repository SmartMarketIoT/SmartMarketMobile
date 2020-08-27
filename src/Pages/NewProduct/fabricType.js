import React from 'react';
import { View } from 'react-native';

import {
    Container,
    ContentContainer,
    PageTitle,
    InputLabel,
    TextInput,
    Button,
    BackButton,
} from '../../Components';

export default function FabricType({ navigation }) {
    return (
        <>
            <Container>
                <ContentContainer>
                    <BackButton
                        onButtonPress={() => {
                            navigation.navigate('Customizable');
                        }}
                    />
                    <PageTitle text="Tecido" />
                    <View>
                        <InputLabel text="Qual o tipo de tecido que você usa?" />
                        <TextInput description="0 - 20 caracteres" />
                    </View>
                    <Button
                        title="Próximo"
                        onButtonPress={() => {
                            navigation.navigate('MaskType');
                        }}
                    />
                </ContentContainer>
            </Container>
        </>
    );
}
