import { createContext, useState, useEffect, useContext } from 'react';
import useLocalStorage from '../hooks/local-storage.hooks';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  isSidebarOpen: false,
  toggleSidebar: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage('currentUser', null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const value = {
    currentUser,
    isSidebarOpen,
    toggleSidebar,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
