import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Authcontext = createContext(null)

const Authprovider = ({children}) => {

    const google = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)

    const googlelogin = () => {
        setLoading(true)
        return signInWithPopup(auth, google)
    }

    const createuser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    } 

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unSubscribe()
        }
    },[])

    const authinfo = {
        googlelogin,
        createuser,
        signin,
        logout,
        user,
        loading,
    }
// console.log(user)
    return (
        <div>
            <Authcontext.Provider value={authinfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;