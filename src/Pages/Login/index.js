import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { 
    Container,
    ContentContainer,
    PageTitle,
    Button,
    InputLabel,
    TextInput,
    BackButton, 
} from '../../Components';
import { Media } from './styles';
import LastOnline from '../../Assets/images/lastOnline.png';
import HELIX_HTTP, { Entities } from '../../Services/Helix'
import AsyncStorage from '@react-native-community/async-storage';

export default function Login({ navigation }) {

    const [ email, setEmail ] = useState("Giovanna@market.com")
    const [ emailError, setEmailError ] = useState(null)
    const [ pwd, setPwd ] = useState("123456789")
    const [ pwdError, setPwdError ] = useState(null)


    useEffect(() => {
        
    }, [])

    async function onLoginPress() {
        console.log("assss")
        if(!email) setEmailError("Você precisa preencher o e-mail!")
        else setEmailError(null)

        if(!pwd) setPwdError("Você precisa preencher a senha!")
        else setPwdError(null)

        if(!emailError && !pwdError) {
            try {
                const response = await HELIX_HTTP.get(
                    `${Entities}/?q=email==${email}&type=Client`
                )
                if (response.status == 200 && response.data.length > 0) {
                    await AsyncStorage.setItem('@userId', response.data[0].id)
                    navigation.navigate('MainTabNavigator')
                } else {
                    setPwdError("Usuário ou senha inválidos")
                }
            } catch ( _err ) {
                alert( _err )
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
                <Media source={LastOnline} />
                <View>
                    <InputLabel text="E-mail:" />
                    <TextInput value={email} onChangeText={(val) => setEmail(val)} error={emailError}/>
                    <InputLabel text="Senha:" />
                    <TextInput value={pwd} onChangeText={(val) => setPwd(val)} secureTextEntry error={pwdError}/>
                </View>

                <Button
                    title="Login"
                    onButtonPress={onLoginPress}
                />
            </ContentContainer>
        </Container>
    );
}
