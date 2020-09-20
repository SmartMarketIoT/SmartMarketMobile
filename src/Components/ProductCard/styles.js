import styled from 'styled-components/native';
import colors from '../../Styles/colors';

export const CardContainer = styled.View`
    elevation: 5;
    background-color: ${colors.white}
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
    flex-direction: row;
`;

export const CardContent = styled.View`
    padding: 10px;
    width: 90%;
`;

export const CardImage = styled.Image`
    height: 100px;
    width: 100px;
`;

export const CardTitle = styled.Text`
    font-weight: bold;
    width: 80%;
`;


export const CardPrice = styled.Text`
    width: 80%; 
`;

export const CardPriceGreen = styled(CardPrice)`
    color: ${colors.green};
    font-weight: bold;
`;

export const CardId = styled.Text`
    color: ${colors.secondary}
    width: 80%;
`;
