import { NAV_LINKS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-3">
      <Link href="/">
        <Image
          src="/indir.png"
          alt="logo"
          width={74}
          height={29}
          style={{ marginLeft: "auto" }}
        />
      </Link>
      <ul className="hidden h-full gap-8 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={29}
        />
      <div className="lg:flexCenter hidden">
        <Button type="button" title="Kaydol" variant="btn_dark_green" />
      </div>

      <Image
        src="menu1.svg"
        alt="menu"
        width={26}
        height={26}
        className="inline-block cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
