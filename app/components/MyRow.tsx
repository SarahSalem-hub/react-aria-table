import React from "react";
import {
  Cell,
  Checkbox,
  Collection,
  Row,
  RowProps,
  useTableOptions,
} from "react-aria-components";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
} from "react-icons/md";

export default function MyRow<T extends object>({
  id,
  columns,
  children,
  ...otherProps
}: RowProps<T>) {
  const { selectionBehavior } = useTableOptions();

  return (
    <Row
      id={id}
      {...otherProps}
      className={({ isSelected, isFocused }) => 
        `${isSelected ? "bg-[#2b494a] clip-inset-rounded text-white" : ""}
      ${isFocused ? "outline-none" : " "}
      `}
    >
      {selectionBehavior === "toggle" && (
        <Cell>
          <Checkbox slot={"selection"} className="flex justify-center w-8 h-8">
            {({ isSelected }) =>
              isSelected ? (
                <MdCheckBox size="full" />
              ) : (
                <MdCheckBoxOutlineBlank size="full" />
              )
            }
          </Checkbox>
        </Cell>
      )}
      <Collection items={columns}>{children}</Collection>
    </Row>
  );
}
