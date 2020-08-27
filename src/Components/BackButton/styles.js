import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../Styles/colors';

export const Button = styled(Icon).attrs({ name: 'arrow-back', size: 30 })`
    color: ${colors.secondary};
`;
