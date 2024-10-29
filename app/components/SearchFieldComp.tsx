import React, { useEffect, useState } from "react";
import { Input, Label, SearchField } from "react-aria-components";

type Props = {
  data: RowData[];
  // setResultOfSearch: (result: RowData[]) => void;
  setResultOfSearch: (result: string) => void;
};

export default function SearchFieldComp({ data, setResultOfSearch }: Props) {
  // console.log("data",data)
  // const [value, setValue] = useState<string>()

  // console.log("value",value)
  // console.log("filter",filter)
  // let filter: RowData[] = []
  // useEffect(() => {
  //    filter = data.filter((item)=>item.name.toString().toLowerCase().includes(value!))
  //   if (filter.length > 0) {
  //     setResultOfSearch(filter)
  //   }
  //   else null
  // }, [filter])

  return (
    <SearchField className=" rounded-md flex gap-1" isDisabled>
      <Label>Search</Label>
      <Input
        placeholder="search is still disabled "
        onChange={(e) => setResultOfSearch(e.target.value)}
        className="border-2 border-gray-300 rounded-lg focus:outline-none ps-2"
      />
    </SearchField>
  );
}
