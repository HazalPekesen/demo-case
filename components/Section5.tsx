import Image from "next/image";
import Button from "./Button";

function Section5() {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24 flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-[70%]">
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-40 xl:max-w-[390px]">OKX nedir?</h2>
          </div>
          <p className="regular-16 xl:max-w-[520px] mt-4">
            Birinci sınıf iş ortaklarımızın yardımıyla neden yeni favori kripto
            uygulamanızın biz olduğumuzu öğrenin.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row mt-10">
            <Button
              type="button"
              title="Keşfet"
              variant="btn_white"
            />
          </div>
        </div>
        <div className="lg:w-[30%] flex justify-center lg:justify-end mt-20 lg:mt-0 pt-44">
          <Image
            src="/indir.png"
            alt="logo"
            width={526}
            height={596}
            className="inline-block cursor-pointer"
          />
        </div>
      </div>

      <section className="video-section flex flex-wrap justify-center gap-3">
        <div className="video-item">
          <video
            className="video-content"
            controls
            playsInline
            src="https://www.okx.com/cdn/assets/files/2210/B961D658AE174818.mp4"
            poster="https://www.okx.com/cdn/assets/imgs/2211/30151288EAF5AEE6.jpg?x-oss-process=image/format,webp"
          >
            <track kind="captions" />
          </video>
          <div className="video-text">
            <p className="video-title">Teknik Direktör Pep Guardiola</p>
            <p className="video-desc">
              “Çılgın futbol formasyonu”nu açıklıyor.
            </p>
          </div>
        </div>

        <div className="video-item">
          <video
            className="video-content"
            controls
            playsInline
            src="https://www.okx.com/cdn/assets/files/2210/D583B0A2F58732CD.mp4"
            poster="https://www.okx.com/cdn/assets/imgs/2211/8D4C3E2605F69059.jpg?x-oss-process=image/format,webp"
          >
            <track kind="captions" />
          </video>
          <div className="video-text">
            <p className="video-title">F1 Pilotu Daniel Ricciardo</p>
            <p className="video-desc">
              “OKX bir yarış arabası mı” diye soruyor.
            </p>
          </div>
        </div>

        <div className="video-item">
          <video
            className="video-content"
            controls
            playsInline
            src="https://www.okx.com/cdn/assets/files/2210/CCAA7B610D3D33D4.mp4"
            poster="https://www.okx.com/cdn/assets/imgs/2211/EF1304B5D4D9DB3E.jpg?x-oss-process=image/format,webp"
          >
            <track kind="captions" />
          </video>
          <div className="video-text">
            <p className="video-title">Snowboard Yarışçısı Scotty James</p>
            <p className="video-desc">Tüm aileyi bir araya getiriyor.</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Section5;
