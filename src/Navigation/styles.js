import styled from 'styled-components';
import { colors } from '../Styles';

export const IconTabRound = styled.View`
    background-color: ${colors.primary};
    width: 60px;
    height: 60px;
    border-radius: 30px;
    margin-bottom: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    elevation: 6;
    shadow-color: ${colors.primary};
    shadow-opacity: 0.2;
    shadow-radius: 5px;
`;
