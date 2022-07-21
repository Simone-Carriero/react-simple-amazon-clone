import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null
})


export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null)

    const value = {
        currentUser
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(user => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
            
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }, [currentUser])


    return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}