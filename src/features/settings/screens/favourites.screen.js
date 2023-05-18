import React, { useContext } from 'react'
import { FavouritesContext } from '../../../services/favourites/favourites.contex';
import { SafeArea } from '../../../components/utility/SafeArea';
import { MyText } from '../../../components/typography/TextComponent';
import { FlatList, View, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from '../../restaurants/components/RestaurantInfoCard';

const RestaurantContainer = styled(View)`
flex:1;
padding:${(props) => props.theme.space[3]};
`;
import styled from 'styled-components';
const NoFavouriteArea = styled(SafeArea)`
align-items:center;
justify-content:center;
`



const FavouritesScreen = ({ navigation }) => {

  const { favourites } = useContext(FavouritesContext)

  return favourites.length ?
    (<SafeArea>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestarantDetail", {
                  restaurant: item,
                })
              }
            >
              <RestaurantContainer>
                <RestaurantInfoCard restaurant={item} />
              </RestaurantContainer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />

    </SafeArea>) : (
      <NoFavouriteArea>
        <MyText center >
          No favourites yet
        </MyText>
      </NoFavouriteArea>
    )
}

export default FavouritesScreen;
