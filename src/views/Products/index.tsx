import { useEffect, useRef, useState } from "react";
import { Product } from "../../components/Product";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import Loading from "../../components/Loading";
import { Filter } from "../../components/Filter";
import {
  DndContext,
  DragEndEvent,
} from '@dnd-kit/core';
import CartComponent from "../../components/CartComponent";
import { setNewProductCart } from "../../store/cartSlice";
import { toast } from "react-toastify";
import { useProducts } from "../../hooks/useProducts";
import { updateProductsList } from "../../store/productsSlice";



export const ProductsView = () => {
  const dispatch: AppDispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null); //referencia para capturar el scroll
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('computers');

  const { products, isLoading } = useProducts(filter, page);
  const handleDragEnd = (event: DragEndEvent) => { //captura de drag event
    const { over, active } = event;

    if (over?.id === 'cart') {
      const draggedProduct = products.find((p) => p.id === active.id);
      if (draggedProduct) {
        
        dispatch(setNewProductCart({ productId: active.id.toString(), quantity: 1 }));
        dispatch(updateProductsList(active.id.toString()));
        toast.success('Producto agregado');
        
      }
    }
  };
  const handleScroll = () => { //manejador de evento scroll
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
        console.log('more items');
        setPage(currentPage => currentPage + 1)
      }
    }
  };
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isLoading]);

  return (
    <div className="bg-white mt-20" >
      <Filter filter={filter} updateFilter={setFilter} />

      <DndContext onDragEnd={handleDragEnd}>
      <div  ref={containerRef} className="h-96 overflow-auto mt-20 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">

        {isLoading ? (
          <Loading>Loading Data</Loading>
        ) : (
          <>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
             Products List
            </h2>
            <CartComponent />

            <div  className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

              {products.map((product) => (
                <Product key={product.uuid} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
      </DndContext>
    </div>
  );
};

