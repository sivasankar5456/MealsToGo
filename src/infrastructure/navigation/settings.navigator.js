import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import FavouritesScreen from "../../features/settings/screens/favourites.screen";
import CameraScreen from "../../features/settings/screens/camera.screen";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator

      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerMode: "screen"
      }}
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <SettingsStack.Screen name="camera" component={CameraScreen} />


    </SettingsStack.Navigator>
  );
};