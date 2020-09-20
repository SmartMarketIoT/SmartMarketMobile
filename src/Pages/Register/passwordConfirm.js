import React, { useState, useEffect } from 'react';
import HELIX_HTTP, { GetNextProduct, CreateOrUPdate, GetNextClient } from '../../Services/Helix'
import AsyncStorage from '@react-native-community/async-storage';
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

export default function PasswordConfirm({ navigation, route }) {

    const [ pwdConfirm, setPwdConfirm ] = useState(null)
    const [ pwdConfirmError, setPwdConfirmError ] = useState(null)
    const [ nextId, setNextId ] = useState(null)

    async function onNext() {

        const nextId = await GetNextClient._55;

        if (pwdConfirm != route.params.pwd) {
            setPwdConfirmError("Senha diferente da anterior")
        } else {
            try {
                const register = HELIX_HTTP.post(CreateOrUPdate, {
                    actionType: "APPEND",
                    entities: [{
                        type: "Client",
                        id: nextId,
                        name: {
                            type: "Text", 
                            value: route.params.nome
                        },
                        email: {
                            type: "Text", 
                            value: route.params.email
                        },
                        password: {
                            type: "Text", 
                            value: route.params.pwd
                        },
                    }]
                }) 
                
                if((await register).status == 204) {
                    console.log("rgs",(await register).request) 
                    await AsyncStorage.setItem('@userId', nextId)
                    navigation.navigate('RegisterFinish')
                } else {
                    setPwdConfirmError("Erro ao finalizar o cadastro")
                }
            } catch (_err) {
                console.log(_err)
                setPwdConfirmError("Erro ao finalizar o cadastro")
            }
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
                <PageTitle text="Confirmação de senha" />
                <View>
                    <InputLabel text="Digite novamente a senha" />
                    <TextInput secureTextEntry value={pwdConfirm} onChangeText={setPwdConfirm} error={pwdConfirmError}/>
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={onNext}
                />
            </ContentContainer>
        </Container>
    );
}
