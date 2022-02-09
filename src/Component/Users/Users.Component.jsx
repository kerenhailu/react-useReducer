import react from "react";
import Age from "./Age/Age.Component";



function Users(props) {
   
  return (
    <div onChange={<Age/>}>
      <h1>{props.name}</h1>
      <h3>{props.lastName}</h3>
      <h5>{props.age}</h5>
    </div>
  );
}
export default Users;
