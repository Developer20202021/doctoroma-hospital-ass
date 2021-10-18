import { useContext } from "react"
import { NewAuthContext } from "./AuthContext"


const useAuthContext = ()=>{
    return useContext(NewAuthContext);
}

export default useAuthContext;