"use client";

import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const homeEntries = [
  {
    id: 1,
    image: "/Imagine/m01.jpg",
    type: "morning",
    time: "05.21.Morning",
  },
  {
    id: 2,
    image: "/Imagine/l03.jpg",
    type: "lunch",
    time: "05.21.Lunch",
  },
  {
    id: 3,
    image: "/Imagine/d01.jpg",
    type: "dinner",
    time: "05.21.Dinner",
  },
  {
    id: 4,
    image: "/Imagine/l01.jpg",
    type: "dinner",
    time: "05.21.Dinner",
  },
  {
    id: 5,
    image: "/Imagine/m01.jpg",
    type: "morning",
    time: "05.20.Morning",
  },
  {
    id: 6,
    image: "/Imagine/l02.jpg",
    type: "lunch",
    time: "05.20.Lunch",
  },
  {
    id: 7,
    image: "/Imagine/d02.jpg",
    type: "dinner",
    time: "05.20.Dinner",
  },
  {
    id: 8,
    image: "/Imagine/s01.jpg",
    type: "dinner",
    time: "05.20.Snack",
  },
];

export function HomeGrid() {
  return (
    <CardContent>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {homeEntries.map((home) => {
          // const homeType = homeTypes.find((type) => type.id === home.type);
          return (
            <div key={home.id} className="relative group cursor-pointer">
              <div className="aspect-square overflow-hidden shadow-md">
                <Image
                  src={home.image || "/placeholder.svg"}
                  alt={`home ${home.id}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute bottom-0 left-0 py-[7px] pl-2 pr-[22px] bg-[#FFCC21] bg-opacity-80">
                <div className=" text-white text-[15px]">
                  <p className="font-normal text-[]">{home.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-13 mb-[64px]">
        <Button
          variant="outline"
          style={{ fontFamily: "HiraMinStdN, sans-serif" }}
          className="px-22 text-lg font-light h-[56px] py-[14px] bg-[linear-gradient(32.95deg,#FFCC21_8.75%,#FF963C_86.64%)] text-white border-0 hover:shadow-lg transition-shadow duration-300"
        >
          記録をもっと見る
        </Button>
      </div>
    </CardContent>
  );
}
