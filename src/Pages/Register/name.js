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

export default function Name({ navigation }) {

    const [ nome, setNome ] = useState(null)    
    const [ nomeError, setNomeError ] = useState(null)    

    function onNext() {
        if(nome.length < 3){
            setNomeError("NOme precisa ter ao menos 3 caracteres")
        } else {
            setNomeError(null)
            navigation.navigate('Email', { nome });
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
                <PageTitle text="Que falta de educação..." />
                <InputLabel text="Acabei de perceber que não tinha perguntado seu nome, poderia me informar?" />
                <View>
                    <TextInput value={nome} onChangeText={setNome} error={nomeError} />
                </View>

                <Button
                    title="Próximo"
                    onButtonPress={onNext}
                />
            </ContentContainer>
        </Container>
    );
}
