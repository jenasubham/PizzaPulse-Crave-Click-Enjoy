import { useContext, useEffect, useState } from "react";
import { CartContext } from "../CartContext";

function Cart() {
  let total = 0;
  const [items, setitems] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  const [priceFetched, togglePriceFetched] = useState(false);

  useEffect(() => {

    if (!cart.items) {
      return;
    }

    if(priceFetched){
      return;
    }

    fetch('/products.json')
    .then(res=> res.json())
    .then(data => {
      let cart_items = data.filter((item) => Object.keys(cart.items).includes(item._id))
      setitems(cart_items);

      togglePriceFetched(true);
      })  
    
  },[cart, priceFetched]);

  function getQty(itemId){
    return cart.items[itemId];

  }

  function increment(itemId){
    const existingQty = cart.items[itemId];
    const _cart = {...cart};
    _cart.items[itemId] = existingQty +1;
    _cart.totalItems +=1;
    setCart(_cart);

  }
  function decrement(itemId){
    const existingQty = cart.items[itemId];
    if(existingQty > 1){
      const _cart = {...cart};
    _cart.items[itemId] = existingQty- 1 ;
    _cart.totalItems -= 1;
    setCart(_cart)
    } 
  }

  function getSum(itemId, price){
    const sum = price* getQty(itemId);
    total +=sum;
    return sum;
  }

  function handleDelete(itemId){
    const _cart = {...cart};
    const qty = _cart.items[itemId];
    delete _cart.items[itemId];

    _cart.totalItems -= qty;
    setCart(_cart);
    const updatedItemsList = items.filter((product)=> product._id !== itemId);
    setitems(updatedItemsList)
  }

  function handleOrderNow(){
    alert('Order Placed Successful!')
    setitems([]);
    setCart({});
  }

return (

  // if there is nothing in the cart show the empty picture
  !items.length ?  
  <img className="mx-auto w-1/3 mt-10" src="/images/empty-cart.png" alt="Cart is Empty"/>
  
  //  Else show the cart Items
    :
      <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="my-12 font-bold text-xl">Cart Items</h1>

      <ul>
        {
          
        items.map((item) => {
          return (
            <li className="mb-2" key={item._id}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="h-16" src="/images/peproni.png" alt="" />
                  <span className="font-bold ml-4 w-48">{item.name}</span>
                </div>

                <div>
                  <button onClick={()=>{decrement(item._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>

                  <b className="px-4">{getQty(item._id)}</b>

                  <button onClick={()=>{increment(item._id)}} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button>
                </div>

                <span className="font-medium">₹ {getSum(item._id, item.price)}</span>
                <button onClick={()=>{handleDelete(item._id)}} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button>
              </div>
            </li>
          );
        })

        }

      </ul>

      <hr className="my-8" />

      <div className="text-right mb-6">
        <b>Grand Total:</b> <span className="font-medium text-lg">₹{total}</span>
      </div>
      <div className="text-right">
        <button onClick={handleOrderNow} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">Order Now</button>
      </div>
    </div>
        
      
  );
}

export default Cart;