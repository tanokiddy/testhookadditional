import React, { useContext } from "react";
import { ADD_NEWUSER } from "../redux/action/constant";
import { context } from "./ContextProvider";

export default function UserNew() {
  console.log("UserNew");

  let [userNewState, dispatchUserNew] = useContext(context).userNewReducer;
  let user = userNewState.user;

  const handleAddUser = (lorem) => {
    dispatchUserNew({
      type: ADD_NEWUSER,
      user: lorem,
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          handleAddUser({ userName: "lorem1" });
        }}
        className="btn btn-warning"
      >
        + UserNew
      </button>
      <div>
        {user.map((item, index) => {
          return <div key={index}> {item.userName}</div>;
        })}
      </div>
    </div>
  );
}
