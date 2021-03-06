import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const DropDown = () => {
  return (
    <DropdownButton id="dropdown-basic-button" variant="info" title="Menu">
      <Dropdown.Item href="http://google.com">Some</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="">Links</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="">Here</Dropdown.Item>
    </DropdownButton>
  );
};

export default DropDown;
