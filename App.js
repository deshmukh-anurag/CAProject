import React from "react";
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StackNavigator from "./Navigation/StackNavigator";
import { AuthProvider } from "./AuthContext";

const App = () => {
  return (
    <AuthProvider>
        <StackNavigator />
    </AuthProvider>
  );
};
export default App;
