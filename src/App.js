import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import ListData from "./components/ListData";
// import FormData from "./components/FormData";
import SearchData from "./components/SearchData";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Data from "./Data";
import Filteration from "./components/Filteration";
import Pagination from "./components/Pagination";

function App() {
  //for form data Replace Data with dataArray
  // const { dataArray } = useSelector((state) => state.dataArray);
  const [item, setItem] = useState(Data);

  // PAGINATION =====================================================================>
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  useEffect(() => {
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    //slice will give slice(indexOfFirstRecord , indexOfLastRecored-1) ==>last index inclusive
    const currentRecords = Data.slice(indexOfFirstRecord, indexOfLastRecord);
    setItem(currentRecords);
  }, [currentPage]);
  const nPages = Math.ceil(Data.length / recordsPerPage); //will give no of pages
  // ==================================================================================>

  ///Filter functionality =============================================================>
  ///to ensure that value not reapeated thats why filter is here [filter out all category with different time]

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  //====================================================================================>

  ///Search functionality =============================================================>
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    const newFilteredData = Data.filter((monster) =>
      monster?.title
        ?.toLocaleLowerCase()
        ?.includes(searchVal?.toLocaleLowerCase())
    );
    setItem(newFilteredData);
  }, [searchVal]);

  const onSearchChange = (e) => {
    setSearchVal(e.target.value);
  };
  //====================================================================================>

  return (
    <>
      {/* <FormData /> */}
      <SearchData onChangeHandler={onSearchChange} />
      <Filteration setItem={setItem} filterItem={filterItem} />
      <div
        style={{
          textAlign: "center",
          fontWeight: "800",
          fontSize: "18px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Food Filtering app
      </div>
      <ListData data={item} />
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default App;
