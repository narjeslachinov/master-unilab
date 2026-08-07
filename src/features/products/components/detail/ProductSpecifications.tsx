import type { Specification } from "../../types/product-detail.types";

interface ProductSpecificationsProps {
  specifications: Specification[];
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  if (specifications.length === 0) {
    return (
      <p className="text-gray-3">مشخصات فنی برای این محصول ثبت نشده است.</p>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="divide-y divide-gray-200">
        {specifications.map((specification) => (
          <div
            key={specification.label}
            className="grid grid-cols-1 sm:grid-cols-2"
          >
            <div className="bg-gray-50 px-4 py-3 font-semibold">
              {specification.label}
            </div>

            <div className="text-gray-3 px-4 py-3">{specification.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
