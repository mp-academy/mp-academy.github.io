"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Link from "next/link";

const bulletColors = ["#a1232b", "#ffcc05", "#4278b1", "#4f9149", "#be342a"];

const bulletItems = [
  {
    id: 1,
    title: "Kameralnie",
    description:
      "Maksymalnie 2-osobowe grupy - pełna uwaga lektora i indywidualne tempo pracy.",
    icon: "/iconDarkRed.svg",
    color: bulletColors[0],
  },
  {
    id: 2,
    title: "Lekcje premium",
    description:
      "Zajęcia indywidualne 1:1 dla osób, które cenią dopasowany program, elastyczność i szybkie efekty.",
    icon: "/logoFullV2.svg",
    color: bulletColors[1],
  },
  {
    id: 3,
    title: "Efektywnie",
    description:
      "98% i więcej na Egzaminie Ósmoklasisty, 100% zdawalności egzaminów Cambridge.",
    icon: "/iconBlue.svg",
    color: bulletColors[2],
  },
  {
    id: 4,
    title: "Zaangażowani lektorzy",
    description:
      "Doświadczeni nauczyciele, którzy naprawdę znają swoich uczniów.",
    icon: "/iconGreen.svg",
    color: bulletColors[3],
  },
  {
    id: 5,
    title: "Przyjazna atmosfera",
    description: "Nauka w komforcie, który motywuje do rozwoju.",
    icon: "/iconRed.svg",
    color: bulletColors[4],
  },
];

const exams = [
  {
    title: "Egzaminów Cambridge",
    logo: "https://images.seeklogo.com/logo-png/31/2/university-of-cambridge-logo-png_seeklogo-310247.png",
  },
  {
    title: "Konkursu Kuratoryjnego Języka Angielskiego",
    logo: "https://sp18.gdynia.pl/images/glowne/399-2194.png",
  },
  {
    title: "Olimpiady Języka Angielskiego",
    logo: "https://samorzad.gov.pl/photo/format/c6a04f5d-1e03-4773-a1eb-f71c13ac84f4/resolution/1920x810",
  },
  {
    title: "Egzaminu Ósmoklasisty",
    logo: "/e8.png",
  },
  {
    title: "Matury",
    logo: "https://images.seeklogo.com/logo-png/45/1/centralna-komisja-egzaminacyjna-logo-png_seeklogo-456601.png",
  },
];

export function BulletCarousel({
  onChange,
}: {
  onChange: (i: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 60,
        damping: 30,
      });
    }
    const iid = setInterval(() => {
      const newI = index === bulletItems.length - 1 ? 0 : index + 1;
      setIndex(newI);
      onChange(newI);
    }, 3000);
    return () => clearInterval(iid);
  }, [index, x, onChange]);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden" ref={containerRef}>
        <motion.div className="flex" style={{ x }}>
          {bulletItems.map((item) => (
            <div key={item.id} className="shrink-0 w-full p-5">
              <div className="flex items-center gap-5">
                <img src={item.icon} className="w-24 h-24" />
                <div>
                  <h1
                    className="font-bold text-lg"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h1>
                  <p className="text-xl mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Home() {
  const [bulletColor, setBulletColor] = useState(0);
  // const [attributionOpen, setAttributionOpen] = useState(false);
  return (
    <div>
      <div
        id="hero"
        className="w-full flex items-center p-10 sm:p-20 lg:gap-10 relative"
      >
        <div>
          <h3 className="text-6xl flex-1 w-[30vw] hidden lg:block">
            Tu uczniowie zaczynają mówić po angielsku -{" "}
            <span className="">pewnie, swobodnie, z radoscią!</span>
          </h3>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-10 flex-1">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl text-brand font-extrabold text-center text-shadow-md">
              <img src="LogoMPFULL.png" alt="logo" className="w-200" />
            </h1>
          </div>
          <h3 className="text-lg lg:hidden text-center">
            Tu uczniowie zaczynają mówić po angielsku -{" "}
            <span className="">pewnie, swobodnie, z radoscią!</span>
          </h3>
          <div className="flex flex-col lg:flex-row gap-2">
            <img src="BC.png" className="w-60 lg:w-80 self-start" />

            <div className="flex flex-col gap-2">
              <Link href="/offer" className="w-full! bg-brand text-white p-3 font-bold text-center">Umów Lekcję Dziś</Link>
              <button
                onClick={() =>
                  document
                    .querySelector("#bullets")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full"
              >
                Dowiedz się Więcej
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="bullets"
        className="scroll-mt-24 flex flex-col items-center sm:p-20 p-5 gap-10 w-full"
      >
        <h1 className="self-start text-2xl font-medium">
          Dlaczego{" "}
          <span
            className="font-semibold"
            style={{ color: bulletColors[bulletColor] }}
          >
            MP Academy of English?
          </span>
        </h1>
        <BulletCarousel onChange={setBulletColor} />
      </div>

      <div
        id="exams"
        className="scroll-mt-24 flex flex-col items-center sm:p-20 p-5 gap-10 w-full border-t-2 border-gray-200 bg-gray-50"
      >
        <h1 className="self-start text-2xl font-medium">
          Przygotujemy do najważniejszych{" "}
          <span className="font-bold text-brand">egzaminów:</span>
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          {exams.map((e) => (
            <div
              key={e.title}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-24 flex items-center justify-center mb-4">
                {/*<img
                  src={e.logo}
                  alt={e.title}
                  className="max-w-full max-h-full object-contain"
                />*/}
              </div>
              <p className="text-base font-medium">{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        id="location"
        className="scroll-mt-24 flex flex-col md:flex-row items-start sm:p-20 p-5 gap-10 w-full border-t-2 border-gray-200"
      >
        <div className="w-full md:w-2/3 h-64 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d390.6437295104751!2d18.574960191971172!3d54.43355385876269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0be33c55cab1%3A0x3837d99634d3f1f0!2sMania%20Pisania%20Academy%20of%20English!5e0!3m2!1sen!2spl!4v1761488462982!5m2!1sen!2spl"
            loading="eager"
            style={{ border: 0 }}
            allowFullScreen
            className="w-full h-full rounded-2xl shadow-sm"
          ></iframe>
        </div>
        <h1 className="text-2xl font-medium md:w-1/3 text-end">
          Dostępna <span className="font-bold text-brand">lokalizacja</span> w
          centrum Sopotu.
        </h1>
      </div>
      <div
        id="offer"
        className="scroll-mt-24 flex flex-col items-center sm:p-20 p-5 gap-10 w-full border-t-2 border-gray-200 bg-gray-50"
      >
        <h1 className="text-2xl font-medium">
          Gotowy spróbować nauki z{" "}
          <span className="font-bold text-brand">native speakerami?</span>
        </h1>
        <Link href="/offer">
          <button>
            Zobacz naszą <span className="font-bold">ofertę</span>
          </button>
        </Link>
      </div>
      {/*<div className="bg-gray-100 p-5 text-center text-sm text-neutral-400 font-sans!">
        <a
          onClick={() => setAttributionOpen(!attributionOpen)}
          className="font-medium hover:underline cursor-pointer"
        >
          Zamieszczone logotypy są własnością odpowiednich instytucji
          <span className="ml-2">{attributionOpen ? "▲" : "▼"}</span>
        </a>

        {attributionOpen && (
          <div className="space-y-2 break-all text-xs md:text-sm">
            {exams.map((e) => (
              <p key={e.title}>
                {e.title}:{" "}
                <a
                  href={e.logo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {e.logo}
                </a>
              </p>
            ))}
          </div>
        )}
      </div>*/}
    </div>
  );
}
