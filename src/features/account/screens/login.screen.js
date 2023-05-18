import React, { useContext, useState } from "react";

import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    MealsTitle,
    ErrorContainer,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/Spacer";
import { MyText } from "../../../components/typography/TextComponent";
import { ActivityIndicator, MD2Colors } from "react-native-paper";


export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [e, setE] = useState(false);


    const { onLogin, error, isLoading } = useContext(AuthenticationContext)

    return (
        <>

            <AccountBackground >
                <AccountCover />

                <MealsTitle>MealsToGo </MealsTitle>

                <AccountContainer>
                    <AuthInput

                        label={email.length != 0 ? "E-mail" : "Enter Email"}
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(u) => { setEmail(u) }}

                    />

                    <Spacer variant="top.large" />

                    <AuthInput
                        label={password.length != 0 ? "password" : "Enter password"}
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => { setPassword(p) }}
                    />
                    <ErrorContainer>

                        {!isLoading && e && error && (
                            <MyText variant="error">{error}</MyText>
                        )}
                    </ErrorContainer>
                    <Spacer variant="top.mediud" />

                    {!isLoading ? <AuthButton
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => { onLogin(email, password), setE(true) }}
                    >
                        Login
                    </AuthButton>
                        :
                        <ActivityIndicator animating={true}
                            color={MD2Colors.blue300} />
                    }
                </AccountContainer>

                <Spacer variant="top.large" />

                <AuthButton
                    mode="contained"
                    onPress={() => navigation.navigate("Account")}>
                    back
                </AuthButton>


            </AccountBackground>
        </>

    )
}




























