"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { ChefHat } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[80%] items-center justify-between px-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <ChefHat className="h-7 w-7 text-sky-400" />
          <span className="text-xl font-bold text-white">
            RecipeHub
          </span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className={`rounded-xl px-4 py-1 transition ${
              pathname === "/"
                ? "bg-linear-to-r from-cyan-500 to-blue-700 text-white"
                : "text-gray-300 hover:text-sky-400"
            }`}
          >
            Home
          </Link>

          <Link
            href="/browse"
            className={`rounded-xl px-4 py-1 transition ${
              pathname === "/browse"
                ? "bg-linear-to-r from-cyan-500 to-blue-700 text-white"
                : "text-gray-300 hover:text-sky-400"
            }`}
          >
            Browse
          </Link>

          <Link
            href="/pricing"
            className={`rounded-xl px-4 py-2 transition ${
              pathname === "/pricing"
                ? "bg-gradient-to-r from-cyan-500 to-blue-700 text-white"
                : "text-gray-300 hover:text-sky-400"
            }`}
          >
            Pricing
          </Link>
        </div>

        {/* Right Side */}
        <div>
          <Link
            href="/login"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 px-4 py-2 text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;