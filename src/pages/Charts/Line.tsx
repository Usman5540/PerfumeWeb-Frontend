import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR"
import { LineChaarts } from "../../Components/Chart"
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function Line() {
  return (
      <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
     {/* MAIN */}
    <main className="chart-container">
             <h1>Line Charts</h1>
             <section>
               <LineChaarts
            data={[
              200, 444, 444, 556, 778, 455, 990, 1444, 256, 447, 1000, 1200,
            ]}
            label="Users"
            borderColor="rgb(53, 162, 255)"
            backgroundColor="rgba(53, 162, 255,0.5)"
          labels={months}
          /> 
        <h2>Active users</h2>
             </section>
             <section>

              <LineChaarts
            data={[
              14,200,50,34,13,41,23
            ]}
            label="Products"
            borderColor="rgb(139, 48, 48)"
            backgroundColor="rgba(139, 48, 48,0.5)"
          labels={months}
          /> 
            <h2> Totoal Products (SKU) </h2>
             </section>
             <section>
            <LineChaarts
            data={[
              200,3400,40000,1000,34211,342,1345,13412,12342,123412,123
            ]}
            label="Products"
            borderColor="rgb(144,238,144)"
            backgroundColor="rgba(144,238,144,0.5)"
          labels={months}
          /> 
          <h2>Total Revenue</h2>

             </section>
         
     <section>

        <LineChaarts
            data={[
            200,3400,4000,1000,3421,342,134,1341,1234,1234,123
            ]}
            label="Products"
            borderColor="rgb(218, 160, 109)"
            backgroundColor="rgba(218, 160, 109,0.5)"
          labels={months}
          /> 
          <h2>Discount Alloted </h2>
     </section>
    </main>
    </div>
  )
}

export default Line
