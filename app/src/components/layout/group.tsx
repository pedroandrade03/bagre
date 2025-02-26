import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export default function Group({ data }) {
  return (
    <Card className="relative w-80 border-0">
      {/* Imagem de capa */}
      <Image
        src={data.cover_url}
        width={320}
        height={160}
        alt="Imagem de capa"
        className="w-full h-40 object-cover"
      />

      <div className="bg-[#212225] p-4">
        {/* Avatar centralizado */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
          <Avatar className="h-24 w-24 border-2 border-primary">
            <AvatarImage
              src={data.avatar_url}
              className="bg-black"
              alt={data.title}
            />
            <AvatarFallback>{data.title.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Conteúdo centralizado */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold">{data.title}</h3>
          <div className="flex justify-center items-center gap-2 mt-3">
            <Link href={data.link}>
              <Button className="text-lg font-bold">Entrar no Grupo</Button>
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="bg-gray-500 text-2xl font-bold">?</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80" side="top">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      Vantagens do Grupo
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {data.advantages}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      Informações Adicionais
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {data.additional_info}
                    </p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Card>
  );
}
