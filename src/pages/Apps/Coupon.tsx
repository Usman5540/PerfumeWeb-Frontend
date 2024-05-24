import { FormEvent, useState } from "react"
import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR"


const allsymbols="!@#$%^&*_+";
const allnumbers="1234567890";
const allcharacters ="QWERTYUIOPLKJHGFDSAZXCVNBMqwertyuioplkjhgfdsazxcvbnm";
function Coupon() {
  const[prefix,setPrefix]= useState<string>("");
  const [number,setNumber]=useState<number>(8);
  const [isnumber,setIsnumber]=useState<boolean>(false);
  const [ischaracter,setIscharacter]=useState<boolean>(false);
  const [issymbol,setIsymbol]=useState<boolean>(false);
  const[iscopied,setIscopied]=useState<boolean>(false);
  const [coupon,setCoupon]=useState<string>("");

     const copytext =async (coupon:string)=>{
      // this  is used to write something one window board area 
     await window.navigator.clipboard.writeText(coupon);
     setIscopied(true);
     }
     const sumbitHandler =(e:FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        if(!ischaracter && !isnumber && !issymbol) return alert("please checked atleast one box ")
      let entireS :string = "";
      let result: string= prefix || "";
      // here i  subtracted the prefix length beacuse that is already accupied the entered characters length
      const  looplength:number= number - result.length;
  if(isnumber) entireS += allnumbers;
   if(ischaracter) entireS += allcharacters;
    if(issymbol) entireS += allsymbols;
for (let index = 0; index < looplength; index++) {
      const element:number = Math.round(Math.random()*entireS.length);
           result+= entireS[element]  ;
           console.log(result);
}
setCoupon(result);
}

  return (
      <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
     
     {/* MAIN */}
  <main className="app-container">
    <h1>Coupon</h1> 
    <section >
    <form  className="coupon-form" onSubmit={sumbitHandler}>
      <input type="text"  placeholder="text to include " onChange={(e)=>setPrefix(e.target.value)} maxLength={number} value={prefix} />
          <input type="number" onChange={(e)=>setNumber(Number(e.target.value))} value={number}  min={8} max={25}/>
         <fieldset>
          <legend> Include </legend>
          <label>Number</label>
            <input type="checkbox" onChange={()=>setIsnumber((prev)=>!prev)} checked={isnumber}/>
          <label> Characters</label>
          <input type="checkbox" onChange={()=>setIscharacter((prev)=>!prev)} checked={ischaracter}/>
             <label>Symbols</label>
          <input type="checkbox"onChange={()=>setIsymbol((prev)=>!prev)} checked={issymbol}/>
         </fieldset>

             <button type="submit">Generate</button>
        </form>
        
          {
           
            coupon && <code> {coupon} <span onClick={()=>copytext(coupon)}>{iscopied?"copied":"copy"}</span></code>
          }
    </section>
  </main>
    </div>
  )
}

export default Coupon
