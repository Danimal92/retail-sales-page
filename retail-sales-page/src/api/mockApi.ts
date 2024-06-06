import productJson from "../assets/product_data.json";
import { ProductInfo } from "../types";

const productData = JSON.parse(JSON.stringify(productJson));

export const fetchProductData = async (): Promise<{ data: ProductInfo }> => {
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve({ data: productData[0] });
      }, 1000);
   });
};
