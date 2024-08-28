import React from "react";
import FooterContent from "./FooterContent";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="w-full px-16 py-8 bg-stone-950 flex flex-col items-end">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <FooterContent title="Abstract" links={["Branches"]} />
        <FooterContent
          title="Resources"
          links={["Blog", "Help Center", "Release Notes", "Status"]}
        />
        <FooterContent
          title="Community"
          links={["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"]}
        />
        <div className="flex flex-col justify-between items-start gap-5">
          <FooterContent
            title="Company"
            links={["About Us", "Careers", "Legal"]}
          />
          <FooterContent title="Contact Us" links={["info@abstract.com"]} />
        </div>
        <span></span>
      </div>
      <div className="text-white font-medium">
        <ImInstagram className="w-7 h-7 mb-2 text-white" />
        <p>&copy; Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
