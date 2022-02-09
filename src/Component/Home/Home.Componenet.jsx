import react, { useContext } from "react";
import { ShowAction } from "../../Actions/MassageAction";
import { msgContext } from "../Context/MassageContext";
import Massage from "../Massage/Massage.Component";

function Home() {
  const { massageDis, dispatch } = useContext(msgContext);
  const ShowDispatch = () => {
    return dispatch(ShowAction({ msg: "goodddd" }));
  };
  return (
    <div>
      <Massage />
      <button onClick={ShowDispatch}>click</button>
    </div>
  );
}
export default Home;
