"use client";

import { CoffeIcon, ForkIcon } from "../Icons";

const homeTypes = [
  {
    id: "morning",
    name: "Morning",
    color: "bg-[linear-gradient(155.89deg,#FFCC21_8.26%,#FF963C_91.18%)]",
    textColor: "text-white",
    icon: <ForkIcon></ForkIcon>,
  },
  {
    id: "lunch",
    name: "Lunch",
    color: "bg-[linear-gradient(155.89deg,#FFCC21_8.26%,#FF963C_91.18%)]",
    textColor: "text-white",
    icon: <ForkIcon></ForkIcon>,
  },
  {
    id: "dinner",
    name: "Dinner",
    color: "bg-[linear-gradient(155.89deg,#FFCC21_8.26%,#FF963C_91.18%)]",
    textColor: "text-white",
    icon: <ForkIcon></ForkIcon>,
  },
  {
    id: "snack",
    name: "Snack",
    color: "bg-[linear-gradient(155.89deg,#FFCC21_8.26%,#FF963C_91.18%)]",
    textColor: "text-white",
    icon: <CoffeIcon></CoffeIcon>,
  },
];

interface HomeTypeFiltersProps {
  selectedHomeType: string;
  onHomeTypeChange: (type: string) => void;
}

export function HomeTypeFilters({
  selectedHomeType,
  onHomeTypeChange,
}: HomeTypeFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-14 mb-6">
      {homeTypes.map((type) => (
        <div key={type.id} className="flex flex-col items-center">
          <div
            className={`w-[116px] h-[134px] ${type.color} ${
              type.textColor
            } flex items-center justify-center flex-col gap-[5px] cursor-pointer hover:opacity-80 transition-all duration-300 mb-2 ${
              selectedHomeType === type.id
                ? "ring-4 ring-orange-300 scale-110"
                : ""
            }`}
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            onClick={() => onHomeTypeChange(type.id)}
          >
            {type.icon}
            <span className="text-xl leading-6 text-center leading-tight font-normal">
              {type.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
