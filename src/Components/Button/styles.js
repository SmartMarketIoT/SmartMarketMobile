import styled from 'styled-components';
import colors from '../../Styles/colors';

export const StyledButton = styled.TouchableOpacity`
    align-items: center;
    align-self: center;
    margin-bottom: 15px;
    background-color: ${colors.primary};
    border-radius: 13px;
    padding: 15px;
    width: 80%;
`;

export const Text = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const OutlineButton = styled(StyledButton)`
    background-color: ${colors.white};
    border-color: ${colors.primary};
    border-width: 2px;
`;

export const OutlineText = styled(Text)`
    color: ${colors.primary};
`;

