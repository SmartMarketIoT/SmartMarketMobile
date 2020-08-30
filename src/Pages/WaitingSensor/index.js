import React from 'react';
import { Container, ContentContainer, Media, PageTitle, InputLabel, BackButton } from '../../Components';
import { View } from 'react-native';
import Order from '../../Assets/images/order.png'


const WaitingSensor = ({ navigation }) => {
    return (
        <Container>
            <ContentContainer>
            <BackButton
                    onButtonPress={() => {
                        navigation.goBack();
                    }}
                />
            <PageTitle text="Sensor escaneado!"/>
            <InputLabel text="Agora você só precisa aproximar seus produtos e eles aparecerão aqui." />
            <Media source={Order}/>
            </ContentContainer>
        </Container>
    )
}

export default WaitingSensor;