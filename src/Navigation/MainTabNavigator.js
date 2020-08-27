import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Pay, Purchases, Products } from '../routes';
import DrawerNavigator from './DrawerNavigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../Styles';
import { IconTabRound } from './styles'

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    const navigation = useNavigation();
    
    // React.useEffect(() => {
    //     navigation.openDrawer();
    //   }, [navigation]);

    return (
        <Tab.Navigator
            initialRouteName='Products'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    switch (route.name) {
                        case 'Products':
                            iconName = 'store'
                            break
                        case 'Pay':
                            iconName = 'attach-money'
                            break
                        case 'Purchases':
                            iconName = 'receipt'
                            break
                        default:
                            iconName = 'attach-money'
                            break
                    }
                    return <Icon name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.secondary,
                showLabel: false
            }}
        >
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen
                name="Pay"
                component={Pay}
                options={() => ({
                    tabBarIcon: ({ tintColor }) => (
                        <IconTabRound>
                            <Icon name="attach-money" size={26} color={colors.white} />
                        </IconTabRound>
                    )
                })}
            />
            <Tab.Screen name="Puchases" component={Purchases} />
        </Tab.Navigator>
    )
}

export default MainTabNavigator
