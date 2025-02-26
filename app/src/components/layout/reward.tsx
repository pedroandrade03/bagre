import * as React from "react";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

type RewardProps = {
  children?: React.ReactNode;
  title?: string;
  step: string;
};

export function Reward({ children, step }: RewardProps) {
  return (
    <Card className="px-2 max-w-[400px] bg-[#212225] border-none">
      <CardHeader className="flex items-end justify-end">
        <h2 className="text-lg font-bold text-primary">{step}</h2>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-between gap-4 mt-4">
        {children}
      </CardContent>
    </Card>
  );
}
