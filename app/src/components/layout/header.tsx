"use client";

import { Users } from "lucide-react";
import { Button } from "../../../../wisskins/src/components/ui/button";
import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import Link from "next/link";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: "900",
});

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between px-4 bg-[#212225]">
      <div className="flex items-center space-x-5">
      <Link className="flex items-center space-x-2" href="/">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Wiskins" width={48} height={48} />
          <h1
            className={`hidden md:block text-3xl uppercase font-bold ${titilliumWeb.className}`}
          >
            Wisskins
          </h1>
        </div>
        </Link>
        <div className="h-6 bg-gray-500 w-[1px]"></div>
        <Link className="flex items-center space-x-2" href="groups">
          <Users size={24} color="white" />
          <span className="hidden md:inline text-xl font-bold {active">Grupos</span>
        </Link>
      </div>
      <Button className="text-lg md:text-2xl font-bold">
        <span className="px-2 md:px-4">Vender Skins</span>
      </Button>
    </header>
  );
}
