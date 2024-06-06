import { ReactElement, useState } from "react"
import ADMINSIDEBAR from "../Components/ADMINSIDEBAR"
import Table from "../Components/Table"
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";
import img from "../assets/—Pngtree—user vector avatar_4830521.png"
import img2 from "../assets/user-307993_1280.png"

interface DataType
{
  avtar:ReactElement;
  name:string;
  gender:string;
  email:string;
  role:string;
  action:ReactElement;
}
const columns:Column<DataType>[]=[{

Header:"Avtar",
accessor:"avtar"
},
{

Header:"Name",
accessor:"name"
},
{

Header:"Gender",
accessor:"gender"
},
{

Header:"Email",
accessor:"email"
},{

Header:"Role",
accessor:"role"

},{

Header:"Action",
accessor:"action"

},
]



const arr: DataType[]=[
  {
    avtar:(
      <img src={img} alt="shoes"
      
     style={{
          borderRadius: "50%",
        }}/>

    ),
    name:"Abdullah",
    gender:"Male",
    email:"Abdullah@gmail.com",
    role:"user",
    action:(
      <button>
    <FaTrash/>
      </button>
    )

  },
  {
    avtar:(
      <img src={img2} alt="shoes" 
      
      style={{
          borderRadius: "50%",
        }}/>
    ),
    name:"XYZ",
    gender:"female",
    email:"xyz@gmail.com",
    role:"user",
    action:(
      <button>
    <FaTrash/>
      </button>
    )

  },
]
function CUSTOMER() {

   const [data]= useState<DataType[]>(arr);

  const table= Table<DataType>(columns,data,"Customer-box","Customer",true)
  return (
    <div className='adminContainer'>
     {/* SIDEBAR */}
     
     <ADMINSIDEBAR/>
     {/* MAIN */}
  <main>{table()}</main>


    </div>
  )
}

export default CUSTOMER
