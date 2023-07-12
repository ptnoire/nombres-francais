import { getFrenchVerb, getEnglishVerb } from "@/helpers/verbs";
import { useState } from "react";

export function TranslateVerbs() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [getNumber, setNumber] = useState<number | null>(null);
  const [monthEnglish, setmonthEnglish] = useState<string | null>(null);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 60) + 1;
    // Need a more dynamic way to get the list from the function so we can update it.
    setNumber(newNumber);
    setShowAnswer(false);
    setmonthEnglish(getEnglishVerb(newNumber));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Principaux verbes du 1er groupe!</h1>
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
          {showAnswer ? getFrenchVerb(getNumber) : "Show Answer"}
        </button>
      )}
    </div>
  );
}
