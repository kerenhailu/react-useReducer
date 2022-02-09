import { createContext, useReducer } from "react";
import MassageReducer from "../../Reducers/MassageReducer";

export const msgContext=createContext();
export const MassgeContext=({children})=>{
    const [massageDis, dispatch] = useReducer(MassageReducer, {isOpen:false, payload:""});
    return(<msgContext.Provider value={{massageDis,dispatch}}>
        {children}
    </msgContext.Provider>)
}