import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
  FlagIcon,
} from "./LanguageSelector.styled";

const languages = [
  {
    code: "en",
    label: "EN",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        width="20"
        height="20"
      >
        <rect width="640" height="480" fill="#fff" />
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="40" d="M320 0v480M0 240h640" />
        <path stroke="#c8102e" strokeWidth="30" d="M320 0v480M0 240h640" />
      </svg>
    ),
  },
  {
    code: "pl",
    label: "PL",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        width="20"
        height="20"
      >
        <rect width="640" height="240" fill="#fff" />
        <rect y="240" width="640" height="240" fill="#dc143c" />
      </svg>
    ),
  },
  {
    code: "uk",
    label: "UA",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 640 480"
        width="20"
        height="20"
      >
        <rect width="640" height="240" fill="#0057b7" />
        <rect y="240" width="640" height="240" fill="#ffd700" />
      </svg>
    ),
  },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <Dropdown>
      <DropdownButton onClick={() => setIsOpen(!isOpen)}>
        <FlagIcon>{currentLang.flag}</FlagIcon>
        {currentLang.label}
      </DropdownButton>

      {isOpen && (
        <DropdownMenu $isOpen={isOpen}>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              <FlagIcon>{lang.flag}</FlagIcon>
              {lang.label}
            </li>
          ))}
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export default LanguageSelector;
