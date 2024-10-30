import React from "react";

export function filterData(
    data: RowData[],
    resultOfSearch: string,
    searchColumn: string
  ) {
    const filterVar = data.filter((item) => {
      const name =
        typeof item[searchColumn] === "string"
          ? item[searchColumn]
          : React.isValidElement(item[searchColumn])
          ? (item[searchColumn] as React.ReactElement).props.children[1]
          : "";
  
      return name.toLowerCase().includes(resultOfSearch!);
    });
    console.log("filterVar", filterVar);
    return filterVar;
  }
  

