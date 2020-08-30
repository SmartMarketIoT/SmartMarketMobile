import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import MainTabNavigator  from './MainTabNavigator'
import DrawerNavigator from './DrawerNavigator'
import { 
    Home, 
    Welcome, 
    Title, 
    Customizable, 
    FabricType, 
    Products, Login, 
    Name, 
    NewProductQuestion, 
    EmailConfirmation, 
    RegisterFinish, 
    Email, 
    Contact, 
    Delivery, 
    Images, 
    Location, 
    MaskType, 
    Price, 
    ProductFinish, 
    SmsConfirmation,
    Password,
    PasswordConfirm,
    WaitingSensor
} from '../routes'


const Stack = createStackNavigator();

function Root() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="MainTabNavigator"
                    component={MainTabNavigator}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="DrawerNavigator"
                    component={DrawerNavigator}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Title"
                    component={Title}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Customizable"
                    component={Customizable}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="FabricType"
                    component={FabricType}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Products"
                    component={Products}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Name"
                    component={Name}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="NewProductQuestion"
                    component={NewProductQuestion}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="EmailConfirmation"
                    component={EmailConfirmation}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="RegisterFinish"
                    component={RegisterFinish}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="SmsConfirmation"
                    component={SmsConfirmation}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Email"
                    component={Email}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Contact"
                    component={Contact}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Delivery"
                    component={Delivery}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Images"
                    component={Images}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Location"
                    component={Location}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="MaskType"
                    component={MaskType}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Price"
                    component={Price}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="ProductFinish"
                    component={ProductFinish}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="Password"
                    component={Password}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="PasswordConfirm"
                    component={PasswordConfirm}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
                <Stack.Screen
                    name="WaitingSensor"
                    component={WaitingSensor}
                    options={{ 
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;
