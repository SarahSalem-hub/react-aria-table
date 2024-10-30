"use client";

import {
  Cell,
  Table,
  TableBody,
} from "react-aria-components";
import MyRow from "./components/MyRow";
import MyTableHeader from "./components/MyTableHeader";
import MyColumn from "./components/MyColumn";
import SearchFieldComp from "./components/SearchFieldComp";
import React, { useState } from "react";
import { filterData } from "./helpers/filterData";
import { useLoadAndSortData } from "./hooks/useLoadAndSortData";

type Props = {
  columns: any[];
  data: any[];
  isSearch?: boolean;
  searchColumn?: string;
};

export default function TableComp({
  columns,
  data,
  isSearch,
  searchColumn,
}: Props) {
  const [resultOfSearch, setResultOfSearch] = useState<string>("");
  const list = useLoadAndSortData(data);

  const dataSwitcher = () => {
    if (resultOfSearch && searchColumn) {
      return filterData(list.items, resultOfSearch, searchColumn);
    } else {
      return list.items;
    }
  };

  return (
    <div className="w-full mx-24 flex justify-center">
      <div className="flex flex-col gap-2 min-h-60 w-[80%]">
        {isSearch && <SearchFieldComp setResultOfSearch={setResultOfSearch} />}
        <div className="p-3 border-2 botResulray-500 rounded-lg">
          <Table
            className="text-[#2b494a] w-full"
            aria-label="People"
            selectionMode="multiple"
            sortDescriptor={list.sortDescriptor}
            onSortChange={list.sort}
          >
            <MyTableHeader>
              {columns.map((column: TableColumn) => (
                <MyColumn
                  id={column.name}
                  allowsSorting
                  isRowHeader={column.isRowHeader}
                  key={column.id}
                >
                  {column.name}
                </MyColumn>
              ))}
            </MyTableHeader>
            {/* <TableBody
              items={dataSwitcher()}
              renderEmptyState={() => "No results found."}
              className={({ isEmpty }) => `${isEmpty && " text-center"}`}
            >
              {(row: RowData) => (
                <MyRow key={row.id} className="h-4" columns={columns}>
                  {columns.map((column) => (
                    <Cell
                      key={`${column.id}+${row.id}`}
                      className="h-4 bg-inherit"
                    >
                      {typeof row[column.columnName] === "object"
                        ? row[column.columnName]
                        : row[column.columnName].toString()}
                    </Cell>
                  ))}
                </MyRow>
              )}
            </TableBody> */}
            <TableBody
              items={dataSwitcher()}
              renderEmptyState={() => "No results found."}
              className={({ isEmpty }) => `${isEmpty && " text-center"}`}
            >
              {(item) => (
                <MyRow columns={columns}>
                  {(column) => (
                     
                      <Cell
                        key={`${column.id}+${item.id}`}
                        className="h-4 bg-inherit"
                      >
                        {typeof item[column.id] === "string"
                          ? item[column.id].toString()
                          : item[column.id]}
                      </Cell>
                     
                  )}
                </MyRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// console.log(
//   "name",
//   typeof item.name === "string"
//     ? item.name
//     : React.isValidElement(item.name) &&
//         (item.name as React.ReactElement).props.children[1]
// );
// console.log("first");
// return (
//   <MyRow key={row.id} className="h-4" columns={columnss}>
//     {columnss.map((column) => (
//       <Cell
//         key={`${column.id}+${row.id}`}
//         className="h-4 bg-inherit"
//       >
//         {typeof row[column.columnName] === "string"
//           ? row[column.columnName].toString()
//           : row[column.columnName]}
//       </Cell>
//     ))}
//   </MyRow>
// );
