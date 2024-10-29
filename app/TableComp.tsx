"use client";

import { Cell, SearchField, Table, TableBody } from "react-aria-components";
import MyRow from "./components/MyRow";
import MyTableHeader from "./components/MyTableHeader";
import MyColumn from "./components/MyColumn";
import { useAsyncList } from "react-stately";
import SearchFieldComp from "./components/SearchFieldComp";
import { useState } from "react";

type Props = {
  columns: TableColumn[];
  data: RowData[];
  searchInput?: boolean;
};

export default function TableComp({ columns, data, searchInput }: Props) {
  const [resultOfSearch, setResultOfSearch] = useState<string>();
  // console.log("resultOfSearch",resultOfSearch)
  const list = useAsyncList<RowData>({
   

    //resultOfSearch.length > 0 ? resultOfSearch :
    async load() {
      // let filterVar = data.filter((item)=>item.name.toString().toLowerCase().includes(resultOfSearch!))
      // or using API fetch as well
      // console.log("filterVar",filterVar)
      // return {
      //   items:  filterVar.length > 0 ? filterVar : data,
      // };
      return{
        items: data
      }
    },
    async sort({ items, sortDescriptor }) {
      if (!sortDescriptor || !sortDescriptor.column) {
        return { items };
      }
      const colum = sortDescriptor.column as keyof TableColumn;
      return {
        items: items.sort((a, b) => {
          const first = a[colum];
          const second = b[colum];

          let cmp = first < second ? -1 : 1;
          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  });
 
  return (
    <div className="flex flex-col gap-2">
      {searchInput && (
        <SearchFieldComp
          data={list.items}
          setResultOfSearch={setResultOfSearch}
        />
      )}
      <div className="p-3 border-2 border-gray-500 rounded-lg">
        <Table
          // className="bg-slate-500 w-full h-96"
          className="text-[#2b494a]  "
          aria-label="Files"
          selectionMode="multiple"
          sortDescriptor={list.sortDescriptor}
          onSortChange={list.sort}
        >
          <MyTableHeader>
            {columns.map((column: TableColumn) => (
              <MyColumn
                id={column.columnName}
                allowsSorting
                isRowHeader={column.id === 0}
                key={column.id}
              >
                {column.columnName}
              </MyColumn>
            ))}
          </MyTableHeader>
          <TableBody items={list.items}>
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
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

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
