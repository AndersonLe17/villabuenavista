import { Card, Form, InputGroup } from "react-bootstrap";
import DataTable from "react-data-table-component";
import MenuButtons from "../Content/components/MenuButtons";
import { dataTableStyle } from "./style";
import { useEffect, useState } from "react";

const data = [
  {idUsuario: 1, rol: "Admin", doc: "DNI", numDoc: "77531657", nombre: "Anderson Leonardo", apellido: "Orellana Espiritu", celular: "996282983"},
  {idUsuario: 2, rol: "Admin", doc: "DNI", numDoc: "77531657", nombre: "Juan Leonardo", apellido: "Orellana Espiritu", celular: "996282983"},
  {idUsuario: 3, rol: "Admin", doc: "DNI", numDoc: "77531657", nombre: "Gabriel Leonardo", apellido: "Orellana Espiritu", celular: "996282983"},
  {idUsuario: 4, rol: "Admin", doc: "DNI", numDoc: "77531657", nombre: "Jorge Leonardo", apellido: "Orellana Espiritu", celular: "996282983"},
  {idUsuario: 5, rol: "Admin", doc: "DNI", numDoc: "77531657", nombre: "Matias Leonardo", apellido: "Orellana Espiritu", celular: "996282983"},
  {idUsuario: 6, rol: "Admin", doc: "DNI", numDoc: "77531657", nombre: "Anderson Leonardo", apellido: "Orellana Espiritu", celular: "996282983"},
];

const columns = [
  {
    name: 'Id',
    filter: 'id',
    selector: row => row.idUsuario,
    sortable: true,
    grow: 0.5,
  },
  {
    name: 'Rol',
    filter: 'rol',
    selector: row => row.rol,
    sortable: true,
  },
  {
    name: 'Doc',
    filter: 'doc',
    selector: row => row.doc,
    sortable: true,
    grow: 0.5,
  },
  {
    name: 'NumDoc',
    filter: 'numDoc',
    selector: row => row.numDoc,
    sortable: true,
  },
  {
    name: 'Nombres',
    filter: 'nombre',
    selector: row => row.nombre,
    sortable: true,
  },
  {
    name: 'Apellidos',
    filter: 'apellido',
    selector: row => row.apellido,
    sortable: true,
  },
  {
    name: 'Celular',
    filter: 'celular',
    selector: row => row.celular,
    sortable: true,
  }
];

const RegDataTable = () => {
  const [records, setRecords] = useState(data);
  // const [filter, setFilter] = useState();

  useEffect(() => {
    setRecords([]);
    setRecords(data);
  }, []);

  const handleFilter = (event) => {
    const newData = data.filter(row => {
      return row["nombre"].toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData);
  }

  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Registro de Personal</Card.Title>
        <MenuButtons isCreator={true} isReporter={true} >
          <InputGroup className="w-auto">
            <Form.Control
              type="text"
              placeholder="Search..."
              onChange={handleFilter}
            />
            <Form.Select aria-label="Default select example">
              <option value="1">One</option>
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
  );
};

const ExpandedComponent = ({ data }) => {
  return <pre>{data.nombre}</pre>
}

export default RegDataTable;
