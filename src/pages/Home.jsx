import { Link } from "react-router-dom";
import Items from "../components/Items";

function Home() {
  return (
    <>
    <div className="hero py-16">
      <div className="container mx-auto flex justify-between">

        <div className="w-1/2 flex flex-col items-start justify-center ml-14">
          <h6 className="text-lg font-medium"><em>Are you hungry?</em></h6>
          <h1 className="text-3xl md:text-5xl font-bold"> Do not Wait !</h1>
          
          <button className="px-6 py-2 rounded-full text-white font-bold mt-6 bg-yellow-500
           hover:bg-yellow-600"> <Link to="/products"> Order Now</Link></button>
        </div>

        <div className="w-1/2">
          <img  className="w-4/5" src="/images/pizza.png" alt="pizza" />
        </div>
      </div>
    </div>


    {/* ________________________Products Section___________________ */}
    <Items/>


    </>
  );
}

export default Home