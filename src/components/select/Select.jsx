import React, { useEffect, useState } from "react";
import Select from "react-select";
import _ from "lodash";

/* Selection */
const SelectComponent = ({ countries, onCountryChange, selectedCountry }) => {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const formatedCountries = _.map(countries, (item) => ({
      value: item,
      label: item,
    }));
    setOptions(formatedCountries);
  }, [countries]);
  const onSelect = (value) => {
    onCountryChange(value);
  };
  return (
    <Select
      options={options}
      onChange={onSelect}
      value={_.find(options, item=>item.value===selectedCountry)}
    />
  );
};
export default SelectComponent;
