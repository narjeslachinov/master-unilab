// "use client";

// import {
// X
// } from "lucide-react";

// interface Props{

// open:boolean;
// close:()=>void;

// }

// export default function MobileMenu({
// open,
// close
// }:Props){

// return(

// <div
// className={`
// fixed
// inset-0
// z-50
// bg-black/40

// transition

// ${open?
// "visible opacity-100":
// "invisible opacity-0"
// }

// `}
// >

// <div
// className={`
// absolute
// right-0
// top-0
// h-full
// w-80
// bg-white
// p-5

// transition-transform

// ${open?
// "translate-x-0":
// "translate-x-full"
// }

// `}
// >

// <button
// onClick={close}
// >

// <X/>

// </button>

// <nav className="mt-8 flex flex-col gap-5">

// <a>
// دسته بندی
// </a>

// <a>
// محصولات
// </a>

// <a>
// خدمات
// </a>

// </nav>

// </div>

// </div>

// )

// }
