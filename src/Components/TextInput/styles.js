import styled from 'styled-components/native';
import colors from '../../Styles/colors';

export const Input = styled.TextInput`
    border-bottom-color: ${colors.secondary};
    border-bottom-width: 1px;
`;

export const Description = styled.Text`
    font-size: 14px;
    color: ${colors.secondary};
    margin-top: 3px;
    align-self: flex-end;
`;

export const InputError = styled(Description)`
    color: ${colors.red};
`;
