import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/Spacer";
import { MyText } from "../../../components/typography/TextComponent";
import { Favourite } from "../../../components/favourites/favourite.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
  Title
} from "./restaurantInfoCardStyles"


export const RestaurantInfoCard = ({ restaurant = [] }) => {
  const {
    name = "some name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg",
    ],
    address = "100 some adrress",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)))

  // console.log(placeId);
  // console.log(ratingArray)

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title> {name}</Title>
        <Section>
          <Rating>

            {
              ratingArray.map((a, i) => (
                <SvgXml key={`star-${placeId}-${i}`} xml={star} width={20} height={20} />
              ))
            }

          </Rating>
          <SectionEnd>

            {isClosedTemporarily && (
              <MyText variant="error">
                CLOSED TEMPORARILY
              </MyText>
            )}
            <Spacer variant="left.medium"/>

            {isOpenNow && <SvgXml xml={open} height={23} width={23} />}

            <Spacer variant="left.medium" />

            <Icon source={{ uri: icon }} />

          </SectionEnd>
        </Section>

        <Address> {address}</Address>

      </Info>
    </RestaurantCard>
  );
};