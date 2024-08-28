import React from "react";

const FooterContent = ({ title, links }) => {
  return (
    <div>
      <h1 className="mb-3 text-lg text-white font-medium">{title}</h1>
      <ul className="text-white">
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContent;
