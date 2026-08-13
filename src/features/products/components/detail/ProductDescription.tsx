import { HugeiconsIcon } from "@hugeicons/react";

import { CheckmarkCircle03Icon } from "@hugeicons/core-free-icons";
import type { Feature } from "@/types/product-detail.types";

interface ProductDescriptionProps {
  description: string;
  features: Feature[];
}

export default function ProductDescription({
  description,
  features,
}: ProductDescriptionProps) {
  return (
    <div className="text-dark space-y-6">
      <p className="text-gray-3 text-justify leading-8">{description}</p>

      {features.length > 0 && (
        <div>
          <h3 className="heading5 mb-4 font-semibold">ویژگی‌ها و مزایا</h3>

          <ul className="space-y-4">
            {features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <HugeiconsIcon
                  icon={CheckmarkCircle03Icon}
                  className="text-primary mt-1 h-5 w-5 shrink-0"
                />

                <div>
                  <p className="font-semibold">{feature.title}</p>

                  {feature.description && (
                    <p className="text-gray-3 customeSmallText mt-1 leading-7">
                      {feature.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
