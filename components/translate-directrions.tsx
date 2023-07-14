import {
  getProposition,
  getEnglishProposition,
  pronunciationProp,
} from "@/helpers/descibeLocation";
import { useState } from "react";

export function TranslateDirections() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [getNumber, setNumber] = useState<number | null>(null);
  const [monthEnglish, setmonthEnglish] = useState<string | null>(null);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 19) + 1;
    setNumber(newNumber);
    setShowAnswer(false);
    setmonthEnglish(getEnglishProposition(newNumber));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Directions</h1>
      <div className="flex items-center justify-center">
        <button
          className="border-4 px-4 py-2 rounded-md border-emerald-400 text-3xl"
          onClick={generateNumber}
        >
          {monthEnglish ? monthEnglish : "Start Test"}
        </button>
      </div>
      {monthEnglish && getNumber && (
        <button
          className="border-2 px-4 py-2 rounded-md border-cyan-400 text-3xl"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? getProposition(getNumber) : "Show Answer"}
        </button>
      )}
      {showAnswer && getNumber && (
        <h3 className="border-2 px-4 py-2 rounded-md border-yellow-100 text-sm">
          {pronunciationProp(getNumber)}
        </h3>
      )}
    </div>
  );
}
