import React, { useEffect, useState } from "react";
import Select from "react-select";
import options from "../select/options";
const SelectComponent = () => {
  const [a, setOptions] = useState([]);
  useEffect(() => {
    const formatedData = options;
    console.log(options)
    setOptions(formatedData);
  }, []);
  return <Select options={options} />;
};
export default SelectComponent;
