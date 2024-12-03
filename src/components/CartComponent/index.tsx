import { useDroppable } from "@dnd-kit/core";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CartComponent = () => {
 // Componente Carrito Droppable
    const { setNodeRef } = useDroppable({
      id: 'cart',
    });
  
    const { products } = useSelector((state: RootState) => state.cart.data);

  
    return (
        <div className="w-full flex justify-center mt-3" ref={setNodeRef} >
          <div className="border border-spacing-7  p-3 border-orange-200">
        <div className="flex justify-center ">
        ({products.length})<ShoppingCartIcon aria-hidden="true" className="h-8 w-8" />

        </div>

          <p>Arrastra productos aquí</p>
          </div>
      </div>
    );
  };

export default CartComponent;