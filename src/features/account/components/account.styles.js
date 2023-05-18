import styled from "styled-components";
import { ImageBackground, View, Text, StatusBar } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper"

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/home_bg.jpg")
})`
flex:1;
align-items: center;
justify-content:center
`;

export const AccountCover = styled(View)`
position:absolute;
width:100%;
height:100%;
background-color:rgba(255,255,255,0.3)
`;


export const AccountContainer = styled(View)`
background-color:rgba(255,255,255,0.7)
padding:${(props) => props.theme.space[4]};
margin-top:${(props) => props.theme.space[2]}

`;

export const AuthButton = styled(Button)`
background-color:${(props) => props.theme.colors.brand.primary};
border-radius: 5px;
padding:${(props) => props.theme.space[2]};
`;


export const AuthInput = styled(TextInput)`
width:280px
`;


export const MealsTitle = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size:30px;
color:${(props) => props.theme.colors.ui.primary};

`;
export const ErrorContainer = styled(View)`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;


export const AnimationWrapper = styled(View)`
width:100%;
height:40%;
position:absolute;
top:30px;
padding: ${(props) => props.theme.space[2]};
`;















