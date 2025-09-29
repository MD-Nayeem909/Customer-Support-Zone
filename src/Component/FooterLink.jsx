import React from "react";

const FooterLink = ({ arrayOfName, isIcon = false }) => {
  const iconPath = ["X", "in", "fb", "message"];
  return (
    <ul className="space-y-4 flex flex-col justify-center items-center md:items-start">
      {arrayOfName.map((name, index) => {
        const imagePath = `/src/assets/${iconPath[index - 1]}.png`;
        if (index === 0) {
          return (
            <h2 key={index} className="font-bold text-2xl">
              {name}
            </h2>
          );
        } else {
          return (
            <li key={index} className="text-[#A1A1AA]">
              <a href="" className="flex items-center gap-2">
                {isIcon ? (
                  <img
                    src={imagePath}
                    alt=""
                    className=" w-[20px] h-[20px]"
                  />
                ) : (
                  ""
                )}
                {name}
              </a>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default FooterLink;
