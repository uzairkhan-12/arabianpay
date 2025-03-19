import { useState } from "react";
import { Menu, X } from "lucide-react";
import Select from "react-select";
import Flag from "react-world-flags";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Language options for the dropdown
  const languageOptions = [
    { value: "en", flag: "GB" }, // UK Flag for English
    { value: "ar", flag: "SA" }, // Saudi Arabia Flag for Arabic
  ];

  // Set the default language to English
  const defaultLanguage = languageOptions.find((option) => option.value === "en");

  // Handle language change
  const handleLanguageChange = (selectedOption: any) => {
    console.log(`Language changed to: ${selectedOption.label}`);
    // Implement language change logic (for example, updating a context or state)
  };

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-bold text-primary">ArabianPay</div>
        </div>

        {/* Navigation Links (Hidden on mobile) */}
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-gray-700 hover:text-primary">
            About
          </a>
          <a href="#features" className="text-gray-700 hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary">
            How It Works
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary">
            Contact
          </a>
        </nav>

        {/* Phone Numbers (Hide only on mobile, will be inside menu on small screens) */}
        
        <div className="flex gap-x-2 items-center">
        <div className="hidden md:flex flex-col items-center text-sm text-gray-500">
          <a href="tel:+920031271" className="hover:text-primary">
            Unified No.: 920031271
          </a>
          <a href="tel:+8001111063" className="hover:text-primary">
            Free Number: 8001111063
          </a>
        </div>

        <Select
  options={languageOptions}
  formatOptionLabel={(e) => (
    <div className="flex items-center">
      <Flag code={e.flag} className="h-6 w-6" />
      <span className="ml-2">{e.value}</span> {/* Optional: Display the value */}
    </div>
  )}
  className="w-22"
  isSearchable={false}
  defaultValue={defaultLanguage}
/>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col gap-4 items-center md:hidden transition-all duration-500 opacity-100">
            <a href="#about" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#features" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
              How It Works
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            {/* Phone Numbers (Only Show in Mobile Menu) */}
            <div className="flex flex-col items-center text-sm text-gray-500">
              <a href="tel:+920031271" className="hover:text-primary">
                Unified No.: 920031271
              </a>
              <a href="tel:+8001111063" className="hover:text-primary">
                Free Number: 8001111063
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
