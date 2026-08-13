"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  Download02Icon,
  File02Icon,
  FilterIcon,
} from "@hugeicons/core-free-icons";

import { cn } from "@/lib/utils";

import ProductSpecifications from "./ProductSpecifications";
import ProductDownloads from "./ProductDownloads";
import ProductDescription from "./ProductDescription";

import { useProductDetail } from "./context/ProductDetailContext";

type ProductTabKey = "description" | "specifications" | "downloads";

interface ProductTab {
  key: ProductTabKey;
  label: string;
  icon: ReactNode;
}

const tabs: ProductTab[] = [
  {
    key: "description",
    label: "توضیحات",
    icon: <HugeiconsIcon icon={File02Icon} size={20} />,
  },
  {
    key: "specifications",
    label: "مشخصات فنی",
    icon: <HugeiconsIcon icon={FilterIcon} size={20} />,
  },
  {
    key: "downloads",
    label: "دانلودها",
    icon: <HugeiconsIcon icon={Download02Icon} size={20} />,
  },
];

export default function ProductTabs() {
  const { product } = useProductDetail();

  const [activeTab, setActiveTab] = useState<ProductTabKey>("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <ProductDescription
            description={product.description}
            features={product.features}
          />
        );

      case "specifications":
        return (
          <ProductSpecifications specifications={product.specifications} />
        );

      case "downloads":
        return <ProductDownloads downloads={product.downloads} />;

      default:
        return null;
    }
  };

  return (
    <section className="ProductTabsSection rounded-2xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md">
      {/* Desktop Tabs */}
      <div className="relative hidden gap-6 border-b border-gray-200 md:flex">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "relative flex items-center gap-2 px-4 py-2 font-medium transition",
                isActive ? "text-primary" : "text-gray-2",
              )}
            >
              {tab.icon}
              {tab.label}

              {isActive && (
                <motion.span
                  layoutId="product-tab-underline"
                  className="bg-text-primary absolute bottom-0 left-0 h-0.5 w-full"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Desktop Content */}
      <div className="hidden p-4 md:block">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {renderContent()}
        </motion.div>
      </div>

      {/* Mobile Accordion */}
      <div className="flex flex-col gap-3 md:hidden">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <div key={tab.key} className="overflow-hidden rounded-xl border">
              <button
                type="button"
                onClick={() => setActiveTab(isActive ? "description" : tab.key)}
                className={cn(
                  "flex w-full items-center justify-between px-4 py-3 font-semibold transition",
                  isActive
                    ? "text-text-primary shadow-inner"
                    : "text-gray-1 bg-gray-50 hover:bg-gray-100",
                )}
              >
                <span className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>

                <HugeiconsIcon
                  icon={isActive ? ArrowUp01Icon : ArrowDown01Icon}
                  size={16}
                />
              </button>

              {isActive && <div className="p-4">{renderContent()}</div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
