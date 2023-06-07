import { Container } from "react-bootstrap";
import Breadcrumb from "./components/Breadcrumb";
import { RegDataTable } from "../DataTable";


const StaffContent = () => {
  return (
    <Container fluid className="py-4">
      <Breadcrumb subTitle="Personal" title="Personas"/>

      <RegDataTable />
    </Container>
  );
};

export default StaffContent;
