import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import {createContext, useState, useEffect} from 'react';
import 'core-js/stable/atob';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const initializeAuthUser = async () => {
      const authToken = await AsyncStorage.getItem('authToken');
      setAuthUser(authToken);
    };
    initializeAuthUser();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          const decodedToken = jwtDecode(token);
          setToken(token);
          setUserId(decodedToken.userId);
        }
      } catch (error) {
        console.error("Token decoding failed:", error);
        setToken('');
        setUserId('');
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{token, userId, setToken, setUserId, authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
