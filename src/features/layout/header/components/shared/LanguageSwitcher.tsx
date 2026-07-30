"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LatitudeIcon } from "@hugeicons/core-free-icons";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("FA");

  const languages = [
    {
      code: "FA",
      label: "🇮🇷 فارسی",
      className: "header-nav-right-link",
    },
    {
      code: "AR",
      label: "🇸🇦 العربية",
      className: "header-nav-right-link",
    },
    {
      code: "EN",
      label: "🇬🇧 English",
      className: "header-nav-left-link",
    },
  ];

  return (
    <div className="group relative">
      <button className="hover:text-primary relative flex items-center gap-2 transition">
        <HugeiconsIcon aria-hidden size={18} icon={LatitudeIcon} />

        <span>{lang}</span>
      </button>

      <div className="headerMenue1 headerMenueBg1 header-lang customeSmallText invisible top-full mt-2 flex flex-col opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => setLang(language.code)}
            className={`headerMenueItem ${language.className}`}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
}
