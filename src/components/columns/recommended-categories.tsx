import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "../ui/separator";

const recommendedCategories = [
  {
    title: "RECOMMENDED",
    subtitle: "COLUMN",
    japanese: "オススメ",
    href: "/column",
  },
  {
    title: "RECOMMENDED",
    subtitle: "DIET",
    japanese: "ダイエット",
    href: "/diet",
  },
  {
    title: "RECOMMENDED",
    subtitle: "BEAUTY",
    japanese: "美容",
    href: "/beauty",
  },
  {
    title: "RECOMMENDED",
    subtitle: "HEALTH",
    japanese: "健康",
    href: "/health",
  },
];

export function RecommendedCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {recommendedCategories.map((category) => (
        <Link key={category.href} href={category.href}>
          <Card
            className={`bg-[#2E2E2E] text-white hover:opacity-90 transition-all duration-300 hover:scale-105 cursor-pointer h-40 shadow-lg border-0`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full p-4 text-center">
              <div className="font-inter text-xs mb-1 tracking-wide text-[#FFCC21] font-normal text-[22px] leading-[27px]">
                {category.title}
              </div>
              <div className="font-inter text-sm text-[#FFCC21] font-normal text-[22px] leading-[27px]">
                {category.subtitle}
              </div>
              <div className="px-15  w-full">
                <Separator
                  className="my-2 text-white w-10"
                  orientation="horizontal"
                />
              </div>
              <div
                className="text-xl font-medium"
                style={{ fontFamily: "HiraMinStdN, sans-serif" }}
              >
                {category.japanese}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
