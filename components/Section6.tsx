"use client";
import classnames from "classnames";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface Item {
  title: string; // Item tipini örnek olarak belirttim, gerçek veri yapısına uygun olarak güncellemeniz gerekir.
  text: string;
  open: boolean;
  idx: number;
}

interface Section6Props {
  items: Item[];
}

function Section6({ items }: Section6Props) {
  const list = items.map((listItems, idx) => {
    return { ...listItems, open: false, idx: idx };
  });

  const [accordion, setAccordion] = useState(list);

  function openOrClose(item : Item) {
    setAccordion(
      accordion.map((listItems) => {
        if (item.idx == listItems.idx)
          return {
            ...listItems,
            open: !listItems.open,
          };
        return listItems;
      })
    );
  }

  return (
    <div>
      <h3 className="bold-40 lg:bold-83 text-center mb-10 mt-20">
        Sorularınız mı var?
      </h3>
      {accordion.map((item: Item, idx: number) => (
        <div key={idx}>
          <h2>
            <button
              type="button"
              onClick={() => openOrClose(item)}
              className={`flex w-full items-center justify-center p-5 font-medium ${
                idx === 0 ? "rounded-t-xl" : ""
              }`}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={26}
                className="transition-transform duration-200"
              />
            </button>
          </h2>
          <div className={classnames("p-10", { hidden: !item.open })}>
            <div className="p-10  border border-gray">
              <p>{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section6;
