import { LineSeparator } from "../../Utils";

const SideBarFooter = ({onToggle}) => {
  return (
    <div className=" mt-auto layout-sidebar-footer">
      <LineSeparator />
      <div className="sidebar-fold text-center">
        <i className="fa-light fa-left" onClick={onToggle}></i>
      </div>
    </div>
  );
};

export default SideBarFooter;
