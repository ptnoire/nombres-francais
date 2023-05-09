"use client";
import { TranslateNumbers } from "@/components/translate-numbers";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-4xl mx-auto">
      <h1 className="text-slate-100 text-3xl font-bold text-center">
        Bonjour le Monde!
      </h1>
      <TranslateNumbers />
    </main>
  );
}
