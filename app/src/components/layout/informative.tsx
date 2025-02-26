import * as React from "react";

import { Card } from "@/components/ui/card";

type InformativeProps = {
  children?: React.ReactNode;
  title?: string;
  content?: string;
};

export function Informative({ children, title, content }: InformativeProps) {
  return (
    <Card className="py-6 px-12 max-w-[350px] bg-[#212225] border-none ">
      <div className="flex flex-col items-center justify-between gap-4 mt-4">
        <div className="w-[96px] h-[96px] flex justify-center items-center">
          {children}
        </div>
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        <h2 className="text-xl text-center">{content}</h2>
      </div>
    </Card>
  );
}
