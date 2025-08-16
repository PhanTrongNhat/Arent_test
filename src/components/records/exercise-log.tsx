import { ScrollArea } from "@/components/ui/scroll-area";
import { CardTitle } from "../ui/card";

interface ExerciseEntry {
  id: string;
  name: string;
  description: string;
  calories: number;
  duration: number;
}

const exerciseData: ExerciseEntry[] = [
  {
    id: "1",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "2",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "3",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "4",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "5",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "6",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "7",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
  {
    id: "8",
    name: "家事全般",
    description: "（立位・軽い）",
    calories: 26,
    duration: 10,
  },
];

export default function ExerciseTracker() {
  return (
    <div className="bg-[#414141] text-white p-6">
      {/* Header */}
      <div className="flex items-center">
        <CardTitle className="text-sm w-24 font-normal text-[15px] leading-[18px] tracking-[0.15px]">
          BODY RECORD
        </CardTitle>
        <span className="text-[22px] font-normal leading-[27px]">
          2023.05.21
        </span>
      </div>

      {/* Exercise List with Custom Scroll */}
      <ScrollArea className="h-80 pr-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-10">
          {exerciseData.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-start justify-between p-4 border-b-1 border-[#777777]  transition-color"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                <div>
                  <div
                    style={{ fontFamily: "HiraMinStdN, sans-serif" }}
                    className="text-white font-light leading-[22px] text-[15px]"
                  >
                    {exercise.name} {exercise.description}
                  </div>
                  <div className="text-[#FFCC21] text-sm font-normal text-[15px] tracking-[0.08px]">
                    {exercise.calories}kcal
                  </div>
                </div>
              </div>
              <div className="text-[#FFCC21] font-normal leading-[22px] text-lg">
                {exercise.duration} min
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Right accent line */}
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-orange-500 rounded-r-lg"></div>
    </div>
  );
}
