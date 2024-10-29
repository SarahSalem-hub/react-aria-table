"use client";
 
import TableComp from "./TableComp";
import { column2, columns1, table1, Table2 } from "./tableData";
// import SearchFieldComp from "./components/SearchFieldComp";
 
import { FaRegCircleUser } from "react-icons/fa6";

const oneDiv = (text: string) => {
  return (
    <div className="bg-orange-200 text-teal-800 clip-inset-rounded flex gap-2 w-auto h-full justify-start items-center font-semibold p-1">
      <FaRegCircleUser size={34} />

      {text}
    </div>
  );
};

const advancedTable1Data = table1.map((item) =>
  item.id === 1 ? { ...item, name: oneDiv(item.name.toString()) } : item
);

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  text-black">
      {/* <SearchFieldComp /> */}
      <TableComp columns={columns1} data={advancedTable1Data} searchInput={true} />
      <TableComp columns={column2} data={Table2} />
      {/* <FileTable/> */}
    </div>
  );
}


 