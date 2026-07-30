// import Link from "next/link";

// import { NavLink } from "../../type/header.type";

// interface Props {
//   items?: NavLink[];
// }

// export default function DropdownMenu({ items = [] }: Props) {
//   return (
//     <div
//       className="
//       absolute
//       top-full
//       right-0
//       z-50
//       hidden
//       min-w-[220px]
//       flex-col
//       rounded-xl
//       border
//       bg-white
//       p-2
//       shadow-xl
//       group-hover:flex
//       "
//     >
//       {items.map((item) => (
//         <Link
//           key={item.id}
//           href={item.href}
//           className="
//           rounded-lg
//           px-4
//           py-2.5
//           transition
//           hover:bg-slate-100
//           "
//         >
//           {item.name}
//         </Link>
//       ))}
//     </div>
//   );
// }
