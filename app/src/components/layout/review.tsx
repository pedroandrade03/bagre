import * as React from "react";
import { Button } from "../../../../wisskins/src/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export function Review() {
  const images = ["/review/1.png", "/review/2.png"];
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Seção de texto */}
      <div className="w-full md:w-1/2">
        <div className="mb-6 pr-4 md:pr-28">
          <h2 className="text-primary uppercase text-2xl mb-4">Avaliações</h2>
          <h2 className="text-3xl md:text-4xl font-bold">
            Mais de 22.000 negociações com sucesso. Faça parte da maior
            comunidade de venda de CS2 do Brasil!
          </h2>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <h2 className="text-center text-lg md:text-xl">
            Está esperando o quê?
          </h2>
          <Button className="text-lg md:text-3xl p-3 md:p-7 font-bold">
            Começe agora
          </Button>
        </div>
      </div>
      {/* Seção de imagem e avaliações */}
      <div className="flex flex-col items-center justify-center gap-3 w-full md:w-1/2">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-lg md:text-2xl">+5.000 avaliações</h2>
          <div className="flex gap-1">
            <Star
              color="#FF931E"
              fill="#FF931E"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <Star
              color="#FF931E"
              fill="#FF931E"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <Star
              color="#FF931E"
              fill="#FF931E"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <Star
              color="#FF931E"
              fill="#FF931E"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <Star
              color="#FF931E"
              fill="#FF931E"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
        </div>
        <div className="w-full bg-[#191919] flex justify-center p-4">
          <Image
            src={images[1]}
            alt="Review 1"
            width={500}
            height={500}
            className="object-cover w-full max-w-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
