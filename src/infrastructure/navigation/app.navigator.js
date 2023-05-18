import React, { useContext } from "react";
// navigation
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons"
import RestaurantsNavigator from "./restaurants.navigator";

import { Mapscreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
// app navigator level context
import { FavouritesContextProvider } from "../../services/favourites/favourites.contex";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext";

const Tab = createBottomTabNavigator();





export const AppNavigation = () => {



  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>


          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Restaurants') {
                  iconName = "md-restaurant";

                } else if (route.name === 'Settings') {
                  iconName = "md-settings";

                }
                else if (route.name === 'Map') {
                  iconName = "md-map";

                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: 'tomato',
              // tabBarInactiveTintColor: 'rgba(255, 99, 71, 0.5)',
              tabBarInactiveTintColor: '#2B1B17',
            })}>

            {/* <Tab.Screen name="Restaurants" component={RestaurantsScreen} options={{ headerShown: false }} initialRouteName='Restaurants'/> */}

            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Map" component={Mapscreen} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={SettingsNavigator} options={{ headerShown: false }} />

          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>

  );
}


