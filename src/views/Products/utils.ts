import axios from "../../config/axiosConfig";
import { Products } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const getAllProducts = async (page: number, filter: string): Promise<Products[]> => {
   const response = await axios.get<any[any]>(`?keyword=${filter}&page=${page}&sortBy=best_match`);
   const data = (response.data.item.props.pageProps.initialData.searchResult.itemStacks[0].items) || [];
   const items = data.map((item: any) => ({...item, uuid: uuidv4()}))
   return items;
}



