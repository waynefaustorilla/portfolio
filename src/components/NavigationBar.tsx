import React from "react";

const NavigationBar: React.FunctionComponent = (): React.JSX.Element => {
  return (
    <nav className={"flex items-center justify-between p-4 fixed top-0 w-full shadow bg-gray-300"}>
      <div className={"start"}>
        <h5 className={"text-lg font-bold"}>Orlie Wayne Faustorilla</h5>
      </div>

      <div className={"center"}>
        <div className={"button-group"}>
          <button className={"elevate button"}>Home</button>
          <button className={"elevate button"}>About</button>
          <button className={"elevate button"}>Projects</button>
          <button className={"elevate button"}>Contact</button>
        </div>
      </div>

      <div className={"end"}>
        <button className={"elevate button"}>Download CV</button>
      </div>
    </nav>
  );
};

export default NavigationBar;