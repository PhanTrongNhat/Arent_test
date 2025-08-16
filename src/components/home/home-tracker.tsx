"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const chartData = [
  { date: "6月", calories: 1800 },
  { date: "7月", calories: 1750 },
  { date: "8月", calories: 1700 },
  { date: "9月", calories: 1650 },
  { date: "10月", calories: 1600 },
  { date: "11月", calories: 1550 },
  { date: "12月", calories: 1500 },
  { date: "1月", calories: 1450 },
  { date: "2月", calories: 1400 },
  { date: "3月", calories: 1350 },
  { date: "4月", calories: 1300 },
  { date: "5月", calories: 1250 },
];

interface HomeTrackerProps {
  todayCalories: number;
}

export function HomeTracker({}: HomeTrackerProps) {
  return (
    <div className="flex lg:flex-row flex-col mb-6 h-fit w-full">
      <Card className="overflow-hidden w-full shadow-lg border-0 p-0">
        <div className="relative">
          <div className="relative min-h-[312px] h-full w-full">
            <Image
              src="/Imagine/d01.jpg"
              alt="Featured home"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex justify-center items-center"
          >
            <div className="flex items-center gap-1">
              <p className="font-normal text-lg leading-[22px]">05/21</p>
              <p className="font-normal text-[25px] leading-[30px]">75%</p>
            </div>

            <Image
              width={181}
              height={181}
              alt="percent"
              className="absolute min-w-[181px] h-[181px]"
              src="/Imagine/circle.png"
            ></Image>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(225deg,#FFCC21_0%,#FF963C_100%)] opacity-20"></div>
        </div>
      </Card>

      <Card className="w-full shadow-lg h-full border-0 p-0">
        <CardContent className="p-0">
          <div className="bg-gray-800 text-white p-6 min-h-[312px]">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" />
                  <XAxis dataKey="date" stroke="#fff" fontSize={12} />
                  <YAxis stroke="#fff" fontSize={12} />
                  <Line
                    type="monotone"
                    dataKey="calories"
                    stroke="#fbbf24"
                    strokeWidth={3}
                    dot={{ fill: "#fbbf24", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
