import { ReactElement, useState } from "react";
import ADMINSIDEBAR from "../Components/ADMINSIDEBAR"
import Table from "../Components/Table"
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
interface DataType{
  photo:ReactElement;
  name:string;
  stock:number,
  price:number,
  action:ReactElement,
}
  const columns:Column<DataType>[]=[
     {
      Header:"Photo",
        accessor:"photo",

  },
   {
      Header:"Name",
        accessor:"name",
   },
   {
      Header:"Stock",
        accessor:"stock",

  },  {
      Header:"Price",
        accessor:"price",

  },   {
      Header:"Action",
        accessor:"action",

  
  }
  ];
  const img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
const arr:DataType[]=[
    {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
     {
    photo: <img src={img2} alt="Shoes" />,
    name: "Mackbook",
    price: 200000,
    stock: 3,
    action: <Link to="/admin/product/mackbook">Manage</Link>,
  }, {
    photo: <img src={img} alt="Shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2024",
   price : 634,
    stock: 3,
    action: <Link to="/admin/product/sajknaskd">Manage</Link>,
  },
   
];// empty array of type DataType because we will pass the data according to DataType
function PRODUCTS() {
  const [data]= useState<DataType[]>(arr);
  // not getting the point
  const table= Table<DataType>(columns,data,
      "Products-box",
      "Products",true)
  return (
   <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
  
     {/* MAIN */}

      <main>{table()}</main>
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  )
}

export default PRODUCTS