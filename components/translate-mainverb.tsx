import { getMainFrenchVerb, getFrenchVersion } from "@/helpers/mainverbs";
import { getEnglishPronoun, getFrenchPronoun } from "@/helpers/pronouns";
import { useState } from "react";

export function TranslateMainVerbs() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [getVerbNumber, setVerbNumber] = useState<number | null>(null);
  const [getPronounNumber, setPronounNumber] = useState<number | null>(null);
  const [getMainVerb, setMainVerb] = useState<string | null>(null);
  const [getPronoun, setPronoun] = useState<string | null>(null);

  const generateNumber = () => {
    const randomVerbNumber = Math.floor(Math.random() * 27) + 1;
    const randomPronounNumber = Math.floor(Math.random() * 9) + 1;
    setVerbNumber(randomVerbNumber);
    setPronounNumber(randomPronounNumber);

    setShowAnswer(false);
    setMainVerb(getMainFrenchVerb(randomVerbNumber));
    setPronoun(getEnglishPronoun(randomPronounNumber));
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">
        Verbes fréquents au présent de l&apos;indicatif!
      </h1>
      <div className="flex items-center justify-center">
        <button
          className="border-4 px-4 py-2 rounded-md border-emerald-400 text-3xl"
          onClick={generateNumber}
        >
          {getMainVerb ? `${getPronoun} + ${getMainVerb}` : "Start Test"}
        </button>
      </div>
      {getMainVerb && getVerbNumber && (
        <button
          className="border-2 px-4 py-2 rounded-md border-cyan-400 text-3xl"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer && getPronounNumber
            ? `${getFrenchPronoun(getPronounNumber)} ${getFrenchVersion(
                getVerbNumber,
                getPronounNumber
              )}`
            : "Show Answer"}
        </button>
      )}
    </div>
  );
}
