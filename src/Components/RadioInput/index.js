import React from 'react';
import { View } from 'react-native';

import { FormRadio } from './styles';
// import colors from '../../Styles/colors';

export default function RadioInput({ initial, onPress }) {
    const radioProps = [
        { label: 'Sim', value: 0 },
        { label: 'Não', value: 1 },
    ];

    return (
        <View>
            <FormRadio
                buttonSize={15}
                radio_props={radioProps}
                wrapStyle="color: red"
                initial={initial}
                onPress={onPress}
            />
        </View>
    );
}
