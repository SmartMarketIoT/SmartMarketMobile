import styled from 'styled-components/native';
import colors from '../../Styles/colors';

export const CardContainer = styled.View`
    elevation: 5;
    background-color: ${colors.white}
    border-radius: 15px;
    margin: 10px;
    padding: 10px;
`;

export const CardTitle = styled.Text`
    font-weight: bold;
`;


export const CardPrice = styled.Text`

`;

export const CardPriceGreen = styled(CardPrice)`
    color: ${colors.green};
    font-weight: bold;
`;

export const CardId = styled.Text`
    color: ${colors.secondary}
`;
