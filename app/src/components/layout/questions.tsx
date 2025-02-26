import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Questions() {
  return (
    <div className="p-6 w-full bg-[#212225] rounded-lg">
      <h2 className="font-bold text-center text-4xl p-4 w-full">
        Perguntas Frequentes
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger>Quais são as formas de pagamento?</AccordionTrigger>
          <AccordionContent>
            Atualmente, nossa plataforma aceita exclusivamente pagamentos por
            PIX, uma forma rápida, segura e eficiente de realizar transferências
            e pagamentos. Ao optar pelo PIX, você garante a conclusão imediata
            do pedido, permitindo um processo mais ágil e simplificado. Para
            efetuar o pagamento, basta seguir as instruções fornecidas no
            momento da finalização do pedido. Caso tenha dúvidas sobre como
            realizar o pagamento via PIX, nossa equipe de suporte está à
            disposição para ajudar.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Como entrar em contato com o suporte?
          </AccordionTrigger>
          <AccordionContent>Sem resposta ainda.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Posso alterar ou cancelar um pedido em andamento?
          </AccordionTrigger>
          <AccordionContent>Sem resposta ainda.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Quais são as políticas de devolução?
          </AccordionTrigger>
          <AccordionContent>Sem resposta ainda.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            É possível parcelar minhas compras?
          </AccordionTrigger>
          <AccordionContent>Sem resposta ainda.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
