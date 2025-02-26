import React from "react";
import Image from "next/image";

export function GroupBanner() {
  return (
    <div className="relative max-w-[90%] w-[600px] h-[300px]">
      {/* Container com a borda em gradiente */}
      <div className="absolute inset-0 p-1 border-white border-2 rounded-lg">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Image
            src="/groups/banner.png" // Substitua pela URL da sua imagem
            alt="Banner do Grupo"
            fill
            className="object-cover"
          />
        </div>
      </div>
      {/* Quadrado "Destaque" posicionado com metade dentro e metade fora */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 px-6 bg-black border-white border-2 flex items-center justify-center rounded">
        <span className="text-white font-bold text-xl">Destaque</span>
      </div>
    </div>
  );
}
