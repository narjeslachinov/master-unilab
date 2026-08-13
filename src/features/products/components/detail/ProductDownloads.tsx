import { HugeiconsIcon } from "@hugeicons/react";

import { File02Icon, Notebook01Icon } from "@hugeicons/core-free-icons";
import type { Download } from "@/types/product-detail.types";

interface ProductDownloadsProps {
  downloads: Download[];
}

function getDownloadIcon(type: Download["type"]) {
  if (type === "pdf") {
    return <HugeiconsIcon icon={File02Icon} size={20} />;
  }

  return <HugeiconsIcon icon={Notebook01Icon} size={20} />;
}

export default function ProductDownloads({ downloads }: ProductDownloadsProps) {
  if (downloads.length === 0) {
    return (
      <p className="text-gray-3">فایلی برای دانلود این محصول وجود ندارد.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {downloads.map((file) => (
        <a
          key={file.id}
          href={file.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:bg-gray-50"
        >
          <span className="shrink-0">{getDownloadIcon(file.type)}</span>

          <span className="font-medium">{file.name}</span>
        </a>
      ))}
    </div>
  );
}
