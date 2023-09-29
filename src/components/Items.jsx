import Item from "./Item";
import { useState , useEffect} from "react";


function Items() {

const [items, setitems] = useState([]);

useEffect(()=>{
  fetch('products.json')
  .then((Response)=> Response.json())
  .then((data)=>{
    setitems(data);
  })
  .catch(error=>{
    console.error("Error fetching data:"+error)
  })
}, [])
  return (
    <div className="container mx-auto pb-24">

      <h1 className="text-2xl font-bold my-8">Products</h1>

      <div className="grid grid-cols-5 my-8 gap-x-16 gap-y-24">

        {      
          items.map((item)=> <Item key={item._id} item={item}/>)
        }

      </div>

    </div>
  )
}

export default Items

