"use client";

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
              Nasza Oferta
            </h1>
            <p className="text-lg font-medium">Umów Lekcje z Nami</p>
          </div>

          <h3 className="text-xl text-center">
            Wybierz idealną dla Ciebie formę nauki -{" "}
            <span className="text-brand font-medium">
              na miejscu, online lub grupowo!
            </span>
            <br></br>
            Oferujemy zajęcia dla{" "}
            <span className="text-brand font-medium">dzieci</span> od 3 klasy
            szkoły podstawowej oraz dla{" "}
            <span className="text-brand font-medium">dorosłych</span>, na każdym
            poziomie zaawansowania.
            <br></br>
            Uczymy skutecznie, nowocześnie i z indywidualnym podejściem do
            potrzeb każdego ucznia.
          </h3>
          <div className="flex gap-2">
            <button
              onClick={() =>
                document
                  .querySelector("#lessons")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Wybierz Teraz
            </button>
          </div>
        </div>
      </div>

      <div
        id="lessons"
        className="scroll-mt-24 flex flex-col items-center sm:p-20 p-5 gap-10 w-full"
      >
        <h1 className="self-start text-2xl font-medium">
          Nasza <span className="font-bold">Oferta:</span>
        </h1>
        <div className="flex flex-col gap-3">
          <div className="flex md:flex-row flex-col gap-6 w-full bg-gray-100 p-6 shadow-md">
            <div className="flex flex-col h-full justify-between">
              <h1 className="text-brand font-bold text-lg">
                Lekcje indywidualne Premium
                <span className="font-medium text-black ml-1">
                  z założycielką szkoły, doświadczoną nauczycielką z wieloletnią
                  praktyką i sukcesami egzaminacyjnymi. Dla najbardziej
                  wymagających uczniów i dorosłych w pełni spersonalizowany tok
                  nauki.
                </span>
              </h1>
              <br />
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/school-maniapisania/",
                    "_blank"
                  )
                }
              >
                Umów Lekcję z P. Asią
              </button>
            </div>

            <img
              src="/Asia MP.png"
              className="w-full object-cover object-top rounded-lg overflow-hidden"
            />
          </div>
          <h1 className="bg-gray-100 p-10 shadow-md text-brand font-bold text-lg">
            Lekcje z native speakerem
            <span className="font-medium text-black ml-1">
              - mówisz od pierwszej minuty, bez stresu, bez tłumaczenia - za to
              z humorem, praktyką i prawdziwym językiem życia codziennego.
              Poznaj idiomy, akcent i kulturę prosto ze źródła!
            </span>
            <br />
            <br />
            <button
              className="w-full"
              onClick={() =>
                window.open(
                  "https://calendly.com/school-maniapisania/",
                  "_blank"
                )
              }
            >
              Umów Lekcję Z Native Speakerem
            </button>
          </h1>
        </div>
      </div>
    </div>
  );
}
