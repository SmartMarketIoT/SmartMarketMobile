import * as React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';
import { Welcome, Title, Profile } from '../routes'

const Drawer = createDrawerNavigator();


function DrawerNavigator() {
    return (
        <Drawer.Navigator
            openByDefault={true}
            drawerPosition='right'
            drawerType='slice'
            screenOptions={{unmountOnBlur: true}}
        >
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator