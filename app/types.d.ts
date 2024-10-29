// type TableData = {
//   id: number;
//   name: string;
//   email: string;
//   grade: number;
//   number : number 
// };

type TableColumn = {
  id: number;
  columnName: string;
  isRowHeader?:boolean
};


type RowData = {
  id: number;  
  [key: string]: string | number | boolean | JSX.Element;  
};