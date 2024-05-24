import { ChangeEvent, useState } from "react"
import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR"
 const img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function ProductManagment() {
    const[name,setName]=useState<string>("Puma Shoes");
    const [stock,setStock]=useState<number>(10);
    const [price,setPrice]=useState<number>(100);
    // const[photo,setPhoto]=useState<string>();
    const [photo, setPhoto] = useState<string>(img);

    const imageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        // e.preventDefault; // this is used when form is sumbited 
         
      const file : File | undefined = e.target.files?.[0];  //  agar file hai 

       const reader :FileReader= new FileReader();

  if(file)
    {

       reader.readAsDataURL(file);
       reader.onloadend = () => {
        if(typeof reader.result === "string")
            setPhoto(reader.result);
       }     

  }
     


    }

  return (
    <div className='adminContainer'>
     {/* SIDEBAR */}
     <ADMINSIDEBAR/>
  
     {/* MAIN */}

      <main className="product-management">

        <section >
            {    stock > 0 ? ( <span className="green"> {stock} available </span>):( 
              
              <span className="red"> un available </span>            
              
            )     } 
           

           <strong>id : aljflasjf31</strong>
            <img src={photo} alt="shoes" />
            <p>{name}</p>
            <h3>${price}</h3>
                </section>
        
            <article>
<form >
    
    <h2>{name}</h2>
    <div>
     <label>Name</label>
    <input 
    type="string"
    placeholder="Name"
    required
    value={name}
    onChange={(e)=> setName(e.target.value)}
    />    



    </div>
    <div>
        <label>Stock</label>
    <input 
    type="number"
    placeholder="Stock"
    required
    value={stock}
    onChange={(e)=> setStock(Number(e.target.value))}
    
    />    
        
    </div>

    <div>
          <label>Price</label>
    <input 
    type="Number"
    placeholder="Price"
    required
    value={price}
    onChange={(e)=> setPrice(Number(e.target.value))}
    
    />    
        
    </div>
    <div>
          <label>Photo</label>
    <input 
    type="file"
    required
    onChange={imageHandler}
    
    
    />    
       
    </div>
     {
        photo && <img  src={photo} /> 
    } 
    <button type="submit">Update</button>
    </form>
    
            </article>

        </main>
      
    </div>
  )
}



export default ProductManagment
