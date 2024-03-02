import React from "react";

function Section2() {
  return (
    <section className="max-container padding-container flex flex-col items-center justify-center gap-20 py-10 pb-32 md: gap-28 lg: py-10 xl: flex-row">
      <div className="w-full xl:w-1/2" style={{ marginTop: "50px" }}>
        <h3 className="bold-40 lg:bold-83 text-center mb-0">
          Profesyonel İşlemler Yapın
        </h3>
        <p className="py-5">
          En Düşük İşlem Ücretleri, En Hızlı İşlemler, Güçlü API Desteği ve Daha
          Fazlası
        </p>
        <video
          className="py-5"
          style={{ visibility: "visible" }}
          autoPlay
          loop
          muted
          playsInline
          width={936}
          height={536}
          src="https://www.okx.com/cdn/assets/files/2212/882D5049A31E763B.mp4"
          poster="https://www.okx.com/cdn/assets/imgs/233/939BF8112345BC9B.png?x-oss-process=image/format,webp"
        >
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
}

export default Section2;
