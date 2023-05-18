import { Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
export const RestaurantCard = styled(Card)`
background-color:${(props) => props.theme.colors.ui.tertiary};
border-radius:5px ;

 `;
export const RestaurantCardCover = styled(Card.Cover)`
padding:${(props) => props.theme.space[3]};
background-color:${(props) => props.theme.colors.ui.tertiary};
 `;
export const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.heading};
font-size:${(props) => props.theme.fontSizes.caption}
padding-left:${(props) => props.theme.space[2]};

 `;


export const Title = styled(Text)`
font-family: ${(props) => props.theme.fonts.body};
font-size:${(props) => props.theme.fontSizes.body};
padding-left:${(props) => props.theme.space[2]};
color:${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled(View)`
padding:${(props) => props.theme.space[3]};

`;
export const Rating = styled(View)`
flex-direction:row;
padding:${(props) => props.theme.space[2]};

`;
export const Section = styled(View)`
flex-direction:row;
align-items:center;
`;
export const SectionEnd = styled(View)`
flex:1;
flex-direction:row;
justify-content: flex-end;
`;

export const Icon = styled(Image)`
width:15px;
height:15px`;