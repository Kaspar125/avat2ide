import * as React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-white py-4 px-4 ">
      <div className=" ">
        <div className="border-2 border-rose-500">
          <img src="logo1.png" alt="logo" width="150" height="100"></img>
          <div className="">
            <p>Võta Ühendust</p>
          </div>
          <div className="flex py-2 px-2 ">
            <img src="phone.png" alt="logo" width="30" height="30"></img>
            <a href="tel:37255555353">(372)55555353</a>
          </div>
          <div className="flex py-2 px-2 ">
            <img src="mail.png" alt="logo" width="30" height="30"></img>
            <a href="mailto:tarmo.kaasik@gmail.com">tarmo.kaasik@gmail.com</a>
          </div>
          <div className="flex flex-row-reverse space-x-4 space-x-reverse">
            <div className=" py-2 px-2 ">
              <img src="facebook.png" alt="logo" width="30" height="30"></img>
            </div>
            <div className=" py-2 px-2 ">
              <img src="linkden.png" alt="logo" width="30" height="30"></img>
            </div>
            <div className=" py-2 px-2 ">
              <img src="instagram.png" alt="logo" width="30" height="30"></img>
            </div>
          </div>
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
