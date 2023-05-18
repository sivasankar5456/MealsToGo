import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
// import { StatusBar, View } from "react-native";
// fonts
import { useFonts as useOswald, Oswald_400Regular, } from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from "@expo-google-fonts/lato";

//app level context
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvder } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";





export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <AuthenticationContextProvder>

          <Navigation />
        </AuthenticationContextProvder>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}


