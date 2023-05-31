import { Form } from "react-bootstrap";
const SearchInput = () => {
  return (
    <Form className="d-flex">
      <Form.Control
        placeholder="Search"
        className="me-2 isSearch in-search"
      />
    </Form>
  );
};

export default SearchInput;
