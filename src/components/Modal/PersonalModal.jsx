import { Modal, Form, FloatingLabel, Col, Row } from "react-bootstrap";
import { ButtonCustom } from "../ButtonCustom";
import { createEmployee } from "../../fetch/employee/EmployeeFetch";

const Areas = {
  Administrador: "Administrador",
  Recepcionista: "Recepcionista",
  Mantenimiento: "Mantenimiento",
};

const PersonalModal = ({ show, handleClose, handleAdded }) => {

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const json = {
      employee: {
        person: {
          name: formData.get("name"),
          last_name: formData.get("last_name"),
          second_last_name: formData.get("second_last_name"),
          document_type: formData.get("document_type"),
          document_number: formData.get("document_number"),
          mail:
            (formData.get("name").charAt(0) +
            formData.get("last_name") +
            formData.get("second_last_name").charAt(0) +
            "@gmail.com").toLowerCase(),
          phone: formData.get("phone"),
          birthdate: formData.get("birthdate"),
          gender: formData.get("gender"),
        },
        area: formData.get("area"),
        state: "Activo",
        property: { id: 1 },
      },
      user: {
        username:
          (formData.get("name").charAt(0) +
          formData.get("last_name") +
          formData.get("second_last_name").charAt(0)).toLowerCase(),
        password: formData.get("document_number"),
        state: "Activo",
        role: { id: idArea(formData.get("area")) },
      },
    };

    const response = await createEmployee(json);
    handleAdded();
    console.log(response);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Personal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3">
            <Col md="12">
              <FloatingLabel label="Nombre">
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="Apellido Paterno">
                <Form.Control
                  type="text"
                  placeholder="Apellido Paterno"
                  name="last_name"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="Apellido Materno">
                <Form.Control
                  type="text"
                  placeholder="Apellido Materno"
                  name="second_last_name"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="Tipo Documento">
                <Form.Select name="document_type" required>
                  <option disabled>Documento</option>
                  <option value="DNI">DNI</option>
                  <option value="CE">CE</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="N° Documento">
                <Form.Control
                  type="number"
                  placeholder="N° Documento"
                  name="document_number"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="Genero">
                <Form.Select name="gender" required>
                  <option disabled>Genero</option>
                  <option value="MALE">Masculino</option>
                  <option value="FEMALE">Femenino</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="F. Nacimiento">
                <Form.Control
                  type="date"
                  placeholder="F. Nacimiento"
                  name="birthdate"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="Celular">
                <Form.Control
                  type="text"
                  placeholder="Celular"
                  name="phone"
                  required
                />
              </FloatingLabel>
            </Col>
            <Col md="6">
              <FloatingLabel label="Area">
                <Form.Select name="area" required>
                  <option disabled>Area</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Recepcionista">Recepcionista</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col md="6">
              <ButtonCustom
                type="submit"
                variant="success"
                className="col w-100"
                text="Agregar"
              />
            </Col>
            <Col md="6">
              <ButtonCustom
                variant="danger"
                className="col w-100"
                text="Cancelar"
                onClick={handleClose}
              />
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

function idArea(area) {
  switch (area) {
    case Areas.Administrador:
      return 1;
    case Areas.Recepcionista:
      return 2;
    case Areas.Mantenimiento:
      return 3;
    default:
      return 0;
  }
}

export default PersonalModal;
