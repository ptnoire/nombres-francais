"use client";
import { TranslateDaysOfWeek } from "@/components/translate-daysofweek";
import { TranslateMonths } from "@/components/translate-month";
import { TranslateNumbers } from "@/components/translate-numbers";
import {
  faCalendarCheck,
  faFaceSmile,
} from "@fortawesome/free-regular-svg-icons";
import { TranslateAdj } from "@/components/translate-adj";
import { TranslateVerbs } from "@/components/translate-verbs";
import { GetRandomDate } from "@/components/translate-dates";
import {
  faCalendarWeek,
  faDiamondTurnRight,
  faDice,
  faListNumeric,
  faPersonWalking,
  faPersonWalkingDashedLineArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { TranslateDirections } from "@/components/translate-directrions";
import { TranslateMainVerbs } from "@/components/translate-mainverb";

export default function Home() {
  const [showItem, setShowItem] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen justify-center flex-col items-center p-24 max-w-4xl mx-auto">
      {!showItem && (
        <h3 className="text-slate-400 justify-evenly m-6 p-6 text-sm italic text-center">
          &quot;A simple way to practice your french! Just click any of the
          buttons below to access different randomized subjects, words and
          numbers that you can practice until you&apos;ve memorized all of
          them!&quot;
        </h3>
      )}
      <h1 className="text-slate-100 text-5xl p-6 font-bold text-center">
        Bonjour le Monde!
      </h1>
      <div className="flex flex-row flex-wrap gap-4 items-center justify-evenly  p-3 w-full">
        <button onClick={() => setShowItem("numbers")}>
          <FontAwesomeIcon icon={faListNumeric} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("daysofweek")}>
          <FontAwesomeIcon icon={faCalendarWeek} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("months")}>
          <FontAwesomeIcon icon={faCalendarCheck} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("mainverbs")}>
          <FontAwesomeIcon
            icon={faPersonWalkingDashedLineArrowRight}
            className="text-4xl"
          />
        </button>
        <button onClick={() => setShowItem("verbs")}>
          <FontAwesomeIcon icon={faPersonWalking} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("directions")}>
          <FontAwesomeIcon icon={faDiamondTurnRight} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("randomdates")}>
          <FontAwesomeIcon icon={faDice} className="text-4xl" />
        </button>
        <button onClick={() => setShowItem("adjectives")}>
          <FontAwesomeIcon icon={faFaceSmile} className="text-4xl" />
        </button>
      </div>
      <div className="flex flex-row items-center justify-evenly max-w-4xl p-4 mx-auto gap-20">
        {showItem === "numbers" && <TranslateNumbers />}
        {showItem === "daysofweek" && <TranslateDaysOfWeek />}
        {showItem === "months" && <TranslateMonths />}
        {showItem === "verbs" && <TranslateVerbs />}
        {showItem === "directions" && <TranslateDirections />}
        {showItem === "randomdates" && <GetRandomDate />}
        {showItem === "adjectives" && <TranslateAdj />}
        {showItem === "mainverbs" && <TranslateMainVerbs />}
      </div>
    </main>
  );
}
