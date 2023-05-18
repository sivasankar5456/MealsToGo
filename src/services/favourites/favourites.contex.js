import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from '../authentication/authentication.context';



export const FavouritesContext = createContext();
export const FavouritesContextProvider = ({ children }) => {

    const { user } = useContext(AuthenticationContext)

    const [favourites, setFavourites] = useState([]);
    // console.log(user.uid);
    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            // console.log(uid);
            await AsyncStorage.setItem(`@${uid}`, jsonValue)
        } catch (e) {

            console.log("error storing", e);
        }
    }

    const LoadFavourites = async (uid) => {

        try {
            // console.log(uid);
            const value = await AsyncStorage.getItem(`@${uid}`)

            if (value !== null) {
                // value previously stored
                setFavourites(JSON.parse(value))
                // console.log(value);
            }
        } catch (e) {
            // error reading value
            console.log("error loading", e);
        }
    }

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(

            (x) => x.placeId !== restaurant.placeId)

        setFavourites(newFavourites)
    }

    useEffect(() => {
        if (user && user.uid) {

            LoadFavourites(user.uid)
        }
    }, [])

    useEffect(() => {
        if (user && user.uid && favourites) {
            saveFavourites(favourites, user.uid)
        }
    }, [favourites, user])

    return (
        <FavouritesContext.Provider
            value={
                {
                    favourites,
                    addToFavourites: add,
                    removeFromFavourites: remove,
                }
            }
        >
            {children}
        </FavouritesContext.Provider>
    );
}
