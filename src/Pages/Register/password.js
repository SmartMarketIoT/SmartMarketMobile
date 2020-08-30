import React, { useState } from 'react';

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

export default function Password({ navigation, route }) {

    const [ pwd, setPwd ] = useState(null)
    const [ pwdError, setPwdError ] = useState(null)

    function onNext() {
        if (pwd.length < 8) {
            setPwdError("A senha precisa ter pelo menos 8 caracteres")
        } else {
            navigation.navigate('PasswordConfirm', {
                ...route.params,
                pwd
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
                <PageTitle text="Senha" />
                <View>
                    <InputLabel text="Escolha uma senha para usar o app" />
                    <TextInput secureTextEntry value={pwd} onChangeText={setPwd} error={pwdError}/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={onNext}
                />
            </ContentContainer>
        </Container>
    );
}
