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

export default function EmailConfirmation({ route, navigation }) {
    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Confirmação do e-mail" />
                <View>
                    <InputLabel text="O seu e-mail está correto?" />
                    <InputLabel text={route.params.email} />
                </View>

                <View>
                    <Button
                        title="Confirmar"
                        onButtonPress={() => {
                            navigation.navigate('Password', {
                                ...route.params
                            });
                        }}
                    />
                </View>
            </ContentContainer>
        </Container>
    );
}
