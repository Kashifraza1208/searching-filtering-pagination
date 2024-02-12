import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormData.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../redux/addDataAction";

const FormData = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    dispatch(addData(data));
    setData({
      name: "",
      description: "",
    });
  };

  return (
    <div className="formData">
      <Form className="form-class" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label style={{ color: "#ffffff", fontWeight: "600" }}>
            Name
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={data.name}
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label style={{ color: "#ffffff", fontWeight: "600" }}>
            Description
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter some text"
            value={data.description}
            name="description"
            onChange={handleChange}
            wrap="soft"
          />
        </Form.Group>

        <Button
          style={{
            float: "right",
          }}
          variant="warning"
          type="submit"
        >
          Add Task
        </Button>
      </Form>
    </div>
  );
};

export default FormData;
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// import ListData from "./components/ListData";
// import SearchData from "./components/SearchData";
// import { useEffect, useState } from "react";
// import Data from "./Data";
// import Filteration from "./components/Filteration";
// import Pagination from "./components/Pagination";

// function App() {
//   const [filteredData, setFilteredData] = useState(Data); // Data to display after filtration, search, and pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const [recordsPerPage] = useState(4);
//   const [searchVal, setSearchVal] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   // Pagination effect
//   useEffect(() => {
//     const indexOfLastRecord = currentPage * recordsPerPage;
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
//     setFilteredData(currentRecords);
//   }, [currentPage, filteredData, recordsPerPage]);

//   // Search effect
//   useEffect(() => {
//     if (searchVal.trim() === "") {
//       setFilteredData(Data); // Reset to original data if search value is empty
//       return;
//     }
//     const newFilteredData = Data.filter(
//       (monster) =>
//         monster?.title?.toLocaleLowerCase()?.includes(searchVal?.toLocaleLowerCase())
//     );
//     setFilteredData(newFilteredData);
//   }, [searchVal]);

//   // Filteration effect
//   useEffect(() => {
//     if (!selectedCategory) {
//       setFilteredData(Data); // Reset to original data if no category selected
//       return;
//     }
//     const newItem = Data.filter((newVal) => newVal.category === selectedCategory);
//     setFilteredData(newItem);
//   }, [selectedCategory]);

//   return (
//     <>
//       <SearchData onChangeHandler={(e) => setSearchVal(e.target.value)} />
//       <Filteration
//         setItem={setFilteredData}
//         filterItem={(curcat) => setSelectedCategory(curcat)}
//       />
//       <div
//         style={{
//           textAlign: "center",
//           fontWeight: "800",
//           fontSize: "18px",
//           marginBottom: "20px",
//           marginTop: "20px",
//         }}
//       >
//         Food Filtering app
//       </div>
//       <ListData data={filteredData} />
//       <Pagination
//         nPages={Math.ceil(filteredData.length / recordsPerPage)}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//       />
//     </>
//   );
// }

// export default App;
