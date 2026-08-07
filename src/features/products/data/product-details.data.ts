import type { ProductDetail } from "../types/product-detail.types";


import glass from "../assets/glass2.webp";
import banner2 from "../assets/banner1.webp";


export const productDetails: ProductDetail[] = [

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


 description:
 "پتری دیش 90 میلی‌متر مناسب کشت سلولی...",


 features:[
 {
  title:"کیفیت ساخت بالا",
  description:"ساخته شده از شیشه با کیفیت"
 }
 ],


 specifications:[
 {
  label:"قطر",
  value:"90mm"
 }
 ],


 downloads:[
 {
  id:1,
  name:"کاتالوگ محصول",
  url:"/files/catalog.pdf",
  type:"pdf"
 }
 ],


 reviews:[
 {
 id:1,
 name:"علی رضایی",
 rating:5,
 comment:"کیفیت محصول عالی بود.",
 date:"1403/07/12"
 }
 ]

}

];