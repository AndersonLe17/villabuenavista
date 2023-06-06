import { SideBarDashboard } from "../components/NavBar";
import { Routes, Route } from "react-router-dom";
import { DashboardContent } from "../components/Content";
import StaffContent from "../components/Content/StaffContent";

const Dashboard = () => {
  return (
    <div className="layout d-flex" >
      <SideBarDashboard />
      <div className="layout-content">
        <Routes>
          <Route path="/" element={<DashboardContent/>}/>
          <Route path="staff" element={<StaffContent/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
