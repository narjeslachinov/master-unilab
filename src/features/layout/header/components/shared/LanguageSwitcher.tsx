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
// "use client";

// import { useState } from "react";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { LatitudeIcon } from "@hugeicons/core-free-icons";
// import { SubMenuItem } from "../../type/header.type";

// import DropdownMenu from "../desktop/DropdownMenu";

// export default function LanguageSwitcher() {
//   const [lang, setLang] = useState("FA");

//   const languages: SubMenuItem[] = [
//     {
//       name: "🇮🇷 فارسی",
//       onClick: () => setLang("FA"),
//       className: "header-nav-right-link",
//     },
//     {
//       name: "🇸🇦 العربية",
//       onClick: () => setLang("AR"),
//       className: "header-nav-right-link",
//     },
//     {
//       name: "🇬🇧 English",
//       onClick: () => setLang("EN"),
//       className: "header-nav-left-link",
//     },
//   ];

//   return (
//     <div className="group relative">
//       <button className="flex items-center gap-1 transition">
//         <HugeiconsIcon aria-hidden size={18} icon={LatitudeIcon} />

//         <span>{lang}</span>
//       </button>

//       <DropdownMenu items={languages} />
//     </div>
//   );
// }
