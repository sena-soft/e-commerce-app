import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useDispatch } from "react-redux";
import { setCart } from "../../store/cartSlice";

export const Cart = () => {
  const dispatch: AppDispatch = useDispatch();

  const { products } = useSelector(
    (state: RootState) => state.cart.data
  );

  console.log(products);

  const onSubmit = () => {
    dispatch(
      setCart({
        id: 0,
        userId: 0,
        date: "",
        products: [],
      })
    );
  };
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8">
          Shopping Cart
        </h1>
      </div>
     
      <div className="h-96 overflow-auto py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
        <div className="">
          <h3 className="sr-only">List of products</h3>

          <div className="space-y-6">
         
          </div>
        </div>
      </div>
      <div className="mt-4 lg:row-span-3 lg:mt-0">
        <h2 className="text-3xl mb-5 text-gray-500">Order Summary</h2>

        <div className="flex justify-between font-medium text-2xl text-gray-900">
          <p>Subtotal</p>
          <p>$</p>
        </div>

        <form className="mt-10" onSubmit={onSubmit}>
          <button
            type="submit"
            disabled={!products.length}
            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};
