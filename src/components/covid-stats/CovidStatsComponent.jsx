import React from "react";
import data from "../data";
const CovidStatsComponent = ( {collection} ) => {
    console.log(data);
  return data.map((item) => <li>{item.id}</li> );
};
export default CovidStatsComponent;
