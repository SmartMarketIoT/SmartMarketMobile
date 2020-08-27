import React from 'react';

import { Input, Description } from './styles';

export default function ({ description }) {
    return (
        <>
            <Input />
            <Description>{description}</Description>
        </>
    );
}
