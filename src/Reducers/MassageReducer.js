import {  ERROR, INFO, KEREN, PRIMATY, SECONDARY, SHOW, SUCCESS, WARNUNG } from "../Actions/TypesAction";

const MassageReducer = (state, action) => {
  switch (action.type) {
    case SUCCESS:
      return "Second";
    case SECONDARY:
      return "keren";
    case KEREN:
      return "success";
    case PRIMATY:
      return "primaty";
    case ERROR:
      return "error";
    case INFO:
      return "info";
    case WARNUNG:
      return "warning";
      case SHOW:
      return {...state, msg:action.payload , isOpen:!state.isOpen};
    default:
      return state;
  }
};
export default MassageReducer;
