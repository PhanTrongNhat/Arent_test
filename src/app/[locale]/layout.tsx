import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
// import { ThemeProvider } from "next-themes";
import { getLocale, getMessages } from "next-intl/server";
import Footer from "@/components/Footer";
// import OptimizedNavigation from "@/components/Navigatiton";
import Header from "@/components/Header";
import Script from "next/script";
import { Toaster } from "sonner";
import { GoToTop } from "@/components/GoToTo";

type Props = {
  children: React.ReactNode;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Lấy messages
  const messages = await getMessages({ locale });

  const jsonLd = {
    "@context": "https://beenonetech.com/",
    "@type": "Store",
    name: "HomePage",
    image:
      "https://beenonetech.com/wp-content/uploads/2023/02/people-sitting-while-discussing-img-bg.jpg",
    description:
      "Our wide range of services can be custom tailored to your specific needs to ensure your success.",
  };

  return (
    // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <NextIntlClientProvider locale={locale} messages={messages}>
      {/* <OptimizedNavigation></OptimizedNavigation> */}

      <>
        <Header />
        {children}
        <Footer />
      </>

      <Toaster />
      <GoToTop />
      <Script
        id="json-ld-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
        strategy="lazyOnload"
      />
      {/* {children} */}
    </NextIntlClientProvider>
    // </ThemeProvider>
  );
}
