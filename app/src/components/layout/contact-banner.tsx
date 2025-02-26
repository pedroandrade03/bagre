import * as React from "react";
import Image from "next/image";
import { Button } from "../../../../wisskins/src/components/ui/button";
import { Smartphone } from "lucide-react";

export function ContactBanner() {
  return (
    <div className="bg-[#212225] p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-12 mt-12 rounded-lg">
      <Image
        src="/contact/qr-code.png"
        alt="Contato"
        width={200}
        height={200}
        className="object-cover w-32 h-32 md:w-48 md:h-48"
      />
      <div className="text-center flex flex-col items-center md:block md:text-left">
        <h2 className="font-extrabold text-3xl md:text-6xl">Mais dúvidas?</h2>
        <h2 className="font-bold text-xl md:text-3xl mt-2">
          Estamos disponíveis no WhatsApp!
        </h2>
        <Button className="mt-4 flex items-center gap-2 text-lg md:text-2xl p-3 md:p-6 font-bold bg-[#25D366]">
          Entrar em contato <Smartphone />
        </Button>
      </div>
    </div>
  );
}
