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

export default function Location({ navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.navigate('Images');
                    }}
                />
                <PageTitle text="Selecione a localização" />
                <View>
                    
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={() => {
                        navigation.navigate('ProductFinish');
                    }}
                />
            </ContentContainer>
        </Container>
    );
}
