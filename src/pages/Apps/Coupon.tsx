import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR"

function Coupon() {
  return (
      <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
     
     {/* MAIN */}
  <main className="couponMain">
    <h1>Coupon</h1> 
    <section className="coupon">
    
          <input type="text"  placeholder="text to include " />
          <input type="number" />
         <fieldset>
          <legend> Include </legend>
          <label>Number</label>
          <input type="checkbox"/>
          <label> Characters</label>
          <input type="checkbox" />
             <label>Symbols</label>
          <input type="checkbox" />
         </fieldset>

     
         <button>Generate</button>
       
      
    </section>
  </main>
    </div>
  )
}

export default Coupon
