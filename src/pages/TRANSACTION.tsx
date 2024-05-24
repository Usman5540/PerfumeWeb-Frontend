import ADMINSIDEBAR from "../Components/ADMINSIDEBAR"
import { ReactElement, useState } from "react"

import Table from "../Components/Table"
import { Column } from "react-table";
import { Link } from "react-router-dom";
interface DataType
{
  user:string;
  amount:number;
  quantity:number;
  discount:number;
  status:ReactElement;
  action:ReactElement;
}
const columns:Column<DataType>[]=[{

Header:"User",
accessor:"user"
},
{

Header:"Amount",
accessor:"amount"
},
{

Header:"Discount",
accessor:"discount"
},
{

Header:"Quantity",
 accessor:"quantity"
},{

Header:"Status",
accessor:"status"

},{

Header:"Action",
accessor:"action"

},
]



const arr: DataType[]=[
  {
    user:"xyz",
    amount:12300,
    discount:40,
    quantity:234,
   status:<span className="red">Processing</span>,
 action: <Link to="/admin/transection/sajknaskd">Manage</Link>,
  },
  {
    user:"Eddie",
    amount:1200,
    discount:40,
    quantity:24,
    status: <span className="green">Shipped</span>,
 action: <Link to="/admin/transection/sajknaskd">Manage</Link>,
  },
   {
    user:"Zag",
    amount:11000,
    discount:45,
    quantity:30,
    status:<span className="purple">Delivered</span>,
   action: <Link to="/admin/transection/sajknaskd">Manage</Link>,

  },
 
]





function TRANSACTION() {
 const [data]= useState<DataType[]>(arr);

  const table= Table<DataType>(columns,data,"transection-box","transection",true)
  return (
    <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
     {/* MAIN */}
  <main>{table()}</main>


    </div>
  )
}

export default TRANSACTION
