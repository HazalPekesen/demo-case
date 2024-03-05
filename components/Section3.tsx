import Button from "./Button";
import Image from "next/image";

function Section3() {
  return (
    <section className="mx-auto flex max-w-6xl  flex-col-reverse gap-2 pb-12 transition-all md:flex-row md:gap-4 ">
      {/* left div */}
      <div className=" flex flex-col items-center  gap-6 pt-6 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
        <Image
          src="/gorsel.svg"
          alt="gorsel"
          className="mx-auto text-center"
          style={{
            visibility: "visible",
            boxSizing: "border-box",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
          width={327}
          height={30}
        />
      </div>

      <div className=" flex flex-col items-center  gap-6 pt-6 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
        <h1 className="bold-52 lg:bold-83">Tek Platform, Sınırsız Özellik</h1>
        <div className="flex flex-col w-full gap-7 sm:flex-row ml- -mx-20">
          <div className="max-w-3xl mx-auto px-8 sm:px-0">
            <div className="sm:w-7/12 sm:mx-auto">
              <div
                role="tablist"
                aria-label="tabs"
                className="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded-full bg-black overflow-hidden shadow-2xl shadow-900/20 transition"
              >
                <div className="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-black shadow-md"></div>
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="panel-1"
                  id="tab-1"
                  tabIndex={0}
                  className="relative block h-10 px-6 tab rounded-full"
                >
                  <span className="text-white">Borsa</span>
                </button>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="panel-2"
                  id="tab-2"
                  tabIndex={-1}
                  className="relative block h-10 px-6 tab rounded-full"
                >
                  <span className="text-white">Web3</span>
                </button>
              </div>
              <div className="flex flex-col w-full gap-12 sm:flex-row">
                <div
                  role="tabpanel"
                  id="panel-1"
                  className="tab-paneltransition duration-300"
                >
                  <p className="mt-4 text-white">
                    Kriptoda yeni misiniz? Hiç sorun değil. Tek dokunuşla 5 USD
                    değerinde bile kripto satın alabilir ve ilerledikçe
                    becerilerinizi geliştirebilirsiniz.
                  </p>
                </div>
                <div
                  role="tabpanel"
                  id="panel-2"
                  className="absolute top-0 invisible opacity-0 tab-panel transition duration-300"
                >
                  <p className="mt-4 text-white">
                    Tüm favori zincirlerinizi destekleyen dünyanın en iyi NFT
                    pazar yeri, DEX’i ve cüzdanını keşfedin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right div */}
    </section>
  );
}

export default Section3;