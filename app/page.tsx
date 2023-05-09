"use client";
import { TranslateDaysOfWeek } from "@/components/translate-daysofweek";
import { TranslateMonths } from "@/components/translate-month";
import { TranslateNumbers } from "@/components/translate-numbers";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarWeek,
  faListNumeric,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Home() {
  const [showItem, setShowItem] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen justify-center flex-col items-center p-24 max-w-4xl mx-auto">
      <h1 className="text-slate-100 text-5xl font-bold text-center">
        Bonjour le Monde!
      </h1>
      <div className="flex flex-row items-center justify-evenly p-3 w-full">
        <button onClick={() => setShowItem("numbers")}>
          <FontAwesomeIcon icon={faListNumeric} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("daysofweek")}>
          <FontAwesomeIcon icon={faCalendarWeek} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("months")}>
          <FontAwesomeIcon icon={faCalendarCheck} className="text-4xl" />
        </button>
      </div>
      <div className="flex flex-row items-center justify-evenly max-w-4xl p-4 mx-auto gap-20">
        {showItem === "numbers" && <TranslateNumbers />}
        {showItem === "daysofweek" && <TranslateDaysOfWeek />}
        {showItem === "months" && <TranslateMonths />}
      </div>
    </main>
  );
}
