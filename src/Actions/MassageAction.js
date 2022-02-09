import { ERROR, INFO, KEREN, PRIMATY, SECONDARY, SHOW, SUCCESS, WARNUNG } from "./TypesAction";

export const MassageAction = (value) => {
  return { type: SUCCESS ,paload:value,isOpen:true};
};
export const PrimatyAction = (value) => {
    return { type: PRIMATY , payload:value };
  };

export const SecondAction = (value) => {
    return { type: SECONDARY,payload:value };
  };
  export const ErrorAction=(value)=>{
    return{type:ERROR ,payload:value}
}
export const InfoAction=(value)=>{
    return{type:INFO,payload:value}
}

export const WarningAction=(value)=>{
    return{type:WARNUNG,payload:value}
}
export const KerenAction=(value)=>{
    return{type:KEREN,payload:value}
}
export const ShowAction=(value)=>{
    return{type:SHOW,payload:value}
}

