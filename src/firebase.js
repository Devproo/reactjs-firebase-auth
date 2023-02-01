
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpQWIQ6nYZEZu9Kiw5IShsjyQMzPkODUA",
  authDomain: "fir-auth-2789b.firebaseapp.com",
  projectId: "fir-auth-2789b",
  storageBucket: "fir-auth-2789b.appspot.com",
  messagingSenderId: "526026471880",
  appId: "1:526026471880:web:e291ba86277d9ec1b928fd"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app