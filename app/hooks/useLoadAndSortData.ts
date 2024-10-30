import { useAsyncList } from "react-stately";
export const useLoadAndSortData = (data: RowData[]) => {
  const list = useAsyncList<RowData>({
    async load() {
      return {
        items: data,
      };
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
  return list;
};
