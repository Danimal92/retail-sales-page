export interface ProductInfo {
   id: string;
   title: string;
   image: string;
   subtitle: string;
   brand: string;
   reviews: string[];
   retailer: string;
   details: string[];
   tags: string[];
   sales: SalesInfo[];
}

export interface SalesInfo {
   retailSales: number;
   wholesaleSales: number;
   unitsSold: number;
   retailerMargin: number;
   weekEnding: string;
}
