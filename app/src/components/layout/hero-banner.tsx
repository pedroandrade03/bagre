import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section
      className="relative w-full max-w-[1920px] mx-auto"
      style={{ paddingBottom: "37.5%" }} // Mantém a proporção 1920x720 (720/1920 * 100)
    >
      <picture>
        {/* Para telas com largura mínima de 1920px, usa a imagem de alta resolução */}
        <source media="(min-width: 1920px)" srcSet="/banner.png" />
        {/* Para telas menores, usa a imagem padrão */}
        <source media="(max-width: 1919px)" srcSet="/banner.png" />
        {/* Fallback para navegadores que não suportam <picture> */}
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-cover"
        />
      </picture>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-7xl font-black">
          Venda suas skins de CS2 com pagamento instantâneo no Pix!
        </h1>
        <p className="mt-2 text-base md:text-xl">
          Venda suas skins de forma <strong>rápida</strong> e{" "}
          <strong>segura</strong>.
          <br className="hidden md:block" />
          <strong>Pagamento instantâneo</strong>, <strong>sem taxas</strong> e
          com a <strong>melhor cotação</strong> do mercado!
        </p>
        <Button className="mt-4 font-bold text-2xl md:text-5xl py-4 md:py-9 px-6 md:px-12">
          Vender Skins
        </Button>
      </div>
    </section>
  );
}
