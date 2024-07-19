import "../src/styles/globals.css";
import { Metadata } from "next";
import { lobster, theNautigal } from "@config/fonts";
import { AuthenticationProvider } from "@context/authentication";
import { LanguageProvider } from "@context/language";
import { Header } from "@components/03_Organisms/Header";

export const metadata: Metadata = {
  title: "MSpilari | Fullstack Developer",
  description:
    "Matheus Bernardes Spilari, MSpilari, FullStack Developer, portfólio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lobster.variable} ${theNautigal.variable} font-lobster`}
    >
      <link rel="icon" href="/Logo.png" />

      <AuthenticationProvider>
        <LanguageProvider>
          <body>
            <main className="w-dvw h-dvh lg:flex overflow-hidden">
              <Header />

              {children}
            </main>
          </body>
        </LanguageProvider>
      </AuthenticationProvider>
    </html>
  );
}
