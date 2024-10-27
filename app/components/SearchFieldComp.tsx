import React from "react";
import { Input, Label, SearchField } from "react-aria-components";

export default function SearchFieldComp() {
  return (
    <SearchField className="bg-slate-500 rounded-md">
      <Label>Search</Label>
      <Input className="bg-gray-200" />
    </SearchField>
  );
}
