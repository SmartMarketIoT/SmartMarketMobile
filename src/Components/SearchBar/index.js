import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Form, Button, Input } from './styles';

export default function SearchBar({ onButtonPress }) {
    return (
        <Form>
            <Input />
            <Button onPress={onButtonPress}>
                <Icon name="gps-fixed" color="#fff" size={20} />
            </Button>
        </Form>
    );
}
