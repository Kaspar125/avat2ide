import * as React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 px-4 text-center">
      <p className="text-sm">
        &copy; {currentYear} Avatäide. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
