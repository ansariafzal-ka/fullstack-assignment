import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-gray-100 border rounded-lg">
      <h1 className="p-3 text-lg font-medium">{title}</h1>
      <hr />
      <p className="p-3 text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
