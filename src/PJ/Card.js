import React from "react";

export default function Card() {
  console.log("Card");
  return (
    <div className="card text-center mx-auto" style={{ width: 300 }}>
      <img
        className="card-img-top mx-auto"
        src="https://picsum.photos/200/300"
        alt="hinhAnh"
        style={{ width: 150, height: 200 }}
      />
      <div className="card-body">
        <h4 className="card-title">Title</h4>
        <p className="card-text text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          temporibus cupiditate dolorem dolorum omnis illum vel, fugiat deleniti
          alias magni error magnam nihil nostrum voluptatem provident similique
          earum incidunt quis.
        </p>
      </div>
    </div>
  );
}
