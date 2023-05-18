import { useState, createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import { LoginRequest } from "./authentication.service";

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyB95hhu-_Jv9wn8HFfITNY2_wnA8C7mq9I",
    authDomain: "mealstogo-721b9.firebaseapp.com",
    projectId: "mealstogo-721b9",
    storageBucket: "mealstogo-721b9.appspot.com",
    messagingSenderId: "267490516243",
    appId: "1:267490516243:web:9dba1ac4bba671d3f78ee6"
};

const app = initializeApp(firebaseConfig);

export const AuthenticationContext = createContext();

export const AuthenticationContextProvder = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const auth = getAuth();

    // console.log("========================================================");

    // console.log(auth);
    // console.log("-------------------------------------------------------------------------------------");

    // console.log(app);


    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User

            setUser(usr)
            setIsLoading(true)
        } else {
            // User is signed out
            // ...
            //   setIsLoading(false)

        }
    });

    // console.log("-------------------------------------------------------------------")
    // console.log(user)

    const onLogin = (email, password) => {
        // console.log(email, password);
        LoginRequest(email, password, setIsLoading, setUser, setError)
    };

    // const auth = getAuth();

    const onRegister = (email, password, repeatedPasssword) => {

        if (email.length === 0 || password.length == 0 || repeatedPasssword.length == 0) {
            setError("Error please fill detail")
        }
        else if (password !== repeatedPasssword) {
            setError("Error: Password does not match")
        }
        else {
            setIsLoading(true);
            createUserWithEmailAndPassword(auth, email, password, repeatedPasssword)
                .then((usr) => {
                    setUser(usr)
                    setIsLoading(false);
                    // console.log(usr);
                })
                .catch((e) => {
                    setIsLoading(false);
                    setError("Error: " + e.toString().substr(31, e.length));
                    // setError(e.toString())
                })

        }

    }

    const onLogOut = () => {
        // setUser(null);

        signOut(auth).then(() => {
            setUser(null)
            alert("Log-out successful")
            setIsLoading(false)
        }).catch((e) => {
            // An error happened.
            setIsLoading(false)
            setError("Error: " + e.toString().substr(31, e.length));

        });

    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogOut,
            }}

        >
            {children}
        </AuthenticationContext.Provider>
    )
}











