import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matheus Bernardes Spilari | Software Developer",
  description:
    "Portfólio de Matheus Bernardes Spilari, Desenvolvedor de Software especializado em criar soluções eficientes e escaláveis. Com experiência em diversas tecnologias, como Java, Javascript, Typescript, NodeJs, Spring Boot, React, Angular, NextJs, NestJs, MongoDb, PostgreSQL, Firebase e Docker, entrego projetos personalizados que atendem às necessidades dos clientes e superam expectativas. Explore meus trabalhos recentes e veja como posso ajudar a transformar suas ideias em realidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/iconYb.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
