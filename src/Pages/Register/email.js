import React, { useEffect, useState } from 'react';

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

export default function Email({ navigation, route }) {

    const [email, setEmail] = useState(null)
    const [emailError, setEmailError] = useState(null)

    function onNext() {
        if (email == null) {
            setEmailError("Email é obrigatório!")
        } else {
            navigation.navigate('EmailConfirmation', {
                ...route.params,
                email
            })
        }
    }

    return (
        <Container>
            <ContentContainer>
                <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
                <PageTitle text="Qual seu melhor e-mail?" />
                <View>
                    <InputLabel text="Digite Abaixo:" />
                    <TextInput value={email} onChangeText={setEmail} error={emailError}/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={onNext}
                />
            </ContentContainer>
        </Container>
    );
}
