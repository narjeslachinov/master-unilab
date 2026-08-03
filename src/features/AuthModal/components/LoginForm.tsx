"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  Mail01Icon,
  LockKeyIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";

export function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        type="email"
        placeholder="ایمیل"
        startIcon={<HugeiconsIcon aria-hidden size={20} icon={Mail01Icon} />}
      />

      <Input
        type="password"
        placeholder="رمز عبور"
        startIcon={<HugeiconsIcon aria-hidden size={20} icon={LockKeyIcon} />}
        endIcon={<HugeiconsIcon aria-hidden size={20} icon={ViewOffIcon} />}
      />

      <Button size="md" className="w-full">
        ورود
      </Button>
    </form>
  );
}
