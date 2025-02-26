import { ContactBanner } from "@/components/layout/contact-banner";
import { DialogShare } from "@/components/layout/dialog-share";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { HeroBanner } from "@/components/layout/hero-banner";
import { Informative } from "@/components/layout/informative";
import { LearnMore } from "@/components/layout/learn-more";
import Line from "@/components/layout/line";
import { Questions } from "@/components/layout/questions";
import { Review } from "@/components/layout/review";
import { Reward } from "@/components/layout/reward";
import SocialBar from "@/components/layout/social-bar";
import { TimeLine } from "@/components/layout/time-line";
import VideoWithBackground from "@/components/layout/video";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#191919] w-screen">
      <Header />
      <HeroBanner />
      <SocialBar />
      <main className="px-12 md:px-32">
        <div className="flex flex-col md:flex-row justify-around gap-6 md:gap-8">
          <LearnMore>
            <div className="w-20 h-20 md:w-[132px] md:h-[132px] flex justify-center items-center my-2 md:my-3">
              <Image
                src="/learn-more/trophy.png"
                alt="Trophy"
                width={132}
                height={132}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-center">
              <strong>+22 mil</strong> negociações <strong>concluídas</strong>{" "}
              com <strong>sucesso!</strong>
            </h2>
          </LearnMore>
          <LearnMore>
            <div className="w-20 h-20 md:w-[132px] md:h-[132px] flex justify-center items-center my-2 md:my-3">
              <Image
                src="/learn-more/gauge.png"
                alt="Mensagem"
                width={132}
                height={132}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-center">
              Atendimento <strong>ágil</strong>, <strong>eficiente</strong> e{" "}
              <strong>descomplicado</strong>
            </h2>
          </LearnMore>
          <LearnMore>
            <div className="w-20 h-20 md:w-[132px] md:h-[132px] flex justify-center items-center my-2 md:my-3">
              <Image
                src="/learn-more/shield.png"
                alt="Mensagem"
                width={132}
                height={132}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl md:text-2xl text-center">
              <strong>Segurança garantida</strong> na compra e venda de skins
            </h2>
          </LearnMore>
        </div>
        <Line></Line>
        <div className="md:px-16">
          <h2 className="text-3xl font-bold text-center">
            Vender suas skins nunca foi tão fácil!
          </h2>
          <p className="text-xl text-center mb-8">
            Em menos de 5 minutos, você faz tudo de forma Rápida e Segura
          </p>
          <div className="flex justify-around flex-col md:flex-row gap-16 p-4 mb-16">
            <Informative
              title="1. Mensagem"
              content="Envie uma mensagem informando as skins que você quer vender. Fácil e rápido."
            >
              <Image
                src="/informative/message.png"
                alt="Mensagem"
                width={96}
                height={96}
              />
            </Informative>
            <Informative
              title="2. Negociar"
              content="Em poucos minutos, você recebe uma proposta justa pelas suas skins."
            >
              <Image
                src="/informative/handshake.png"
                alt="Mensagem"
                width={96}
                height={96}
              />
            </Informative>
            <Informative
              title="3. Receber"
              content="Aceite a proposta, envie sua chave PIX e receba o dinheiro instantaneamente."
            >
              <Image
                src="/informative/money.png"
                alt="Mensagem"
                width={96}
                height={96}
              />
            </Informative>
          </div>
          <VideoWithBackground />
          <div className="flex justify-center mt-8 md:mt-16 lg:mt-16 2xl:mt-16">
            <Button className="md:text-3xl text-xl font-bold px-4 md:py-8">
              Mande uma mensagem
            </Button>
          </div>
        </div>
        <Line></Line>
        <div className="md:px-16">
          <Review />
        </div>
        <Line></Line>
        <div className="md:px-16">
          <div className="flex justify-around gap-16 p-4 flex-col md:flex-row">
            <Reward step="1/3">
              <div className="w-[132px] h-[132px] flex justify-center items-center my-3">
                <Image
                  src="/reward/code.png"
                  alt="Mensagem"
                  width={132}
                  height={132}
                />
              </div>
              <h2 className="text-2xl text-center font-bold">
                Gere seu Código de Indicação
              </h2>
              <p className="text-center">
                Clique no botão abaixo para{" "}
                <strong>criar seu código de indicação.</strong> Esse código{" "}
                <strong>será usado pelos seus amigos ao vender skins.</strong>
              </p>
            </Reward>
            <Reward step="2/3">
              <div className="w-[132px] h-[132px] flex justify-center items-center my-3">
                <Image
                  src="/reward/share.png"
                  alt="Mensagem"
                  width={132}
                  height={132}
                />
              </div>
              <h2 className="text-2xl text-center font-bold">
                Compartilhe com Seus Amigos
              </h2>
              <p className="text-center">
                <strong>Envie seu código para amigos</strong> e{" "}
                <strong>incentive-os a vender skins.</strong> Cada venda
                realizada com ele, você recebe{" "}
                <strong>recompensas automáticas.</strong>
              </p>
            </Reward>
            <Reward step="3/3">
              <div className="w-[132px] h-[132px] flex justify-center items-center my-3">
                <Image
                  src="/reward/earn.png"
                  alt="Mensagem"
                  width={132}
                  height={132}
                />
              </div>
              <h2 className="text-2xl text-center font-bold">
                Acompanhe e Ganhe Recompensas
              </h2>
              <p className="text-center">
                <strong>Quanto mais amigos</strong> usarem seu código,{" "}
                <strong>mais você recebe! Continue compartilhando</strong> e
                veja seus ganhos crescerem <strong>cada vez mais.</strong>
              </p>
            </Reward>
          </div>
          <div className="flex flex-col items-center">
            <DialogShare />

            <div className="flex flex-col items-center">
              <h2>Para mais informações </h2>
              <Button className="text-xl p-2 md:p-6 mt-4" variant="outline">
                Assista ao Tutorial
              </Button>
            </div>
          </div>
        </div>
        <div className="md:px-16">
          <Line></Line>
          <TimeLine />
          <Questions />
          <ContactBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
