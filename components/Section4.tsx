import React from "react";

function Section4() {
  return (
    <section className="max-container padding-container flex flex-col items-center justify-center gap-20 py-10 pb-32">
      <div className="w-full xl:w-1/2" style={{ marginTop: "50px" }}>
        <h3 className="bold-40 lg:bold-83 text-center mb-0">
          Yolculuğunuzun Her Aşamasında Sizinle
        </h3>
        <p className="py-5 text-center">
          İlk kripto al-sat deneyiminizden ilk NFT işleminize kadar, tüm süreç
          boyunca size rehberlik edeceğiz.
        </p>
        <video
          className="third-pc-animation"
          style={{ visibility: "visible" }}
          autoPlay
          loop
          muted
          playsInline
          width={936}
          height={253}
          src="https://www.okx.com/cdn/assets/files/2210/D47D930F643E7A00.webm"
          poster="https://www.okx.com/cdn/assets/imgs/2210/2763D233C494439D.jpg?x-oss-process=image/format,webp"
        >
          <track kind="captions" />
        </video>
      </div>
    </section>
  );
}

export default Section4;
