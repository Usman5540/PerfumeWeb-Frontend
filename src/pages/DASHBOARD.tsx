  import { FaRegBell, FaSearch } from "react-icons/fa"
import ADMINSIDEBAR from "../Components/ADMINSIDEBAR"
import userimg from '../assets/icon.png'
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import something from "../assets/data.json";
import { BarChart, DoughnutChart } from "../Components/Chart";
import {  BiMaleFemale } from "react-icons/bi";
import Table from "../Components/DashboardTable";

function DASHBOARD() {
  
   return (
    <div className='adminContainer'>
     {/* SIDEBAR */}
     {/* all of the stuff which is in adminsidebar will open  */}
     <ADMINSIDEBAR/>
     {/* MAIN */}
    <main className="dashboard"> 
     <div className="bar">
        <FaSearch  className="same"/>
        <input type="text" placeholder="Search here" />
    <FaRegBell className="same"/>
     <img src={userimg} alt="" />
                 
     </div>
 <section className="widget-container">
          <WidgetItem
            percent={40}
            amount={true}
            // here we did it true  and for all other components that sets default false 
            value={340000}
            heading="Revenue"
            color="rgb(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0 198 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(255 196 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(76 0 255)"
          />
        </section>
  <section className="graph-area">
   <div className="reveniue-container">
    <h2>Reveniue and Transection</h2>

    <BarChart 
    
    data_1={[20,33,24,42,24,53,63,56,76]}
    data_2={[23,42,43,5,76,76,43,35,25]}
    bgColor_1="rgb(0,125,255)"
    bgColor_2="rgb(0,110,200)"
    title_1="Revenue "
    title_2="Transection"
    
    />
   </div>
    <div className="inventory-container">
      <h2>Inventory</h2>
      {/* way to write js in react which is {} */}
      {something.categories.map((i)=> (
          
 <Inventory heading={i.heading} key={i.heading} color={`hsl(${i.value}, ${i.value}%, 50%)`}
 value={i.value}/>

      ))} 
    </div>
  </section>

  <section className="LastSection">
    
    <div className="doughnutContainer">
   
       <h2>Gender Ratio</h2>

            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
              {/* <p> */}
              <BiMaleFemale className="p" />
            {/* </p> */}
    </div>


      <Table  data={something.transaction} />
     
  
  </section>
    </main>
    </div>
  )
}
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
  // TypeScript, amount?: boolean is a way to define a variable amount as being optional, meaning it can either have a boolean value or be undefined
}

const WidgetItem = ({
  heading,
  value,
  color,
  percent,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4> 
      {/* amount mean which is revanue  */}
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp  className="widget-info"/> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
    <div className="widgetCircle"
    style={{
      // to prevent from - we used abs
 background: ` conic-gradient(${color} ${( Math.abs(percent) /100)*360}deg,  rgb(255, 255, 255) 0)`  
 }}
    >
        <span color={color}>{percent}% </span>

    </div>
</article>
);
  interface inventoryProps {
    value:number;
    heading:string;
    color:string;
  }

  const Inventory = ({value,heading,color}:inventoryProps)=>(
    
    <div className="category">

     <h5>{heading}</h5>
     <div className="outer-inventory">
    {/* this above for background color  in outer-inventory  */}
      <div className="internal-inventory"
      style={{
          backgroundColor: color,
          width: `${value}%`,
          //  now i got the point because this is inner-container and providing streak according to percentage
        }}
      >
      

      </div>
     </div>
   <span>{value}%</span>
    </div>
    

  );
export default DASHBOARD
