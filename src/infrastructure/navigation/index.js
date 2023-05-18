import React, { useContext } from "react";
import { AppNavigation } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";


export const Navigation = () => {

    const { isAuthenticated } = useContext(AuthenticationContext)
    // console.log(isAuthenticated);

    return (
        <NavigationContainer>
            {
                isAuthenticated ? <AppNavigation /> : <AccountNavigator />
            }
        </NavigationContainer>
    )
}




