/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Kripto Satın Al",
    link: "#",
    children: [
      {
        label: "Hızlı Kripto Satın Al",
        link: "#",
        iconImage: todoImage
      },
      {
        label: "P2P İşlemleri",
        link: "#",
        iconImage: calendarImage
      },
      {
        label: "Diğer Ödeme Yöntemleri",
        link: "#",
        iconImage: remindersImage
      },
    ]
  },
  {
    label: "Keşfet",
    link: "#",
    children: [
      {
        label: "Piyasalar",
        link: "#"
      },
      {
        label: "Fırsatlar",
        link: "#"
      },
      {
        label: "Copy Trade",
        link: "#"
      }
    ]
  },
  {
    label: "Al-Sat",
    link: "#",
    children: [
      {
        label: "Dönüştür",
        link: "#"
      },
      {
        label: "Spot İşlemler",
        link: "#"
      },
      {
        label: "Vadeli İşlemler",
        link: "#"
      },
      {
        label: "Marjin İşlemleri",
        link: "#"
      },
      {
        label: "Opsiyonlar",
        link: "#"
      },
      {
        label: "Al-Sat Botları",
        link: "#"
      },
      {
        label: "Copy Trade",
        link: "#"
      },
      {
        label: "Likit Piyasa",
        link: "#"
      },
    ]
  },
  {
    label: "Finans",
    link: "#",
    children: [
      {
        label: "Earn",
        link: "#"
      },
      {
        label: "C2C Kredi",
        link: "#"
      },
      {
        label: "Jumpstart",
        link: "#"
      },
    ]
  },
  {
    label: "Oluştur",
    link: "#",
    children: [
      {
        label: "Earn",
        link: "#"
      },
      {
        label: "C2C Kredi",
        link: "#"
      },
    ]
  },
  {
    label: "Kurumsal",
    link: "#",
    children: [
      {
        label: "Earn",
        link: "#"
      },
      {
        label: "C2C Kredi",
        link: "#"
      },
    ]
  },
  {
    label: "Daha Fazlası",
    link: "#",
    children: [
      {
        label: "Earn",
        link: "#"
      },
      {
        label: "C2C Kredi",
        link: "#"
      },
    ]
  },
  {
    label: "OKX TR",
    link: "#"
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-2 py-2 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Image src={logo} alt=" logo" width={74}
          height={29}
          style={{ marginLeft: "auto" }}/>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-black py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      <section className=" hidden md:flex   items-center gap-8 ">

      <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={29}
        />

        <button className="h-fit text-neutral-400 transition-all hover:text-white/90">
          Giriş Yap
        </button>

        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-white hover:text-white/90">
          Kaydol
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-black px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            Giriş Yap
          </button>

          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Kaydol
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-black py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}