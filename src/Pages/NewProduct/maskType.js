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

export default function MaskType({ navigation }) {
    return (
        <>
            <Container>
                <ContentContainer>
                    <BackButton
                        onButtonPress={() => {
                            navigation.navigate('FabricType');
                        }}
                    />
                    <PageTitle text="Tipo de máscara" />
                    <View>
                        <InputLabel text="Qual o tipo da máscara você faz?" />
                        <TextInput description="0 - 20 caracteres" />
                    </View>
                    <Button
                        title="Próximo"
                        onButtonPress={() => {
                            navigation.navigate('Delivery');
                        }}
                    />
                </ContentContainer>
            </Container>
        </>
    );
}
