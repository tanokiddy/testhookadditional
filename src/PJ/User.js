import React, { useContext } from "react";
import { ADD_USER } from "../redux/action/constant";

import { context } from "./ContextProvider";

export default function User() {
  console.log("User");

  let [userState, dispatchUser] = useContext(context).userReducer;
  let user = userState.user;

  const handleAddUser = (lorem) => {
    dispatchUser({
      type: ADD_USER,
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
        + User
      </button>
      <div>
        {user.map((item, index) => {
          return <div key={index}> {item.userName}</div>;
        })}
      </div>
    </div>
  );
}
