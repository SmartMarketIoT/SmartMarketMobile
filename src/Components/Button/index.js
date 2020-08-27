import React from 'react';

import { StyledButton, Text, OutlineButton, OutlineText } from './styles';

export default function Button({ title, onButtonPress, outline }) {
    if (!outline) {
        return (
            <StyledButton onPress={onButtonPress}>
                <Text>{title}</Text>
            </StyledButton>
        )
    } else {
        return (
            <OutlineButton onPress={onButtonPress}>
                <OutlineText>{title}</OutlineText>
            </OutlineButton>
        )
    }
}
