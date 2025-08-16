import Image from "next/image";

const trackingSections = [
  {
    title: "BODY RECORD",
    subtitle: "自分のカラダの記録",
    bgColor: "bg-yellow-600",
    href: "/records/body",
    img: "/Imagine/MyRecommend-1.jpg",
  },
  {
    title: "MY EXERCISE",
    subtitle: "自分の運動の記録",
    bgColor: "bg-green-600",
    href: "/records/exercise",
    img: "/Imagine/MyRecommend-2.jpg",
  },
  {
    title: "MY DIARY",
    subtitle: "自分の日記",
    bgColor: "bg-orange-600",
    href: "/records/diary",
    img: "/Imagine/MyRecommend-3.jpg",
  },
];

export function TrackingSections() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-4 mb-8">
      {trackingSections.map((section) => (
        <div
          key={section.href}
          className="relative md:w-[288px] md:h-[288px] w- h-[30vh] bg-[#FFCC21] flex items-center justify-center"
        >
          {/* Ảnh nền trắng đen */}
          <div className="relative md:w-[240px] md:h-[240px] w-[90%] h-[26vh] overflow-hidden">
            <Image
              src={section.img} // thay bằng ảnh bạn muốn
              alt="Body Record"
              fill
              className="object-cover object-center grayscale scale-110"
            />
            {/* Lớp phủ màu đen mờ */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Nội dung text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-[#FFCC21] text-xl font-normal text-[25px] leading-[30px] tracking-[0.13px]">
                {section.title}
              </h2>
              <div className="bg-[#FF963C] mt-3 px-4 py-1 ">
                <span
                  style={{ fontFamily: "HiraMinStdN, sans-serif" }}
                  className="text- font-light leading-5"
                >
                  {section.subtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
