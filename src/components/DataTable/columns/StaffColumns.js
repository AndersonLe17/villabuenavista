const Areas = {
	Administrador: "Administrador",
	Recepcionista: "Recepcionista",
	Mantenimiento: "Mantenimiento",
}

export const columns = [
    {
      name: "Id",
      filter: "id",
      selector: (row) => row.id,
      sortable: true,
      grow: 0.5,
    },
    {
      name: "Nombres",
      filter: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Apellidos",
      filter: "last_name",
      selector: (row) => row.last_name,
      sortable: true,
    },
    {
      name: "Documento",
      filter: "document_type",
      selector: (row) => row.document_type,
      sortable: true,
      grow: 0.75,
    },
    {
      name: "NumDoc",
      filter: "document_number",
      selector: (row) => row.document_number,
      sortable: true,
    },
    {
      name: "Correo",
      filter: "mail",
      selector: (row) => row.mail,
      sortable: true,
    },
    {
      name: "Celular",
      filter: "phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Rol",
      filter: "area",
      selector: (row) => <span className={`badge rounded-pill text-bg-${colorArea(row.area)}`}>{row.area}</span>,
      sortable: true,
    },
    {
      name: "Estado",
      filter: "state",
      selector: (row) => <span className={"badge rounded-pill text-bg-success"}>{row.state}</span>,
      sortable: true,
    },
  ];
  
function colorArea(area) {
  switch (area) {
    case Areas.Administrador:
      return "dark";
    case Areas.Recepcionista:
      return "light";
    case Areas.Mantenimiento:
      return "primary";
    default:
      return "success";
  }
}