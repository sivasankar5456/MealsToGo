import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screens/RestaurantsScreen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restuarant-details.screen";



const RestaurantStack = createStackNavigator();


const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen
                name="Restaurant" component={RestaurantsScreen}
                options={{ headerShown: false }}
                screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
            />
            <RestaurantStack.Screen
                options={{ headerShown: false }}
                name="RestarantDetail" component={RestaurantDetailsScreen}
            />

        </RestaurantStack.Navigator>

    );
}

export default RestaurantsNavigator;





