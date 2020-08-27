import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Button } from './styles';

export default function BackButton({ onButtonPress }) {
    return (
        <TouchableOpacity>
            <Button onPress={onButtonPress} />
        </TouchableOpacity>
    );
}
