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
    dispatch(ShowAction("gfhgfhgf"));
  };
  return (
    <>
      {massageDis.isOpen ? (
        <div>
          <h1>{massageDis.msg}</h1>
          <button onClick={ChangeMassage}>clickk</button>
          {/* {SecondDis} */}
          <button onClick={() => dispatch(SecondAction())}>clickkSecond</button>
          <button onClick={() => dispatch(KerenAction())}>clickkkeren</button>
        </div>
      ) : (
        "keren"
      )}
    </>
  );
};
export default Massage;
