import Link from "next/link";

const footerLinks = [
  { href: "/company", label: "会員登録", english: "Company" },
  { href: "/terms", label: "運営会社", english: "Terms" },
  { href: "/terms1", label: "利用規約", english: "Terms" },
  {
    href: "/privacy",
    label: "個人情報の取扱について",
    english: "Privacy Policy",
  },
  { href: "/help", label: "特定商取引法に基づく表記", english: "Legal Notice" },
  { href: "/contact", label: "お問い合わせ", english: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#414141] text-white py-14 mt-auto">
      <div className="container mx-auto px-4 max-w-[960px]">
        <div className="flex flex-wrap justify-start text-sm gap-[45px]">
          {footerLinks.map((link) => (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="text-gray-300 hover:text-orange-400 transition-colors font-light text-[11px] leading-4 tracking-[0.03px]"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
