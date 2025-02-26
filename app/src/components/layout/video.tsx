import Image from "next/image";

export default function VideoWithBackground() {
  return (
    <div className="w-full flex justify-center mt-8">
      {/* Container com largura máxima definida conforme a imagem de fundo */}
      <div
        className="relative w-full max-w-[1383px]"
        style={{ paddingBottom: "45.33%", height: 0 }}
      >
        {/* Imagem de fundo (1383 x 627) */}
        <Image src="/fly.png" alt="Fundo" fill className="object-cover" />
        {/* Container do vídeo centralizado e responsivo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-[1152/625] z-10">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/n1U7q8HCupg?si=OfxCzlyqi-JZUR9B"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
