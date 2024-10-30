import React from "react";
import { Input, Label, SearchField } from "react-aria-components";

type Props = {
  setResultOfSearch: (result: string) => void;
};

export default function SearchFieldComp({ setResultOfSearch }: Props) {
  return (
    <SearchField className=" rounded-md flex gap-1">
      <Label>Search</Label>
      <Input
        placeholder="search..."
        onChange={(e) => setResultOfSearch(e.target.value)}
        className="border-2 border-gray-300 rounded-lg focus:outline-none ps-2"
      />
    </SearchField>
  );
}
