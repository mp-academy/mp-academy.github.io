import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MP Academy",
  description: "Szkoła Języka Angielskiego w Sopocie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Nova+Square&family=Press+Start+2P&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <div className="bg-gray-100 p-10 text-center" id="footer">
          <p>
            <span className="font-bold">Kontakt:</span>
            <br />
            MP Academy of English,{" "}
            <a
              href="https://mp-academy.pl"
              className="text-blue-500 hover:underline"
            >
              www.mp-academy.pl
            </a>{" "}
            <br />
            E-mail:{" "}
            <a
              href="mailto:school.maniapisania@gmail.com"
              className="text-blue-500 hover:underline"
            >
              school.maniapisania@gmail.com
            </a>{" "}
            <br />
            Telefon:{" "}
            <a href="tel:48602442288" className="text-blue-500 hover:underline">
              +48 602 442-288
            </a>
            <br />
            Sopot, ul. Polna 54B/2
          </p>

          <p className="mt-4">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mp-academy"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/mp-academy
            </a>
            <br />
            Instagram:{" "}
            <a
              href="https://www.instagram.com/mp-academy/english"
              className="text-blue-500 hover:underline"
            >
              instagram.com/mp-academy/english
            </a>
            <br />
            Facebook:{" "}
            <a
              href="https://www.facebook.com/mp_acedemy_of_english"
              className="text-blue-500 hover:underline"
            >
              facebook.com/mp_acedemy_of_english
            </a>
            <br />
            Calendly:{" "}
            <a
              href="https://calendly.com/school-maniapisania"
              className="text-blue-500 hover:underline"
            >
              calendly.com/school-maniapisania
            </a>
          </p>

          <p className="text-gray-500 mt-4">
            &copy; {new Date().getFullYear()}, Joanna Ryan
          </p>
        </div>
      </body>
    </html>
  );
}
