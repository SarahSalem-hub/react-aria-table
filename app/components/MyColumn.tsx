import { Column, type ColumnProps } from "react-aria-components";

export default function MyColumn(props: ColumnProps) {
  return (
    <Column
      {...props}
      className={({ isFocused }) => `
        ${isFocused ? "outline-none" : " "}
    `}
    >
      {({ allowsSorting, sortDirection = "descending" }) => (
        <>
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === "ascending" ? "▲" : "▼"}
            </span>
          )}
        </>
      )}
    </Column>
  );
}
