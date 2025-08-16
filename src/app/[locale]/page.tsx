"use client";

import { HomeGrid } from "@/components/home/home-grid";
import { HomeTracker } from "@/components/home/home-tracker";
import { HomeTypeFilters } from "@/components/home/home-type-filters";
import { useState } from "react";

const homeEntries = [
  {
    id: 1,
    image: "/healthy-breakfast-bowl.png",
    type: "morning",
    time: "05.21.Morning",
    calories: 475,
  },
  {
    id: 2,
    image: "/bento-lunch-box.png",
    type: "lunch",
    time: "05.21.Lunch",
    calories: 632,
  },
  {
    id: 3,
    image: "/traditional-japanese-home.png",
    type: "dinner",
    time: "05.21.Dinner",
    calories: 594,
  },
  {
    id: 4,
    image: "/ramen-noodles.png",
    type: "dinner",
    time: "05.21.Dinner",
    calories: 765,
  },
];

export default function HomePage() {
  const [selectedHomeType, setSelectedHomeType] = useState("morning");

  const todayCalories = homeEntries
    .filter((home) => home.time.includes("05.21"))
    .reduce((sum, home) => sum + home.calories, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeTracker todayCalories={todayCalories} />

      <div className="container mx-auto px-4 max-w-[960px]">
        <HomeTypeFilters
          selectedHomeType={selectedHomeType}
          onHomeTypeChange={setSelectedHomeType}
        />
        <HomeGrid />
      </div>
    </div>
  );
}
