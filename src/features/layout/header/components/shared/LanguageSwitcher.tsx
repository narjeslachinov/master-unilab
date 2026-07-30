"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";

import { LatitudeIcon } from "@hugeicons/core-free-icons";
export default function LanguageSwitcher() {
  const [lang, setLang] = useState("FA");

  return (
    <div className="relative">
      <button className="flex gap-2">
        <HugeiconsIcon aria-hidden size={20} icon={LatitudeIcon} />

        {lang}
      </button>

      <div className="absolute">
        <button onClick={() => setLang("FA")}>🇮🇷 فارسی</button>

        <button onClick={() => setLang("EN")}>🇬🇧 English</button>
      </div>
    </div>
  );
}
