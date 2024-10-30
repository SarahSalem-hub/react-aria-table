"use client";

import TableComp from "./TableComp";
import { columns2, columns1, table1, table2  } from "./tableData";
import { FaRegCircleUser } from "react-icons/fa6";

const oneDiv = (text: string) => {
  return (
    <div className="bg-orange-200 text-teal-800 clip-inset-rounded flex gap-2 w-auto h-full justify-start items-center font-semibold p-1">
      <FaRegCircleUser size={34} />

      {text}
    </div>
  );
};
// this is for temporary applying the custom Cell
const advancedTable1Data = table1.map((item) =>
  item.id === 1 ? { ...item, name: oneDiv(item.name.toString()) } : item
);

export default function Home() {
  console.log("columns2[0].name",columns2[0].id)
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5 my-5 ">
      <TableComp
        columns={columns1}
        data={advancedTable1Data}
        isSearch={true}
        searchColumn={columns1[0].id}
      />
      <TableComp
        columns={columns2}
        data={table2}
        isSearch={true}
        searchColumn={columns2[0].id}
      />
    </div>
  );
}
