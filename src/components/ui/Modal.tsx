"use client";

import { cn } from "@/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";

import { Cancel01Icon } from "@hugeicons/core-free-icons";
interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ open, onClose, children, className }: ModalProps) {
  if (!open) return null;

  return (
    <div className="Overlay z-modal fixed inset-0 flex items-center justify-center">
      <div
        className={cn(
          `animate-fade-in glassBg1 relative flex w-5/6 max-w-md flex-col gap-5 rounded-2xl p-6 shadow-xl`,
          className,
        )}
      >
        <button
          onClick={onClose}
          className="text-primary hover:text-secondary absolute top-3 left-3 transition delay-100 duration-200 ease-in-out hover:scale-125"
        >
          <HugeiconsIcon aria-hidden size={24} icon={Cancel01Icon} />
        </button>

        {children}
      </div>
    </div>
  );
}
