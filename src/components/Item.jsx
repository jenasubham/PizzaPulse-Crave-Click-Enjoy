/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../CartContext";


function Item(props) {
  const [isAdding, setisAdding] = useState(false);
  const {cart, setCart} = useContext(CartContext);
  const {item} = props;


  function addToCart(event,item){
    let _cart = {...cart};
    if(!_cart.items){
        _cart.items = {}
    }

    if(_cart.items[item._id]){
      _cart.items[item._id] = _cart.items[item._id] +1;

    }
    else{
      _cart.items[item._id] = 1;
    }

    if(!_cart.totalItems){
      _cart.totalItems = 0;
    }
    _cart.totalItems +=1;

    setCart(_cart);

    setisAdding(true);
    setTimeout(() => {
      setisAdding(false);
    }, 1000);
    
    // -------basic structure how data will be stored in the localstorage---------
    // const cart ={
    //   items:{
    //     '608c27f3e165f6137f02b549':2,
    //     '608c2904e165f6137f02b551':3
    //   },
    //   totalItems: 5
    // }


  }
  return (

      <div>
          <img src="/images/peproni.png" alt="pizza" />

          <div className="text-center">
            <h2 className="text-lg font-bold py-2">{item.name}</h2>
            <span className="bg-gray-200 py-1 px-3 text-sm rounded-full font-medium">{item.size}</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">₹{item.price}</span>
            <button disabled={isAdding} onClick={(e)=>{addToCart(e,item)}} className={`${ isAdding ? 'bg-green-500' :' bg-yellow-500'} py-1 px-3 
            rounded-full font-bold`}>ADD{isAdding ? 'ED': ''}</button>
          </div>

      </div>
  );
}

export default Item;
