import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type LearnMoreProps = {
  children?: React.ReactNode;
  title?: string;
};

export function LearnMore({ children }: LearnMoreProps) {
  return (
    <Card className="py-4 px-4 md:px-9 max-w-full md:max-w-[400px] bg-[#191919] flex flex-col justify-between">
      <CardContent className="flex flex-col items-center justify-between gap-4 mt-4">
        {children}
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <h2 className="text-lg md:text-2xl text-center text-gray-500">
          Saiba Mais
        </h2>
      </CardFooter>
    </Card>
  );
}
