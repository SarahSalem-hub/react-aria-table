import React from "react";
import {
  TableHeaderProps,
  useTableOptions,
  TableHeader,
  Column,
  Checkbox,
  Collection,
} from "react-aria-components";

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdIndeterminateCheckBox,
} from "react-icons/md";

export default function MyTableHeader<T extends object>({
  columns,
  children,
}: TableHeaderProps<T>) {
  const { selectionBehavior, selectionMode } = useTableOptions();

  return (
    <TableHeader>
      {selectionBehavior === "toggle" && (
        <Column>
          {selectionMode === "multiple" && (
            <Checkbox
              slot={"selection"}
              className="flex justify-center items-center w-8 h-8  me-4"
            >
              {({ isSelected, isIndeterminate }) => {
                if (isIndeterminate) {
                  return <MdIndeterminateCheckBox size="full" />;
                }
                if (isSelected) {
                  return <MdCheckBox size="full" />;
                }

                return <MdCheckBoxOutlineBlank size="full" />;
              }}
            </Checkbox>
          )}
        </Column>
      )}
      <Collection items={columns}>{children}</Collection>
    </TableHeader>
  );
}
