import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components";
import { MyText } from "../typography/TextComponent";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled(Image)`
border-radius: 10px;
width: 120px;
height: 100px;

`;
const CompactWebView = styled(WebView)`
border-radius: 10px;
width: 120px;
height: 100px;


`;
const Item = styled(View)`
padding:10px;
max-widht:120px;
aligin-items:cnter

`;

const isAndroid = Platform.OS === "android";

const CompactRestaurantInfo = ({ restaurant, isMap }) => {

    const MyImage = isAndroid && isMap ? CompactWebView : CompactImage;

    return (
        <Item>

            <MyImage source={{ uri: restaurant.photos[0] }} />
            <MyText variant="hint" style={{ marginLeft: 2 }} >{restaurant.name}</MyText>

        </Item>
    );
}

export default CompactRestaurantInfo;