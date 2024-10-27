"use client";

import { Cell, Table, TableBody } from "react-aria-components";
import MyRow from "./components/MyRow";
import MyTableHeader from "./components/MyTableHeader";
import MyColumn from "./components/MyColumn";
import { useAsyncList } from "react-stately";

type Props = {
  columns: TableColumn[];
  data: TableData[];
};

export default function TableComp({ columns, data }: Props) {
  const list = useAsyncList<TableData>({
    load() {
      return {
        items: data,
      };
    },
    sort({ items, sortDescriptor }) {
      if (!sortDescriptor || !sortDescriptor.column) {
        return { items };
      }
      const colum = sortDescriptor.column as keyof TableData;
      return {
        items: items.sort((a, b) => {
          const first = a[colum];
          const second = b[colum];
          let cmp =
            (parseInt(first as string) || first) <
            (parseInt(second as string) || second)
              ? -1
              : 1;
          if (sortDescriptor.direction === "descending") {
            cmp *= -1;
          }
          return cmp;
        }),
      };
    },
  });

  return (
    <Table
      // className="bg-slate-500 w-full h-96"
      className="text-[#2b494a]"
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
        {(row: TableData) => (
          <MyRow key={row.id}
          >
            <Cell>{row.name}</Cell>
            <Cell>{row.email}</Cell>
            <Cell>{row.grade}</Cell>
            <Cell>{row.number}</Cell>
          </MyRow>
        )}
      </TableBody>
    </Table>
  );
}
