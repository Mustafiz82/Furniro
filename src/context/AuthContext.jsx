import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider()
        const response = await signInWithPopup(auth, provider)
        console.log(response.user)
        setUser(response.user)
        window.location.href = "/"
    }


    const handleEmailPassSignUp = async (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const handleEmailPassSignin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            setUser(null)
            // console.log("user logged out")
        })
        .catch(err => console.log(err))
    }


    const object = {
        user,
        setUser,
        handleGoogleSignIn,
        handleEmailPassSignUp,
        handleEmailPassSignin , 
        handleLogout
    }


    useEffect(() => {


        const unsubsribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user)
            }
            else {
                console.log("user is signed out ")
            }
        })


        return () => unsubsribe()
    }
        , [])

    return <AuthContext.Provider value={object}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider