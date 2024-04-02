"use client";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

interface Props {
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
  id: string;
  label: string;
}

export const Checkbox = ({ checked, onCheckedChange, id, label }: Props) => {
  return (
    <div className="flex items-center gap-5">
      <RadixCheckbox.Root
        className={`
          h-5 w-5 ${checked ? "bg-neon-green" : "bg-transparent"} 
          border-2 ${checked ? "border-neon-green" : "border-almost-white"}
          flex items-center justify-center 
        `}
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <RadixCheckbox.Indicator className="text-very-dark-grey">
          <Check className="w-4 h-4" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        htmlFor={id}
        className="text-base text-almost-white font-bold md:text-lg"
      >
        {label}
      </label>
    </div>
  );
};
