import { ProductProps } from "./types";
import { useDraggable } from "@dnd-kit/core";

export const Product = ({ product }: ProductProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: product.id, //id que identifica mi elemento draggable
  });
  const style = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    padding: '10px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    cursor: 'grab',
  };// styles que sirven para visualizar el elemento al arrastrarlo 


  return (
    // en el contenedor agregamos la referencia 
    <div className="group relative" ref={setNodeRef} {...listeners} {...attributes} style={style}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md  lg:aspect-none group-hover:opacity-55 lg:h-80">
        <img
          alt={product.name}
          src={product.image}
          className="h-full w-full object-contain object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>

    </div>
  );
};
