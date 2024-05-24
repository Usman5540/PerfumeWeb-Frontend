import { useState } from "react";
import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR";
import { Link } from "react-router-dom";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";
 type OrderItemType={
photo:string,
name:string,
price:number,
quantity:number,
_id:string,
}
 type OrderType = {

            name:string,
            address:string,
            state:string ,
            country:string,
            pinCode:number,
            subtotal:number,
            ship_charges:number,
            tax:number,
            discount:number,
            total:number,
            // status:"shipped" | "delivered " | "processing",
            status:string,
            city:string,


}
// orderItmems vairable is OrderItemType[]  arrray 
const orderItems:OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];


  

function TransectionManagement() {
  // we need to mention everything in typescript what kind of thing we are using 
  // here like here usestate Is orderType which we have defined above 
const [order, setOrder] = useState<OrderType>({
    name: "XYZ",
    address: "77 Black Street",
    city: "Okara",
    state: "Punjab",
    country: "Pakistan",
    pinCode: 2434341,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    ship_charges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    // orderItems,
    // _id: "asdnasjdhbn",
  });
// here we destructured from usestate  we can only use if destructured 

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subtotal,
    ship_charges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,// here we spread all of the prev of order state to set with below changes again --> setOrder
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
   <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
     {/* MAIN */}
  <main className="product-management">
    <section
    style={{padding :"2rem"}}>

    <h2>Order Items</h2>

          {orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
      
      </section>

 <article className="shipping-info-card">
<h1>Order Info</h1>
<h5>User Info</h5>
 <p>Name:   {name}</p>
<p>adress : {` ${address}, ${city} `}</p>
 <p>{` ${state} , ${country}, ${pinCode} `}</p>
 <p></p>
 <h5>Amount Info</h5>
 <p>subtotal: {subtotal}</p>
   <p>ship_charges: {ship_charges}</p>
 <p>tax: {tax}</p>
  <p>discount: {discount}</p>
   <p>total: {total}</p>
   
<h5>Status Info</h5>
{/* <p className={ status===" Shipped" ? "green" : status==="Delivered" ? "purple":"red"}>{status}</p> */}

<span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
                       {status}
            </span>
<button onClick={updateHandler}>Process  Status</button>

</article>
  </main>


    </div>
  )
}

const ProductCard=({name,photo,price,quantity,_id}:OrderItemType)=>{
return (
  <div className="transection-card">
    <img src={photo} alt={name} />
    {/* by clicking name product should be open  */}
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} X {quantity} = ${price*quantity}</span>
  </div>
)
}
export default TransectionManagement
