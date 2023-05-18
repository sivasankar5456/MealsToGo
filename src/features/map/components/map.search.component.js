import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";
import { StatusBar } from "react-native";
import { Platform } from "react-native";

const SearchContainer = styled(View)`
padding:${(props) => props.theme.space[3]};
position:absolute;
z-index:999;
width:100%;
top:${Platform.OS === "android" ? StatusBar.currentHeight : 40}px
`;

export const Search = () => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])


    return (
        <SearchContainer>
            <Searchbar
                placeholder="Search for a location"
                icon="map"
                onIconPress={() => null}

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














