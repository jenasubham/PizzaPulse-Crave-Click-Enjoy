import Item from "./Item";
import products from "../../products"; // Import the products data

function Items() {
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-2xl font-bold my-8">Products</h1>
      <div className="grid grid-cols-5 my-8 gap-x-16 gap-y-24">
        {
          products.map((item) => <Item key={item._id} item={item} />)
        }
      </div>
    </div>
  );
}

export default Items;
