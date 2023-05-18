import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const TopSmall = styled(View)`
margin-top:4px`;

const TopMedium = styled(View)`
margin-top:8px`;

const TopLarge = styled(View)`
margin-top:16px`;

const LeftSmall = styled(View)`
margin-left:4px`;

const LeftMedium = styled(View)`
margin-left:8px`;

const LeftLarge = styled(View)`
margin-left:16px`;


export const Spacer = ({ variant, children }) => {
    if (variant === "top.medium") {
        return <TopMedium>
            {children}
        </TopMedium>
    }
    if (variant === "top.large") {
        return <TopLarge>
            {children}
        </TopLarge>
    }
    if (variant === "left.small") {
        return <LeftSmall>
            {children}
        </LeftSmall>
    }
    if (variant === "left.medium") {
        return <LeftMedium>
            {children}
        </LeftMedium>
    }
    if (variant === "left.large") {
        return <LeftLarge>
            {children}
        </LeftLarge>
    }
    return <TopSmall>
        {children}
    </TopSmall>
}
    ;





