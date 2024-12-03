import axios, { AxiosInstance as AxiosType } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;



// implementacion de patron singleton para generar una unica instancia de axios

class AxiosInstance {
  // Declaramos la propiedad estática para que TypeScript la reconozca
  private static instance: AxiosInstance | null = null;

  private axiosInstance: AxiosType;

  private constructor() {
    // Configuración de Axios
    this.axiosInstance = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': API_KEY
      },
    });
  }

  // Método para obtener la instancia
  public static getInstance(): AxiosType {
    if (!AxiosInstance.instance) {
      AxiosInstance.instance = new AxiosInstance();
    }
    return AxiosInstance.instance.axiosInstance;
  }
}

// Exportamos la instancia única
export default AxiosInstance.getInstance();
