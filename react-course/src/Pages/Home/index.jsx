import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
   
      if (context.filteredItems?.length > 0) {
        return (
            context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
        )
      } else {
        return (
          <div className="text-center font-light text-lg">
            We don´t have anything ☹️
          </div>
        )
      }
  
  }

  return (
    <Layout>
      <div className="flex  relative justify-center items-center w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        className="rounded-lg border border-green-500 w-80 p-4  mb-9 focus: outline-none m-5 "
        type="text"
        placeholder="Search a Product"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg mb-3">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
