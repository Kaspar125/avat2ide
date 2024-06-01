import * as React from "react";
import SocialLinks from '@/components/SocialLinks';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white py-4 px-4 ">
      <div>
        <div className="">
          <img src="logo1.png" alt="logo" width="150" height="100"/>
          <div className="pl-8 pt-4">
            <p>Võta Ühendust</p>
          </div>
          <div className="flex py-2 pl-10 ">
            <img src="phone.png" alt="logo" width="20" height="20" className={"mr-4"}/>
            <a href="tel:37255555353" className={"hover:underline hover:text-secondary"}>+372 5555 5353</a>
          </div>
          <div className="flex py-2 pl-10 ">
            <img src="mail.png" alt="logo" width="20" height="20" className={"mr-4"}/>
            <a href="mailto:tarmo.kaasik@gmail.com" className={"hover:underline hover:text-secondary"}>tarmo.kaasik@gmail.com</a>
          </div>
         <SocialLinks/>
        </div>
      </div>
      <div>
        <p className="text-sm text-center">
          &copy; {currentYear} Avatäide OÜ. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
