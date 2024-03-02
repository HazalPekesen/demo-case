import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SOCIALS } from "@/constants";
import { link } from "fs";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-10 mt-20">
        <div className="flex flex-col items-start justify-start gap-[10%] md:flex-row">
          <Link href="/">
            <Image src="/indir.png" alt="logo" width={72} height={29} />
          </Link>
        </div>
        <div >
          ©2017 - 2024 OKX.COM
        </div>
        <div className="flex flex-wrap gap-10 sm: justify-between md:flex-1">
          {FOOTER_LINKS.map((columns) => (
            <FooterColumnn title={columns.title}>
              <ul className=" regular-14 flex flex-col gap-4">
                {columns.links.map((link) => (
                  <Link href="/" key={link}>
                    {link}
                  </Link>
                ))}
              </ul>
            </FooterColumnn>
          ))}
          <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">
              OKX Uygulaması ile Dilediğiniz Zaman İşlem Yapabilirsiniz
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <FooterColumnn title={SOCIALS.title}>
            <ul className="regular-14 flex gap-4">
              {SOCIALS.links.map((link) => (
                <Link href="/" key={link}>
                  <Image src={link} alt="logo" width={24} height={24} />
                </Link>
              ))}
            </ul>
          </FooterColumnn>
        </div>
      </div>
    </footer>
  );
};

type FooterColumnnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumnn = ({ title, children }: FooterColumnnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
