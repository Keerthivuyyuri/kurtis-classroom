import { useState } from "react";
import {
  Menu,
  BookOpen,
  Presentation,
  Home,
  Smartphone,
  GraduationCap,
  Newspaper,
} from "lucide-react";

import logo from "../assets/logo.png";

const menuItems = [
  { icon: BookOpen, label: "School" },
  { icon: Presentation, label: "Work" },
  { icon: Home, label: "Home" },
  { icon: Smartphone, label: "Learning apps" },
  { icon: GraduationCap, label: "Self study" },
  { icon: Newspaper, label: "News", badge: "5" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-white">
      <div className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between px-4 sm:h-[86px] sm:px-6 lg:h-[100px]">
        <img
          src={logo}
          alt="Kurtis Classroom"
          className="h-[30px] w-auto object-contain sm:h-[36px] lg:h-[42px]"
        />

        <div className="flex items-center gap-2 sm:gap-4 lg:gap-[22px]">
          <select className="bg-transparent text-[12px] font-medium text-[#2B2929] outline-none sm:text-[13px]">
            <option>EN</option>
          </select>

          <button className="hidden rounded-[4px] bg-[#3155FF] px-5 py-2.5 text-[12px] font-bold text-white sm:block lg:px-7 lg:py-3">
            Sign up
          </button>

          <button className="hidden rounded-[4px] border border-[#CFCFCF] bg-white px-5 py-2.5 text-[12px] font-semibold text-[#6F6F6F] sm:block lg:px-8 lg:py-3">
            Log in
          </button>

          <button onClick={() => setOpen(!open)} aria-label="Open Menu">
            <Menu
              size={28}
              strokeWidth={3}
              className="text-[#3155FF] sm:size-[30px]"
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute right-4 top-[65px] z-[999] w-[210px] rounded-[28px] bg-white px-6 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:right-8 sm:top-[78px] lg:right-[70px] lg:top-[82px] lg:w-[220px] lg:px-7 lg:py-6">
          <ul className="space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-[15px] font-extrabold text-[#111] sm:text-[16px]"
                >
                  <Icon size={16} strokeWidth={2.3} />
                  <span>{item.label}</span>

                  {item.badge && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFC21A] text-[11px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;