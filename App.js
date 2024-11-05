import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StackNavigator from "./Navigation/StackNavigator";
import { AuthProvider } from "./AuthContext";
import { SocketContextProvider } from "./SocketContext";

const App = () => {
  return (
    <AuthProvider>
      <SocketContextProvider>
        <StackNavigator />
      </SocketContextProvider>
    </AuthProvider>
  );
};
export default App;
