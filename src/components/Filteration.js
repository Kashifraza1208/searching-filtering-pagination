import React from "react";
import Data from "../Data";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Filteration = ({ setItem, filterItem }) => {
  //   const menuItems = [...new Set(Data.map((Val) => Val.category))];

  //https://www.freecodecamp.org/news/how-to-make-a-filter-component-in-react/ ==> this link for understanding filteration

  return (
    <div className="d-flex mx-5 mb-5">
      <DropdownButton
        align="end"
        style={{ float: "right", marginTop: "-70px" }}
        title="Filter By Food Time"
        id="dropdown-menu-align-end"
      >
        <Dropdown.Item onClick={() => filterItem("Breakfast")}>
          Breakfast
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterItem("Lunch")}>Lunch</Dropdown.Item>
        <Dropdown.Item onClick={() => filterItem("Dinner")}>
          Dinner
        </Dropdown.Item>
        <Dropdown.Item onClick={() => filterItem("Snaks")}>Snaks</Dropdown.Item>
        <Dropdown.Item onClick={() => setItem(Data)}>All</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default Filteration;
