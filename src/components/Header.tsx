import { useState } from "react";
import { Moon, Globe, Sun, AlignJustify, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChangeLanguage, setIsChangeLanguage] = useState(false);
  const { isDark, setIsDark } = useTheme();
  const handleChangeLanguages = (language: any) => {
    i18n.changeLanguage(language);
    setIsChangeLanguage(!isChangeLanguage);
  };

  return (
    <>
      <header className="w-full">
        <div className="max-w-7xl">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex gap-5">
              <a
                href="/"
                className="text-2xl font-semibold text-[var(--color-primary-theme)]"
              >
                Khuong
              </a>

              <nav className="hidden lg:flex items-center space-x-5">
                {["about", "project", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="font-medium theme-text-secondary hover:text-[var(--color-primary-theme)] transition-colors relative group"
                  >
                    {t(item)}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary-theme)] group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="hidden lg:flex gap-4">
              <button
                onClick={() => {
                  setIsDark(!isDark);
                }}
                className="hover:text-[var(--color-text-secondary)]"
              >
                {isDark ? (
                  <Moon className="hover:bg-[var(--color-surface)] rounded-full cursor-pointer" />
                ) : (
                  <Sun className="hover:bg-[var(--color-surface)] rounded-full cursor-pointer" />
                )}
              </button>
              <div className="flex gap-2 rounded-xl p-2 bg-[var(--color-surface)]">
                <button
                  onClick={() => {
                    handleChangeLanguages(isChangeLanguage ? "vi" : "en");
                  }}
                  className="hover:text-[var(--color-text-secondary)]"
                >
                  <Globe className="hover:bg-[var(--color-surface)] rounded-full cursor-pointer" />
                </button>
                <span className="theme-text">
                  {i18n.language === "vi" ? "VI" : "EN"}
                </span>
              </div>
            </div>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-[var(--color-surface)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 theme-text" />
              ) : (
                <AlignJustify className="w-6 h-6 theme-text" />
              )}
            </button>
          </div>
        </div>

        {/* mobile */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4 border-t theme-border">
            {["about", "project", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="block py-2 theme-text-secondary hover:text-[var(--color-primary-theme)] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item)}
              </a>
            ))}

            <div className="flex items-center justify-between pt-4 border-t theme-border">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-full hover:bg-[var(--color-surface)] transition-colors"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 theme-text" />
                ) : (
                  <Moon className="w-5 h-5 theme-text" />
                )}
              </button>

              <button
                className="flex items-center space-x-2 px-3 py-2 rounded-full bg-[var(--color-surface)]"
                onClick={() => {
                  handleChangeLanguages(isChangeLanguage ? "vi" : "en");
                }}
              >
                <Globe className="w-4 h-4 theme-text" />
                <span className="text-sm font-medium theme-text">
                  {i18n.language === "vi" ? "VI" : "EN"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
