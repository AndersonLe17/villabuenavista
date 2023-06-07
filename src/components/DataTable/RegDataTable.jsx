import { Card, Form, InputGroup } from "react-bootstrap";
import DataTable from "react-data-table-component";
import MenuButtons from "../Content/components/MenuButtons";
import { dataTableStyle } from "./style";
import { useEffect, useState } from "react";
import { columns } from "./columns/StaffColumns";
import { getEmployees } from "../../fetch/employee/EmployeeFetch";
import { PersonalModal } from "../Modal";


const RegDataTable = () => {
  const [data, setData] = useState([]);
  const [records, setRecords] = useState(data);
  const [filter, setFilter] = useState(columns[0].filter);
  const [show, setShow] = useState(false);
  const [added, setAdded] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdded = () => setAdded(!added);

  useEffect(() => {
    getEmployees().then((res) => {
      setRecords(res);
      setData(res);
    });
  }, [added]);

  const handleFilter = (event) => {
    const newData = data.filter((row) => {
      if (typeof row[filter] === "string") {
        return row[filter]
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      } else {
        return event.target.value !== ""
          ? row[filter] === parseInt(event.target.value)
          : row[filter];
      }
    });
    setRecords(newData);
  };

  return (
    <>
      <Card className="my-4">
        <Card.Body>
          <Card.Title>Registro de Personal</Card.Title>
          <MenuButtons
            isCreator={true}
            onClickCreator={handleShow}
            isReporter={true}
          >
            <InputGroup className="w-auto">
              <Form.Control
                type="text"
                placeholder="Search..."
                onChange={handleFilter}
                className="w-50"
              />
              <Form.Select
                className="w-50"
                aria-label="Default select example"
                onChange={(e) => setFilter(e.target.value)}
              >
                {columns.map((item) => (
                  <option value={item.filter} key={item.filter}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
            </InputGroup>
          </MenuButtons>
          <DataTable
            columns={columns}
            data={records}
            customStyles={dataTableStyle}
            highlightOnHover
            pagination
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            expandableRowDisabled={(row) => row.disabled}
          />
        </Card.Body>
      </Card>
      <PersonalModal show={show} handleClose={handleClose} handleAdded={handleAdded}/>
    </>
  );
};

const ExpandedComponent = ({ data }) => {
  return <pre>{data.payload.id}</pre>;
};

export default RegDataTable;
