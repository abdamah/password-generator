"use client";

import { Copy } from "lucide-react";
import { useState } from "react";

export const PasswordBox = ({ password }: { password: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    if (!password) return;

    navigator.clipboard.writeText(password);
    setIsCopied(true);
  }

  return (
    <div className="mt-4 p-4 flex justify-between items-center bg-dark-grey md:mt-8 md:py-5 md:px-8">
      <input
        className="w-full bg-transparent outline-none text-2xl text-almost-white font-bold placeholder:opacity-25 md:text-[32px]"
        disabled={true}
        placeholder="P4$5W0rD!"
        value={password}
        data-testid="password-box-input"
      />
      <div className="flex items-center gap-4">
        <span
          className={`text-lg text-neon-green uppercase font-bold ${
            isCopied ? "opacity-100" : "opacity-0"
          }`}
        >
          COPIED
        </span>
        <button
          onClick={handleCopy}
          type="button"
          className="cursor-pointer bg-transparent text-green-400 duration-150 hover:text-almost-white"
          data-testid="password-box-copy-button"
        >
          <Copy className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
