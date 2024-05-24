import { IconType } from "react-icons"
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from "react-icons/fa";
import {  RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri"
import { Link , useLocation,Location} from "react-router-dom"


function ADMINSIDEBAR() {
    const location =useLocation();

  return (
    <div className="sidebar" >
       <h2>logo.</h2>
        <DivOne location={location} />
        <DivTwo location={location} />
        <DivThree location={location} />
    </div>
  )
}

const DivOne= ({location}:{location :Location})=>(
<div>
        <h5>DASHBOARD</h5>
        <ul>
         <Li 
         url="/admin/dashboard"
         text="Dashboard"
         Icon={RiDashboardFill}
         location={location}
         />
          
           <Li 
         url="/admin/products"
         text="Products"
         Icon={RiShoppingBag3Fill}
         location={location}
         />
           
           <Li 
    
         url="/admin/customer"
         text="Customer"
         Icon={RiShoppingBag3Fill}
         location={location}
         />
           
        <Li 
          
         url="/admin/transaction"
         text="transaction"
         Icon={RiShoppingBag3Fill}
         location={location}
         />  
        </ul>

       </div>

);

const DivTwo =({location}:{location:Location})=>(
  <div>
        <h5>Charts</h5>
        <ul>
         <Li 
         url="/admin/barChart"
         text="BarCharts"
         Icon={FaChartBar}
         location={location}
         />
          

<Li  url="/admin/pieChart"
         text="PieChart"
         Icon={FaChartPie}
         location={location}
         />

           <Li 
         url="/admin/lineChart"
         //it will directed towords the path so in routing we will use this  url name 
         text="LineChart"
         Icon={FaChartLine}
         location={location}
         />
           
           
           
        </ul>

       </div>
);
const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        text="Coupon"
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        url="/admin/app/toss"
        text="Toss"
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>
);

// here we are  in interfaces like oop languages we only  has signature not implementation we implement in classes 
interface LiProps {
  url:string,
  text:string,
  location:Location,
   Icon:IconType,

}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
    // which component on this url in routing will show ok 
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
); 
export default ADMINSIDEBAR
