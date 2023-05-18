import React from "react"
import styled from "styled-components"
import CompactRestaurantInfo from "../../../components/restaurant/CompactRestaurantInfo"
styled

export const MapCallout = ({ restaurant }) => {

    return <CompactRestaurantInfo isMap restaurant={restaurant} />
}