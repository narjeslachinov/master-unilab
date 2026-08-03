"use client";

import { useState } from "react";

import { LoginForm } from "./LoginForm";

import { RegisterForm } from "./RegisterForm";

import { AuthSwitcher } from "./AuthSwitcher";
import { Modal } from "@/components/ui/Modal";

interface Props {
  isOpen: boolean;

  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: Props) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Modal open={isOpen} onClose={onClose}>
      <h2 className="heading5 text-secondary text-center font-bold">
        {isLogin ? "ورود به حساب" : "ثبت‌نام در یونی‌لب"}
      </h2>

      {isLogin ? <LoginForm /> : <RegisterForm />}

      <AuthSwitcher isLogin={isLogin} onChange={() => setIsLogin(!isLogin)} />
    </Modal>
  );
}
