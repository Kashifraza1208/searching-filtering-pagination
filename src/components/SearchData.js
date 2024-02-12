import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SearchData.css";

const SearchData = ({ onChangeHandler }) => {
  return (
    <Navbar className="searchData">
      <Form inline className="search-class">
        <Row>
          <Col style={{ width: "400px" }} xs="auto">
            <Form.Control
              type="text"
              placeholder="Search title or name..."
              className="mr-sm-2 w-100 search-field"
              style={{
                width: "400px",
                background: "#000",
                color: "#ffffff",
                padding: "10px",
                outlineColor: "#ffffff",
                placeholder: "#ffffff",
              }}
              onChange={onChangeHandler}
            />
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default SearchData;
