import { getFrenchWord } from "@/helpers/numbers";
import { useState } from "react";

export function TranslateNumbers() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setCurrentNumber(newNumber);
    setShowAnswer(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Nombres un à cent!</h1>
      <div className="flex items-center justify-center">
        <button
          className="border-4 px-4 py-2 rounded-md border-emerald-400 text-3xl"
          onClick={generateNumber}
        >
          {currentNumber ? currentNumber : "Start Test!"}
        </button>
      </div>
      {currentNumber && (
        <button
          className="border-2 px-4 py-2 rounded-md border-cyan-400 text-3xl"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? getFrenchWord(currentNumber) : "Show Answer"}
        </button>
      )}
    </div>
  );
}
