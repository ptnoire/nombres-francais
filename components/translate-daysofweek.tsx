import { convertNumberToDay, getDayWord } from "@/helpers/daysofweek";
import { getFrenchWord } from "@/helpers/numbers";
import { useState } from "react";

export function TranslateDaysOfWeek() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [getNumber, setNumber] = useState<number | null>(null);
  const [dayEnglish, setDayEnglish] = useState<string | null>(null);

  const generateNumber = () => {
    const newNumber = Math.floor(Math.random() * 10) + 1;
    setNumber(newNumber);
    setShowAnswer(false);
    setDayEnglish(convertNumberToDay(newNumber));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Jours de la semaine!</h1>
      <div className="flex items-center justify-center">
        <button
          className="border-4 px-4 py-2 rounded-md border-emerald-400 text-3xl"
          onClick={generateNumber}
        >
          {dayEnglish ? dayEnglish : "Start Test"}
        </button>
      </div>
      {dayEnglish && getNumber && (
        <button
          className="border-2 px-4 py-2 rounded-md border-cyan-400 text-3xl"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? getDayWord(getNumber) : "Show Answer"}
        </button>
      )}
    </div>
  );
}
