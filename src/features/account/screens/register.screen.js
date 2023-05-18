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
import { SafeArea } from "../../../components/utility/SafeArea";
import { ActivityIndicator, MD2Colors } from "react-native-paper";


export const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPasssword, setRepeatedPasssword] = useState(false);
    const [e, setE] = useState(false);


    const { onRegister, error, isLoading, } = useContext(AuthenticationContext)

    return (
        <>
            <AccountBackground >
                <AccountCover />
                <SafeArea style={{ alignItems: "center", paddingTop: 50, justifyContent: "center" }} >
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
                        <Spacer variant="top.large" />
                        <AuthInput
                            label={repeatedPasssword.length != 0 ? "Conform password" : "Re Enter password"}
                            value={repeatedPasssword}
                            textContentType="password"
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={(p) => { setRepeatedPasssword(p) }}
                        />

                        <ErrorContainer>
                            {!isLoading && e && error && (
                                <MyText variant="error">{error}</MyText>
                            )}
                        </ErrorContainer>
                        <Spacer variant="top.mediud" />

                        {!isLoading ? <AuthButton
                            icon="email"
                            mode="contained"
                            onPress={() => { onRegister(email, password, repeatedPasssword), setE(true) }}
                        >
                            Register
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
                </SafeArea>

            </AccountBackground>
        </>

    )
}













































