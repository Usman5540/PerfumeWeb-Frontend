import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR";
import { DoughnutChart, PieChart } from "../../Components/Chart";

function Pie() {
  return (
    <div className="adminContainer">
      {/* SIDEBAR */}
      <ADMINSIDEBAR />

      {/* MAIN */}
      <main className="chart-container">
        <h1> Pie & Dougnut Charts </h1>
        <section>
          <div>
            <PieChart
              data={[10, 45, 15]}
              backgroundColor={[
                `hsl(110, 80%, 80%)`,
                `hsl(110, 80%, 50%)`,
                `hsl(110, 40%, 50%)`,
              ]}
              offset={[0, 0, 75]}
            />
          </div>
            <h2>Order fullfilment Ratio</h2>
          </section>
          <section>
            <div>

            <DoughnutChart
            labels={["shoes","books","perfumes","Miswaak"]}
            data={[12,34,43,23]}
           backgroundColor={[
             `hsl(120, 100%, 25%)`,   // Green
             `hsl(35, 100%, 50%)`,   // Yellow
    `hsl(330, 100%, 50%)`,  // Pink
    `hsl(240, 100%, 50%)`,  // Blue
]}
   legends={false}
              cutout={90}
              offset={[0,0,0,75]}
            />
          </div>
                  <h2>Product Categories Ratio</h2>

          </section>
          <section><div>
            
             <DoughnutChart
            labels={["in Stock ","Out of stock"]}
            data={[12,34]}
           backgroundColor={[
             `hsl(120, 100%, 25%)`,   // Green
             `hsl(35, 100%, 50%)`,   ]}
              legends={false}
              cutout={90}
              offset={[0,75]}
            />
            
            </div>
            <h2>Stock Availability</h2>
            </section>
            <section><div>
             <DoughnutChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              data={[32, 18, 5, 20, 25]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              legends={false}
              offset={[20, 30, 20, 30, 80]}
            />
              
              </div></section>
          <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              data={[30, 250, 70]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              offset={[0, 0, 75]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>

      </main>
    </div>
  );
}

export default Pie;
