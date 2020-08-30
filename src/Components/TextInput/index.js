import React from 'react';

import { Input, Description, InputError  } from './styles';

export default function ({ description, onChangeText, secureTextEntry, value, error }) {
    return (
        <>
            <Input 
                value={value}                
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry}
            />
            {description ? <Description>{description}</Description> : null}
            {error ? <InputError>{error}</InputError> : null}
        </>
    );
}
