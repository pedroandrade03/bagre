import Image from "next/image";
import { Titillium_Web } from "next/font/google";
import { Instagram, Twitter, Youtube } from "lucide-react";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: "900",
});

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-screen bg-[#212225] text-white p-2 md:p-4 mt-32">
      <div className="flex justify-between items-start gap-4 md:gap-8 w-full">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Wiskins" width={48} height={48} />
          <h1
            className={`hidden md:block text-3xl uppercase font-bold ${titilliumWeb.className}`}
          >
            Wisskins
          </h1>
        </div>
        <div className="text-gray-500 gap-2 flex flex-col">
          <h2 className="text-white">Informações</h2>
          <p>Termos de uso</p>
          <p>Política de privacidade</p>
          <p>Suporte</p>
          <p>Contato</p>
        </div>
        <div className="flex gap-2 flex-col">
          <h2>Métodos de pagamento</h2>
          <Image src="/payment/1.png" alt="Payment 1" width={64} height={64} />
        </div>
        <div className="flex gap-2 flex-col">
          <h2>Redes sociais</h2>
          <div className="flex gap-2">
            <Twitter className="w-4 h-4 md:w-8 md:h-8" />
            <Instagram className="w-4 h-4 md:w-8 md:h-8" />
            <Youtube className="w-4 h-4 md:w-8 md:h-8" />
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-center mt-16">
        <p>Copyright © 2024 Wisskins Todos os Direitos reservados.</p>
        <p>A Wisskins não possui nenhum vinculo com a Valve.</p>
      </div>
    </footer>
  );
}
