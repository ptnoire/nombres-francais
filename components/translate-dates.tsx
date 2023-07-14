import { useState } from "react";

export function GetRandomDate() {
  const [getDate, setDate] = useState<string | null>(null);

  const generateDate = () => {
    const startDate = new Date(1970, 0, 1);
    const endDate = new Date();
    const userLang = navigator.language;
    const randomTimestamp =
      Math.random() * endDate.getTime() - startDate.getTime();
    const randomDate = new Date(randomTimestamp);
    const createRandomDateString = randomDate.toLocaleDateString(userLang, {
      weekday: "long",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    setDate(createRandomDateString);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-3xl">Randomized Date Practice!</h1>
      <div className="flex items-center justify-center">
        <button
          className="border-4 px-4 py-2 rounded-md border-emerald-400 text-3xl"
          onClick={generateDate}
        >
          {getDate ? getDate : "Start Test"}
        </button>
      </div>
    </div>
  );
}
