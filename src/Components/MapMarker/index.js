import React from 'react';
import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar } from 'react-native-elements';
import { colors } from '../../Styles';
import {
    MarkerContainer,
    MarkerCover,
    MarkerContent,
    Header,
    HeaderTitle,
    HeaderImage,
    Main,
    MainTitle,
    MainCity,
    InformationContainer,
    MainInformation,
    MainIcon,
    Footer,
    FooterContact,
    FooterIcon,
    FooterFaIcon,
    MarkerTriangle,
} from './styles';

export default function MapMarker() {
    return (
        <Marker
            coordinate={{
                latitude: -23.7472303,
                longitude: -46.4022293,
            }}
        >
            <Icon name="room" color={colors.red} size={40} />
            <MarkerContainer>
                <MarkerCover source={{
                    uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }} />
                <MarkerContent>
                    <Header>
                        <HeaderImage />
                        <HeaderTitle>Maria da Silva</HeaderTitle>
                    </Header>
                    <Main>
                        <MainTitle>Máscaras personalizadas</MainTitle>
                        <MainCity>Rio Grande da Serra - SP</MainCity>
                        <InformationContainer>
                            <MainIcon />
                            <MainInformation>
                                Ver fotos e outras informações
                            </MainInformation>
                        </InformationContainer>
                    </Main>
                    <Footer>
                        <FooterContact>Entre em contato:</FooterContact>
                        <InformationContainer>
                            <FooterFaIcon name="whatsapp" color="green" />
                            <FooterFaIcon name="facebook-messenger" color="#0084d4" />
                        </InformationContainer>
                    </Footer>
                </MarkerContent>
                <MarkerTriangle />
            </MarkerContainer>
        </Marker>
    );
}
