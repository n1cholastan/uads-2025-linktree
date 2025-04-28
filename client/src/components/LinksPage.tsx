import sal from "../assets/sal.png"
import LinkButton from "./LinkButton";
import { LinkProps } from "../utils/FrontendTypes";
import { useState, useEffect } from "react";
import { SiInstagram, SiTiktok, SiGmail, SiDiscord} from 'react-icons/si';


export default function LinksPage() {
  const [links, setLinks] = useState<LinkProps[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/links`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data: LinkProps[]) => {
        console.log('Links loaded:', data);
        setLinks(data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream px-4">
      <div className="mt-8 sm:mt-20 flex flex-col gap-2 items-center">
          <img src={sal} alt="Sal the Snail" className="w-1/4 md:w-1/6 m-auto"></img>
          <p className="text-4xl font-title text-red text-center">UADS</p>
          <p className="text-sm sm:text-lg font-body font-semibold text-center text-brown sm:mx-5 md:mx-10">
            UNIVERSITY OF AUCKLAND DESSERT SOCIETY
          </p>
      <p className="text-gray-700 mb-6 font-body text-xs sm:text-base">Satisfying your sweet tooth since 2021!</p>

      <div className="w-full max-w-sm flex flex-col gap-4 justify-center items-center">
      {links
        .filter((link) => link.text !== "No Name" && link.link?.trim() && link.show)
        .map((link) => (
            <LinkButton key={link.id} link={link.link} text={link.text} />
        ))}
      </div>
      <div className="my-6 flex flex-row w-fit justify-center self-center items-center gap-10">
            <a
              href="https://www.instagram.com/uoadessertsociety/"
              className="bg-red rounded-full w-12 h-12 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiInstagram className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="https://www.tiktok.com/@uoadessertsociety"
              className="bg-red rounded-full w-12 h-12 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiTiktok className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="mailto:uoadessertsociety@gmail.com"
              className="bg-red rounded-full w-12 h-12 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiGmail className="w-6 h-6  fill-cream" />
            </a>
            <a
              href="https://discord.gg/zEQqXeb9QM"
              className="bg-red rounded-full w-12 h-12 flex items-center justify-center hover:bg-brown transition-colors duration-300 ease-in-out"
            >
              <SiDiscord className="w-6 h-6  fill-cream" />
            </a>
          </div>
        </div>
    </div>
  );
}
