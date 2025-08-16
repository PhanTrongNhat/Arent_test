import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

const contentCards = [
  {
    image: "/Imagine/column-1.jpg",
    title: "魚を食べて寝坊カラダも元気に！知っておきたい魚を食べるメリット",
    date: "2021.05.17",
    time: "23:25",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    image: "/Imagine/column-2.jpg",
    title: "睡眠を整えてカラダも元気に！知っておきたい睡眠の大切さ",
    date: "2021.05.17",
    time: "23:25",
    tags: ["睡眠", "休養"],
  },
  {
    image: "/Imagine/column-3.jpg",
    title: "水分補給でカラダも元気に！知っておきたい水分摂取のメリット",
    date: "2021.05.17",
    time: "23:25",
    tags: ["水分", "健康"],
  },
  {
    image: "/Imagine/column-4.jpg",
    title: "野菜を食べてカラダも元気に！知っておきたい野菜を食べるメリット",
    date: "2021.05.17",
    time: "23:25",
    tags: ["野菜", "栄養"],
  },
  {
    image: "/Imagine/column-5.jpg",
    title: "ヨガを取り入れてカラダも元気に！心と体のバランスを整える",
    date: "2021.05.17",
    time: "23:25",
    tags: ["野菜", "栄養"],
  },
  {
    image: "/Imagine/column-6.jpg",
    title: "運動でカラダも元気に！知っておきたい運動の効果",
    date: "2021.05.17",
    time: "23:25",
    tags: ["運動", "健康"],
  },
  {
    image: "/Imagine/column-7.jpg",
    title: "スムージーでカラダも元気に！知っておきたいスムージーの効果",
    date: "2021.05.17",
    time: "23:25",
    tags: ["スムージー", "栄養"],
  },
  {
    image: "/Imagine/column-8.jpg",
    title: "瞑想でカラダも元気に！心を整えて健やかに暮らす",
    date: "2021.05.17",
    time: "23:25",
    tags: ["瞑想", "健康"],
  },
];

export function ContentCards() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {contentCards.map((card, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white !border-0 p-0 gap-0"
          >
            <div className="aspect-[4/3] relative overflow-hidden !h-[144px] w-full">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="flex items-center h-6 text-[15px] leading-[30px] font-normal bg-[#FFCC21] absolute bottom-0 left-0 w-fit">
                <span className=" text-white px-2 py-[2px]">{card.date}</span>
                <span className=" text-white px-2 py-[2px]">{card.time}</span>
              </div>
            </div>

            {/* Content */}
            <CardContent
              className="p-2 px-0"
              style={{ fontFamily: "HiraMinStdN, sans-serif" }}
            >
              {/* Date + Time */}

              {/* Title */}
              <h3 className="text-[15px] leading-[22px] text-gray-800 mb-2 line-clamp-2 font-light tracking-[0.08px]">
                {card.title}
              </h3>

              {/* Tags */}
              <div className="text-[#FF963C] text-[12px] leading-[15px]">
                {card?.tags?.map((tag, tagIndex) => (
                  <span key={tagIndex} className="mr-2">
                    #{tag}{" "}
                  </span>
                ))}
              </div>
            </CardContent>
          </div>
        ))}
      </div>

      {/* Button */}

      <div className="text-center mt-6 mb-8">
        <Button
          variant="outline"
          className="px-22 text-lg font-light h-[56px] py-[14px] bg-[linear-gradient(32.95deg,#FFCC21_8.75%,#FF963C_86.64%)] text-white border-0 hover:shadow-lg transition-shadow duration-300"
        >
          コラムをもっと見る
        </Button>
      </div>
    </>
  );
}
