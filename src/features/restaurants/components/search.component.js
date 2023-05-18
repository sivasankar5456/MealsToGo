import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";


const SearchContainer = styled(View)`
padding:${(props) => props.theme.space[3]};`;

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggled}
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {

                    search(searchKeyword)
                    // setSearchKeyword("")
                }}
                onChangeText={(text) => {

                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    );
};














