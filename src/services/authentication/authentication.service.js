import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth();




export const LoginRequest = (email, password, setIsLoading, setUser, setError) => {

  if (email.length == 0 || password.length == 0) {
    setError("fill the details")
  } else {
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((usr) => {
        setUser(usr)
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError("invalid email or password")
      })
  }

}
