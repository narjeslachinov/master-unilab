"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { HugeiconsIcon } from "@hugeicons/react";

import {
  UserIcon,
  Mail01Icon,
  LockKeyIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";

export function RegisterForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input
        placeholder="نام کامل"
        startIcon={<HugeiconsIcon aria-hidden size={20} icon={UserIcon} />}
      />

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

      <Button className="w-full">ثبت نام</Button>
    </form>
  );
}
