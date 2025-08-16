"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { MedalIcon, NotificationIcon, RecordsIcon } from "./Icons";
import { useEffect, useState } from "react";

const navigationItems = [
  {
    href: "/records",
    label: "自分の記録",
    english: "My Records",
    icon: <RecordsIcon />,
  },

  {
    href: "/challenge",
    label: "チャレンジ",
    english: "Challenge",
    icon: <MedalIcon />,
  },
  {
    href: "/notifications",
    label: "お知らせ",
    english: "Notifications",
    icon: <NotificationIcon />,
    hasMessages: true,
  },
];

const dropdownMenuItems = [
  { href: "/records", label: "自分の記録" },
  { href: "/records/body", label: "体重グラフ" },
  { href: "/goals", label: "目標" },
  { href: "/course", label: "選択中のコース" },
  { href: "/columns", label: "コラム一覧" },
  { href: "/settings", label: "設定" },
];

export default function Header() {
  const [messageCount, setMessageCount] = useState(2);

  useEffect(() => {
    setMessageCount(2);
  }, [messageCount]);

  return (
    <header className="bg-[#414141] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-orange-400 hover:text-orange-300 transition-colors"
          >
            <Image
              width={109}
              height={40}
              src={"/Imagine/logo.png"}
              alt={"logo"}
            />
          </Link>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-8 mr-10">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontFamily: "HiraMinStdN, sans-serif" }}
                  className="font-hira flex gap-2 text-white hover:text-orange-400  items-center transition-colors font-medium"
                >
                  <div className="relative">
                    {item.icon && <>{item.icon} </>}
                    {item.hasMessages && messageCount > 0 && (
                      <div className="bg-red-500 absolute -right-2 -top-2 text-white rounded-full p-1 text-[10px] w-4 h-4 flex justify-center items-center">
                        {messageCount > 99 ? "99+" : messageCount}
                      </div>
                    )}
                  </div>

                  {item.label}
                </Link>
              ))}
            </nav>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-orange-400"
                >
                  <Menu
                    className="!h-8 !w-8"
                    color="#FF963C"
                    width={32}
                    height={32}
                  />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-48 bg-gray-700 border-gray-600 text-white"
                sideOffset={8}
              >
                {dropdownMenuItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link
                      href={item.href}
                      style={{ fontFamily: "HiraMinStdN, sans-serif" }}
                      className="w-full px-3 py-2 text-white hover:text-orange-400 hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
