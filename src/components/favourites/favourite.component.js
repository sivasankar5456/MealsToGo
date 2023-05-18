import React, { useContext } from 'react'
import styled from 'styled-components';
import { FavouritesContext } from '../../services/favourites/favourites.contex';
import { AntDesign } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native';

const FavouriteButton = styled(TouchableOpacity)`
position: absolute;
top:25px;
right: 25px;
width: 25px;
z-index: 50;

`;

export const Favourite = ({ restaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites, } = useContext(FavouritesContext)
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)

    return (
        <FavouriteButton
            onPress={() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}
        >
            <AntDesign
                name={isFavourite ? 'heart' : 'hearto'}
                size={24}
                color={isFavourite ? "red" : "white"}
            />
        </FavouriteButton>
    )
};