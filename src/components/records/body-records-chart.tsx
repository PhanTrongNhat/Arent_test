"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { date: "6月", weight: 62, bodyFat: 25 },
  { date: "7月", weight: 61, bodyFat: 24 },
  { date: "8月", weight: 60, bodyFat: 23 },
  { date: "9月", weight: 59, bodyFat: 22 },
  { date: "10月", weight: 58, bodyFat: 21 },
  { date: "11月", weight: 57, bodyFat: 20 },
  { date: "12月", weight: 56, bodyFat: 19 },
  { date: "1月", weight: 55, bodyFat: 18 },
  { date: "2月", weight: 54, bodyFat: 17 },
  { date: "3月", weight: 53, bodyFat: 16 },
  { date: "4月", weight: 52, bodyFat: 15 },
  { date: "5月", weight: 51, bodyFat: 14 },
];

export function BodyRecordsChart() {
  return (
    <Card className="mb-8 shadow-lg border-0">
      <CardContent className="p-6 bg-[#414141] text-white">
        <div className="flex items-center">
          <CardTitle className="text-sm w-24 font-normal text-[15px] leading-[18px] tracking-[0.15px]">
            BODY RECORD
          </CardTitle>
          <span className="text-[22px] font-normal leading-[27px]">
            2023.05.21
          </span>
        </div>
        <div className="h-64 mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="date" stroke="#fff" fontSize={12} />
              <YAxis stroke="#fff" fontSize={12} />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#fbbf24"
                strokeWidth={2}
                dot={{ fill: "#fbbf24", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="bodyFat"
                stroke="#8FE9D0"
                strokeWidth={2}
                dot={{ fill: "#8FE9D0", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
