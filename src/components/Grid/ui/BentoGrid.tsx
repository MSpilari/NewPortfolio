"use client";

import { BentoGridDTO } from "../model/BentoGrid";
import { cn } from "../../../lib/utils";

export const BentoGrid = ({ className, children }: BentoGridDTO) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
