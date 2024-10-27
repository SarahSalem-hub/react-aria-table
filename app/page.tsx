"use client";

import SearchFieldComp from "./components/SearchFieldComp";
import TableComp from "./TableComp";
import { columns, data } from "./tableData";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-black">
      <SearchFieldComp />
      <TableComp columns={columns} data={data} />
    </div>
  );
}
