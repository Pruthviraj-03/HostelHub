import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleRefreshPage = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="bg-white shadow w-full px-6 py-3 flex items-center justify-between">
      <span
        className="font-nunito text-3xl font-bold text-gray-800 hover:text-gray-500 cursor-pointer mobile:text-lg ml-28 mobile:ml-0 tablet:ml-0"
        onClick={handleRefreshPage}
      >
        HostelHub
      </span>
    </header>
  );
};

export default Header;
