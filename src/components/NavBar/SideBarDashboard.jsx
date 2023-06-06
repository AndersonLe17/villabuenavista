import LineSeparator from "../Utils/LineSeparator";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SideBarImage from "./components/SideBarImage";
import SideBarNav from "./components/SideBarNav";
import SideBarFooter from "./components/SideBarFooter";

const SideBarDashboard = () => {
  const param = useParams();
  const path = Object.values(param)[0];
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

        <SideBarNav path={path} />

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
