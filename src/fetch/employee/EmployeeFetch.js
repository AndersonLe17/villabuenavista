export const getEmployees = async () => {
  const res = await fetch(process.env.REACT_APP_API_PATH + "employees", {
    method: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
  });
  const data = await res.json();
  const employees = data.map((emp) => ({
    id: emp.id,
    name: emp.person.name,
    last_name: `${emp.person.last_name} ${emp.person.second_last_name}`,
    document_type: emp.person.document_type,
    document_number: emp.person.document_number,
    mail: emp.person.mail,
    phone: emp.person.phone,
    area: emp.area,
    state: emp.state,
    payload: emp
  }));

  return employees;
};


export const createEmployee = async (employee) => {
    const response = await fetch(process.env.REACT_APP_API_PATH + "employees", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee)
    });
    const res = await response.json();
  
    return res;
  };
  