import { createContext, useEffect, useState } from "react";
export const authContext= createContext()

export default function AuthContextProvider({children}) {
const [token, setToken] = useState(null)
 useEffect(function(){
  if(localStorage.getItem('tkn')!=null){
    setToken(localStorage.getItem('tkn'))
  }
 },[])



  return <authContext.Provider value={{ token , setToken }}>
    {children}
    </authContext.Provider>
}
