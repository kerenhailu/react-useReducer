import { useContext } from "react";
import { ShowAction } from "../../Actions/MassageAction";
import { msgContext } from "../Context/MassageContext";
import Massage from "../Massage/Massage.Component";

function Home() {
  const { massageDis, dispatch } = useContext(msgContext);
  const ShowDispatch = () => {
     dispatch(ShowAction({ msg: "goodddd",isOpen:true }));
  };
  return (
    <div>
      <Massage />
      <button onClick={ShowDispatch}>click</button>
    </div>
  );
}
export default Home;
