import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR"
import { BarChart } from "../../Components/Chart"


 function Bar() {
  return (
     <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
     
     {/* MAIN */}
   <main className="chart-container"> 
      <h1>BarCharts</h1>
    <section>
     <BarChart 
    
    data_1={[20,33,24,42,24,53,63,56]}
    data_2={[23,42,43,5,76,76,43,35]}
    bgColor_1="rgb(0,125,255)"
    bgColor_2="rgb (255, 182, 193)"
    title_1="Products"
    title_2="Customers"
       
    />
     
    <h2>Top Selling Products and Top Selling Customers</h2>
    </section>
     
   <section>
    <BarChart
    
    horizontal={true}
    data_1={[20,33,24,42,24,53,63,56]}
    data_2={[]}
     bgColor_1="rgb(0,125,255)"
     bgColor_2=""
     title_1="Orders"
     title_2=""
    />
    
    <h2>Order Througout the Year</h2>
    
    
   </section>
    


   </main>
    </div>
  )
}

export default Bar
