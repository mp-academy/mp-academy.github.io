"use client";

import Link from "next/link";

export default function Offer() {
  return (
    <div>
      <div
        id="hero"
        className="w-full flex flex-col items-center p-10 sm:p-20 gap-10 relative text-white"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: "url('/class.png')" }}
        ></div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-15">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl text-brand font-extrabold text-center text-shadow-md">
              Osiągnięcia Naszych Uczniów
            </h1>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() =>
                document
                  .querySelector("#achievements")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Zobacz
            </button>
          </div>
        </div>
      </div>

      <div
        id="achievements"
        className="scroll-mt-24 flex flex-col items-center sm:p-20 p-10 gap-10 w-full"
      >
        <h1 className="self-start text-2xl font-medium">
          Nasze <span className="font-bold">sukcesy</span> w liczbach:
        </h1>
        <div className="flex flex-col gap-3">
          <div className="bg-gray-100 p-10 shadow-md text-lg">
            <p className="font-medium text-black mb-4">
              Bo za każdą liczbą stoi prawdziwy uczeń i jego historia sukcesu. W
              MP Academy of English nie uczymy "pod klucz", tylko z pasją,
              zrozumieniem i skutecznością. Efekty mówią same za siebie: świetne
              wyniki, rosnąca pewność siebie i wielu zadowolonych uczniów oraz
              rodziców.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Zdawalność Egzaminu Ósmoklasisty na poziomie{" "}
                <span className="font-medium text-brand">98-100%</span> wśród
                naszych uczniów
              </li>
              <li>
                <span className="font-medium text-brand">100%</span> sukcesów na
                egzaminach Cambridge - B1 PET, B2 FCE, C1 CAE (166/170) – jeden
                z najwyższych wyników egzaminu B1 PET wśród naszych uczniów,
                zdany już w 5 klasie!
              </li>
              <li>
                <span className="font-medium text-brand">90%</span> uczniów
                wraca na kolejne poziomy lub kursy
              </li>
              <li>
                <span className="font-medium text-brand">100%</span> pozytywnych
                opinii od rodziców i uczniów – za atmosferę, skuteczność i
                zaangażowanie
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/offer">
                <button className="w-full">Umów Lekcję</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
