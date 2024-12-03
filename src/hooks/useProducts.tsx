import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useEffect } from "react";
import { setData, setLoading } from "../store/productsSlice";
import { getAllProducts } from "../views/Products/utils";
// creamos un hook para manejar las peticiones get products
export const useProducts = (filter: string, page: number) => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);
    const isLoading = useSelector((state: RootState) => state.products.loading);
  
    useEffect(() => {
      const fetchData = async () => {
        dispatch(setLoading(true));
        try {
          const response = await getAllProducts(page, filter);
          dispatch(setData(response));
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(setLoading(false));
        }
      };
      fetchData();
    }, [page, filter, dispatch]);
  
    return { products, isLoading };
  };
