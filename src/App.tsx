import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// we  need to take care about the heirarchi of the importing that creating issues what i saw with red line 
import { lazy,Suspense } from "react";
import Bar from "./pages/Charts/Bar";
import  Piechart from "./pages/Charts/Pie";
import  LineChart from "./pages/Charts/Line";
import Coupon from "./pages/Apps/Coupon";


const  DASHBOARD= lazy(() => import("./pages/DASHBOARD"));
// i were using import instead of const so, that were making trouble for me 
// what lazy does?  it loads only the page on v8 engine which is being target it prevent to load all pages 
// this is called code splitting in this way  we will send data in chunks  otherwise react will loads all files on enginge which is not an optimized aproach 
const TRANSACTION = lazy(() => import("./pages/TRANSACTION"));
const CUSTOMER = lazy(() => import("./pages/CUSTOMER"));
const PRODUCTS= lazy (()=> import("./pages/PRODUCTS"))
const NewProducts= lazy (()=> import("./pages/Management/NewProducts"));
const ProductManagement= lazy (()=> import("./pages/Management/ProductManagment"));
const TransectionManagement= lazy (()=> import("./pages/Management/TransectionManagement"));


function App() {
  return (
    <div>
    <Router>
      {/* header */}
     <Suspense fallback={ <div> loadind...</div>}>
 <Routes >
        <Route path="/admin/dashboard" element={<DASHBOARD/>} />
        <Route path="/admin/transaction" element={<TRANSACTION/>} />
        <Route path="/admin/customer" element={<CUSTOMER/>} />
        <Route path="/admin/products" element={<PRODUCTS/>} />
        {/* Charts */}
        <Route path="/admin/barChart"  element={<Bar/>} />
          <Route path="/admin/PieChart"  element={<Piechart/>} />
        <Route path="/admin/LineChart"  element={<LineChart/>} />
        {/* apps */}
        <Route path="/admin/app/coupon" element={<Coupon/>}  />
        {/*  Managmement  */}
        
        <Route path="/admin/product/new"  element={<NewProducts/>}/> 
         <Route path="/admin/product/:id"  element={<ProductManagement/>}/> 
          <Route path="/admin/transection/:id"  element={<TransectionManagement/>}/> 

      </Routes>
     </Suspense>
    </Router>
    </div>
  )
}

export default App
