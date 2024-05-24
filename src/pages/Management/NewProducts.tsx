import { ChangeEvent, useState } from "react"
import ADMINSIDEBAR from "../../Components/ADMINSIDEBAR"

function NewProducts() {
    const[name,setName]=useState<string>("");
    const [stock,setStock]=useState<number>();
    const [price,setPrice]=useState<number>();
    // const[photo,setPhoto]=useState<string>();
    const [photo, setPhoto] = useState<string | null>(null);

    const imageHandler=(e:ChangeEvent<HTMLInputElement>) =>{
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
        
        
            <article>
<form >
    
    <h2>New Product</h2>
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
    <button type="submit">Create</button>
    </form>
    
            </article>

        </main>
      
    </div>
  )
}

export default NewProducts
