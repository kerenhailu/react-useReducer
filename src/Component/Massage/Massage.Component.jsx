import { useContext } from "react";
import {
  KerenAction,
  MassageAction,
  SecondAction,
  ShowAction,
} from "../../Actions/MassageAction";
import { msgContext } from "../Context/MassageContext";

const Massage = () => {
  const { massageDis, dispatch } = useContext(msgContext);
  //   const [SecondDis, dispatch] = useReducer(MassageReducer, "disss");
  const ChangeMassage = () => {
    dispatch(MassageAction());
  };
  return (
    <div>
        {ShowAction.isOpen?massageDis:"keren"}
      <h1>{massageDis}</h1>
      <button onClick={ChangeMassage}>clickk</button>
      {/* {SecondDis} */}
      <button onClick={() => dispatch(SecondAction())}>clickkSecond</button>
      <button onClick={() => dispatch(KerenAction())}>clickkkeren</button>
    </div>
  );
};
export default Massage;
