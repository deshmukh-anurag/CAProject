import { createContext,useState,useEffect, Children } from "react";
const AuthContext=createContext();
const AuthProvider=({children})=>{
    const [token,setToken]=useState("")
    copns 
    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext,AuthProvider}