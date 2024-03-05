/** @format */

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import Button from "./Button";

// images
import databiz from "@/assets/images/client-databiz.svg";
import audiophile from "@/assets/images/client-audiophile.svg";
import meet from "@/assets/images/client-meet.svg";
import maker from "@/assets/images/client-maker.svg";

import hremoImagedesktop from "@/assets/images/image-hero-desktop.png";
import hremoImageMobile from "@/assets/images/image-hero-mobile.png";

export default function Home() {
  const bannerImages = [databiz, meet, maker];

  return (
    <div className="max-container min-h-screen w-full">
      <Navbar />
      {/* hero */}
      <section className="mx-auto flex max-w-6xl  flex-col gap-2 px-8 py-10 pb-12 transition-all md:flex-row md:gap-4 ">
        {/* left div */}
        <div className=" flex flex-col items-center  gap-6 pt-6 text-center md:w-1/2 md:items-start md:gap-10 md:pt-32 md:text-left">
          <Balancer>
            <h1 className="text-3xl font-semibold md:text-6xl">
              Ortalama Kripto Borsalarından Daha Hızlı, Daha İyi, Daha Güçlü
            </h1>
          </Balancer >

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

          <div className="flex gap-4 md:gap-6 mb-20">
            {bannerImages.map((img, i) => (
              <Image
                className=" h-12 w-auto"
                key={i}
                src={img}
                alt="client-image"
              />
            ))}
          </div>
        </div>

        {/* right div */}
        <section className="md:w-1/2 ">
          <video
            className="hidden h-auto max-w-[500px]  md:block"
            style={{
              boxSizing: "border-box",
              marginLeft: "200px",
              marginTop: "50px",
            }}
            autoPlay
            loop
            muted
            playsInline
            width={280}
            height={480}
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
          <video
            className="h-auto md:hidden mx-auto text-center"
            style={{
              boxSizing: "border-box",
            }}
            autoPlay
            loop
            muted
            playsInline
            width={200}
            height={180}
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
        </section>
        
      </section>
    </div>
  );
}
