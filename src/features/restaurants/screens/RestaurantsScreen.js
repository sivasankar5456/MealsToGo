import React, { useContext, useState } from "react";
import { FlatList, View, TouchableOpacity, ScrollView } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utility/SafeArea";
import { RestaurantsContext } from "../../../services/restaurants/restaurantsContext";
import { FavouritesContext } from "../../../services/favourites/favourites.contex";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourite-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";

const RestaurantContainer = styled(View)`
flex:1;
padding:${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
margin-left: -25px; 
`;
const LoadingContainer = styled(View)`
position: absolute;
top:50%;
left:50%;
`;


const RestaurantsScreen = ({ navigation }) => {

  const { isLoading, error, restaurants } = useContext(RestaurantsContext)
  const { favourites } = useContext(FavouritesContext)

  const [isToggled, setIsToggled] = useState(false)

  // console.log(restaurants);
  return (
    <>
      <SafeArea>
        <Search
          isFavouritesToggled={isToggled}
          onFavouritesToggled={() => setIsToggled(!isToggled)}
        />

        {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

        {isLoading && (<LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={MD2Colors.blue300}
          />
        </LoadingContainer>)
        }



        {/* 
        <FlatList
          data={restaurants}
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
                  <FadeInView>

                  <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </RestaurantContainer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.name}
        /> */}




        {/* in flat list all our restaurants are not showing in slow devices but map method working fine*/}

        <ScrollView>

          {
            restaurants?.map((item) => {

              return (

                <TouchableOpacity key={item.name}
                  onPress={() =>
                    navigation.navigate("RestarantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantContainer>
                    <FadeInView>

                      <RestaurantInfoCard restaurant={item} />
                    </FadeInView>
                  </RestaurantContainer>

                </TouchableOpacity>

              )

            })
          }
        </ScrollView>

      </SafeArea>
    </>
  );
};
export default RestaurantsScreen


