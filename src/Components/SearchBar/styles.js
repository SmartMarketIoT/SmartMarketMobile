import styled from 'styled-components/native';
import colors from '../../Styles/colors';

const { primary } = colors;

export const Form = styled.View`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 5;
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholder: 'Selecione o local',
})`
    flex: 1;
    height: 45px;
    padding: 10px 20px;
    box-shadow: 5px 2px 2px #000;
    background-color: #fff;
    border-radius: 40px;
    elevation: 5;
`;

export const Button = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: ${primary};
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;
