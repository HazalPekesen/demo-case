import Image from "next/image";
import Button from "./Button";

function Section1() {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] py-20 px-10">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h1 className="bold-52 lg:bold-83 xl:max-w-[520px]">
            Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü
          </h1>

          <p className="regular-16 text-gray-10"></p>
          <div className="flex w-full flex-col gap-6 whitespace-nowrap xl:flex-row">
            <input
              type="text"
              className="your-input-styles"
              placeholder="E-posta Adresi"
              style={{
                border: "1.5px solid #fff",
                padding: "23px 44px",
                fontSize: "15px",
              }}
            />

            <Button
              type="button"
              title="OKX'i Deneyimleyin"
              variant="btn_white"
              full
            />
          </div>

          <div className="flex w-full flex-col gap-20 whitespace-nowrap xl:flex-row 12 sm:flex-ro">
            <Image src="/svg1.svg" alt="svg1" width={120} height={100} />
            <Image src="/svg2.svg" alt="svg1" width={200} height={100} />
            <Image src="/svg3.svg" alt="svg1" width={66} height={100} />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <video
            className=""
            style={{
              boxSizing: "border-box",
              marginLeft: "400px",
              marginRight: "150px",
              paddingLeft: "37px",
              paddingRight: "57px",
            }}
            autoPlay
            loop
            muted
            playsInline
            width={350}
            height={580}
            poster="https://www.okx.com/cdn/assets/imgs/241/7952167B03F2361A.png?x-oss-process=image/format,webp"
          >
            <source
              src="https://www.okx.com/cdn/assets/files/241/32192407FC118924.webm"
              type="video/webm"
            />
            <source
              src="https://www.okx.com/cdn/assets/files/241/75CA241D6B3464F7.mp4"
              type="video/mp4"
            />
            <track kind="captions" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Section1;
