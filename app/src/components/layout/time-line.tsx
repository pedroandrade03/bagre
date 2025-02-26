import Image from "next/image";
import { Button } from "@/components/ui/button";

export function TimeLine() {
  return (
    <section className="flex flex-col items-center text-center px-4 mb-8">
      {/* Título e Subtítulo */}
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold">
          Nossa Jornada no Mercado
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mt-2">
          Crescemos, inovamos e seguimos avançando! Conheça nossa história
        </p>
      </div>

      {/* Imagem */}
      <div className="relative w-full max-w-[1401px] mt-6">
        <Image
          src="/time-line.png" // Substitua pelo caminho correto da sua imagem
          alt="Imagem representativa"
          width={1401}
          height={986}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Título pequeno + Botão abaixo da imagem */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Veja como funciona</h2>
        <Button className="mt-2" variant="outline">
          Assistir Vídeo
        </Button>
      </div>
    </section>
  );
}
