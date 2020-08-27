import styled from 'styled-components/native';
import { Callout } from 'react-native-maps';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../Styles/colors';

export const MarkerContainer = styled(Callout).attrs({ tooltip: true })`
    flex-direction: column;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    margin: 0px;
    padding: 0px;
    width: 250px;
`;

export const MarkerCover = styled.View`
    margin: 0px;
    padding: 0px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 100%;
    height: 70px;
    background-color: ${colors.blue};
`;

export const MarkerContent = styled.View`
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 0px 10px 10px;
    height: 160px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: center;
`;

export const HeaderImage = styled(Avatar).attrs({rounded: true})`
    position: absolute;
    z-index: 5;
    bottom: 0px;
    left: 0px;
    width: 60px;
    height: 60px;
`;

export const HeaderTitle = styled.Text`
    position: relative;
    left: 5px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
`;

export const Main = styled.View`
    flex-direction: column;
`;

export const MainTitle = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-top: 2px;
`;

export const MainCity = styled.Text`
    font-size: 13px;
`;

export const InformationContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const MainInformation = styled.Text`
    color: ${colors.green};
    margin-left: 4px;
    font-size: 15px;
`;

export const MainIcon = styled(Icon).attrs({
    name: 'photo-library',
    size: 16,
})`
    color: ${colors.green};
`;

export const Footer = styled.View`
    flex-direction: column;
`;

export const FooterContact = styled.Text`
    font-size: 14px;
    color: ${colors.secondary};
`;

export const FooterIcon = styled(Icon).attrs({ size: 25 })`
    color: green;
    margin-top: 3px;
    margin-left: 3px;
`;

export const FooterFaIcon = styled(FaIcon).attrs(props => ({ size: 25, color: props.color }))`
    margin-top: 3px;
    margin-left: 3px;
`;

export const MarkerTriangle = styled.View`
    margin: auto;
    width: 0;
    height: 0;
    background-color: transparent;
    border-style: solid;
    border-left-width: 35px;
    border-right-width: 35px;
    border-top-width: 20px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: white;
`;
