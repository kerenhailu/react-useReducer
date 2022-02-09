import { useContext } from "react";
import { ShowAction } from "../../Actions/MassageAction";
import { msgContext } from "../Context/MassageContext";
import Massage from "../Massage/Massage.Component";

export function sum(num1,num2){
  return num1+num2;
}
function Home() {
  const { massageDis, dispatch } = useContext(msgContext);
  const ShowDispatch = () => {
     dispatch(ShowAction("goodddd"));
  };
  return (
    <div>
      <Massage />
      <button onClick={ShowDispatch}>click</button>
    </div>
  );
}
export default Home;
