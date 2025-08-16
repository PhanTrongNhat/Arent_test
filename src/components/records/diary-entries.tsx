import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const diaryEntries = [
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
  {
    date: "2023.05.21",
    time: "23:25",
    content:
      "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキスト...",
  },
];

export function DiaryEntries() {
  return (
    <div className="mt-[56px] border-0">
      <div>
        <h1 className="text-[22px] font-normal leading-[27px] text-[#414141]">
          MY DIARY
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {diaryEntries.map((entry, index) => (
            <Card
              key={index}
              className=" border-[#707070] border-2 px-2 py-4 text-[#414141]"
            >
              <CardContent className="p-0">
                <div className="text-gray-500 mb-2 font-normal text-lg tracking-[0.09px] leading-[22px]">
                  {entry.date}
                  <br />
                  {entry.time}
                </div>
                <p
                  className="text-xs text-gray-700 line-clamp-4 mt-2 leading-[17px] font-light"
                  style={{ fontFamily: "HiraMinStdN, sans-serif" }}
                >
                  {entry.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6 mb-8">
          <Button
            style={{ fontFamily: "HiraMinStdN, sans-serif" }}
            variant="outline"
            className="px-22 text-lg font-light h-[56px] py-[14px] bg-[linear-gradient(32.95deg,#FFCC21_8.75%,#FF963C_86.64%)] text-white border-0 hover:shadow-lg transition-shadow duration-300"
          >
            自分の日記をもっと見る
          </Button>
        </div>
      </div>
    </div>
  );
}
