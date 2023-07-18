import { getFrenchAdj, getEnglishAdj } from "@/helpers/adjectives";
import { useState } from "react";

export function TranslateAdj() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [getNumber, setNumber] = useState<number | null>(null);
  const [adjEnglish, setadjEnglish] = useState<string | null>(null);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 30) + 1;
    setNumber(newNumber);
    setShowAnswer(false);
    setadjEnglish(getEnglishAdj(newNumber));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Des Qualités!</h1>
      <div className="flex items-center justify-center">
        <button
          className="border-4 px-4 py-2 rounded-md border-emerald-400 text-3xl"
          onClick={generateNumber}
        >
          {adjEnglish ? adjEnglish : "Start Test"}
        </button>
      </div>
      {adjEnglish && getNumber && (
        <button
          className="border-2 px-4 py-2 rounded-md border-cyan-400 text-3xl"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? getFrenchAdj(getNumber) : "Show Answer"}
        </button>
      )}
    </div>
  );
}
