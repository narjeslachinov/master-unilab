"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LatitudeIcon } from "@hugeicons/core-free-icons";
import { languages } from "../../data/header.data";
import { language } from "../../type/header.type";

export default function LanguageSwitcher(props: language) {
  const [lang, setLang] = useState("FA");

  return (
    <div className="group relative">
      <button className="relative flex items-center gap-1 transition">
        <HugeiconsIcon aria-hidden size={18} icon={LatitudeIcon} />

        <span>{lang}</span>
      </button>

      <div className="headerMenue1 headerMenueBg1 customeSmallText invisible absolute top-full left-15 flex w-40 flex-col pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
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
