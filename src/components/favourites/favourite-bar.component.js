import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components";
import CompactRestaurantInfo from "../restaurant/CompactRestaurantInfo";
import { MyText } from "../typography/TextComponent";


const FavouritesWrapper = styled(View)`
padding:10px;
padding-top:0px;

`;


export const FavouritesBar = ({ favourites, onNavigate }) => {

    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <View style={{ margin: 10, marginTop: 0 }} >

                <MyText>Favourites</MyText>

            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {

                    favourites && favourites.map((restaurant) => {
                        return (
                            <View key={restaurant.name} style={{ maxWidth: 140, }} >
                                <TouchableOpacity onPress={() => {
                                    onNavigate("RestarantDetail", {
                                        restaurant,
                                    })
                                }}
                                >
                                    <CompactRestaurantInfo restaurant={restaurant} />

                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
}