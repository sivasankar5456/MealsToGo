import React from "react";
import LottieAnimationView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/Spacer";
import { AccountBackground, AccountContainer, AccountCover, AuthButton, MealsTitle, AnimationWrapper } from "../components/account.styles";
export const AccountScreen = ({ navigation }) => {

    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>

                <LottieAnimationView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}

                />
                
            </AnimationWrapper>
            <MealsTitle>MealsToGo</MealsTitle>
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}>
                    login
                </AuthButton>

                <Spacer variant="top.large" />
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}>
                    Register
                </AuthButton>

            </AccountContainer>
        </AccountBackground>
    )
}


















