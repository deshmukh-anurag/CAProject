import React from "react";
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