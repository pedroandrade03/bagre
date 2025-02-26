"use client";

import { Instagram, Twitter, Youtube } from "lucide-react";

export default function SocialBar() {
  const socialMediaInsights = "+ 30mil Seguidores";
  return (
    <div className="flex w-full justify-center items-center gap-4 md:gap-9 opacity-50 my-10 md:my-20">
      <Twitter className="w-8 h-8 md:w-12 md:h-12" />
      <Instagram className="w-8 h-8 md:w-12 md:h-12" />
      <Youtube className="w-8 h-8 md:w-12 md:h-12" />
      <p className="text-xl md:text-3xl">{socialMediaInsights}</p>
    </div>
  );
}
