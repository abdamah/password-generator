"use client";

import { useState } from "react";
import { Generator } from "./components/generator/Generator";
import { PasswordBox } from "./components/PasswordBox";
import { Level } from "@/tests/types/Levels";
import { GenerateParams } from "@/tests/types/GenerateParams";
import { calculatePoints, generatePassword } from "@/tests/utils/Helper";

const Home = () => {
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState<Level>("1");

  const handleGenerate = (params: GenerateParams) => {
    const points = calculatePoints(params);

    if (points <= 2) {
      setLevel("1");
    } else if (points <= 5) {
      setLevel("2");
    } else if (points <= 7) {
      setLevel("3");
    } else {
      setLevel("4");
    }

    const password = generatePassword(params);
    setPassword(password);
  };

  return (
    <div className="w-full h-screen pt-16 bg-almost-black">
      <main className="w-[343px] mx-auto md:w-[540px]">
        <h1 className="text-base font-bold text-gray-400 text-center md:text-2xl">
          Password Generator
        </h1>

        <PasswordBox password={password} />

        <Generator onGenerate={handleGenerate} level={level} />
      </main>
    </div>
  );
};

export default Home;
