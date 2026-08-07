import type { Product } from "../types/product.types";

import glass from "../assets/glass2.webp";
import banner2 from "../assets/banner1.webp";


export const products: Product[] = [

{
 id:1,

 name:"پتری دیش 90mm",

 price:120000,

 volume:"90mm",

 brand:"Pyrex",

 images:[glass,banner2],

 category:"ظروف شیشه‌ای",

 available:true,

 rating:4.5,

 reviewCount:24,
},


{
 id:2,

 name:"پیپت مدرج 10ml",

 price:80000,

 volume:"10ml",

 brand:"BrandTech",

 images:[banner2],

 category:"ابزار اندازه‌گیری",

 available:false,

 rating:4,

 reviewCount:10,
},

];