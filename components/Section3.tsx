import Button from "./Button";
import Image from "next/image";

function Section3() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md: gap-28 lg: py-20 xl: flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:flex-row">
        <Image
          src="/gorsel.svg"
          alt="gorsel"
          className="flex-shrink-0"
          style={{
            visibility: "visible",
            boxSizing: "border-box",
            marginLeft: "100px",
            marginRight: "80px",
            paddingLeft: "12px",
            paddingRight: "12px",
          }}
          width={427}
          height={30}
        />

        <div
          className="w-full xl:w-1/2"
          style={{ marginLeft: "10px", marginTop: "50px" }}
        >
          <h1 className="bold-52 lg:bold-83">Tek Platform, Sınırsız Özellik</h1>
          <br></br>
          <br></br>
          <div className="flex flex-col w-full gap-7 sm:flex-row">
            <Button
              type="button"
              title="OKX'i Deneyimleyin"
              variant="btn_white"
            />
          </div>
          <br></br>
          <br></br>
          <div className="flex flex-col w-full gap-12 sm:flex-row">
            <p>Kriptoda yeni misiniz? Hiç sorun değil. Tek dokunuşla 5 USD değerinde bile kripto satın alabilir ve ilerledikçe becerilerinizi geliştirebilirsiniz.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
