import LineSeparator from "../Utils/LineSeparator";
import { useState } from "react";
import SideBarImage from "./components/SideBarImage";
import SideBarNav from "./components/SideBarNav";
import SideBarFooter from "./components/SideBarFooter";

const SideBarDashboard = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={
          "layout-sidebar d-flex flex-column vh-100 " + (toggle && "toggle")
        }
      >
        <SideBarImage />

        <LineSeparator />

        <SideBarNav />

        <SideBarFooter onToggle={() => setToggle(true)} />
      </div>
      {toggle && (
        <div className="btn-toggle" onClick={() => setToggle(false)}>
          <i className="fa-light fa-right"></i>
        </div>
      )}
    </>
  );
};

export default SideBarDashboard;
