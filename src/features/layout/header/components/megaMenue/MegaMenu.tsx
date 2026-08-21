"use client";

import { useState } from "react";

import CategoryList from "./CategoryList";
import { useMegaMenu } from "../../hooks/useMegaMenu";
import { useProducts } from "@/features/products/hooks/useProducts";

export default function MegaMenu() {
  const [openMega, setOpenMega] = useState<string | null>(null);

  const { products, isLoading, error } = useProducts();

  const { sections } = useMegaMenu(products);

  if (isLoading) {
    return (
      <div className="headerMenue1 headerMenueBg1 invisible absolute top-full left-1/2 h-80 w-48 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="p-4 text-center text-sm">در حال دریافت محصولات...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="headerMenue1 headerMenueBg1 invisible absolute top-full left-1/2 h-80 w-48 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        <div className="p-4 text-center text-sm text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="headerMenue1 headerMenueBg1 invisible absolute top-full left-1/2 h-80 w-48 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
      <CategoryList
        sections={sections}
        openMega={openMega}
        setOpenMega={setOpenMega}
      />
    </div>
  );
}
