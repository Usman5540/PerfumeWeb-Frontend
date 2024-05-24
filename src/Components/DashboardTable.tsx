import { Column } from "react-table";
import Table from "./Table"


// data types of col
interface DataType{
    id:string,
    status:string;
    quantity:number;
    discount:number;
    amount:number;
}
  const columns:Column<DataType>[]=[
   {
      Header:"ID",
        accessor:"id",
   },
   {
      Header:"Quantity",
        accessor:"quantity",

  },  {
      Header:"Amount",
        accessor:"amount",

  },  {
      Header:"Discount",
        accessor:"discount",

  }
  ];
//   const a= Table<DataType>(columns,data,"ok","transaction")
//   //const a: () => JSX.Element 
//   const v = a() ; 
const DashboardTable = ({ data = [] }: { data: DataType[] }) => {
  return Table<DataType>(
    columns,
    data,
    "transaction-box",
    "Top Transaction"
  )();
};

export default DashboardTable
