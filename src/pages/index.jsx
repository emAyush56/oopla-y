import { useState } from "react";

import PagesHeader from "@/components/shared/PagesHeader";
import PagesFooter from "@/components/shared/PagesFooter";
import Image from "next/image";

const images = [
  { src: "/img/f_suchismita.webp", alt: "Oopla user" },
  { src: "/img/m_prithish.webp", alt: "Oopla user" },
  { src: "/img/f_laijou.webp", alt: "Oopla user" },
  { src: "/img/m_dipjyoti.webp", alt: "Oopla user" },
  { src: "/img/f_barsha.webp", alt: "Oopla user" },
];

function Home() {
  const [quoraClicked, setQuoraClicked] = useState(false);
  const [twitterClicked, setTwitterClicked] = useState(false);
  const [instagramClicked, setInstagramClicked] = useState(false);
  const [redditClicked, setRedditClicked] = useState(false);

  return (
    <div className="wrapper relative">
      <PagesHeader />
      <section className="hero mx-auto flex max-w-[74rem]">
        <div className="hero__left w-full px-6 lg:px-4">
          <div className="hero__left_1 cc-hero-height flex flex-col justify-center">
            <h1 className="cursor-default text-4xl font-semibold leading-tight lg:w-[36rem] lg:text-[3.5rem]">
              Connecting hearts beyond swipes, from
              <span className="text-theme-purple-500x"> browsing habits</span>
            </h1>
            <p className="mt-6 text-gray-600 lg:w-[36rem]">
              Oopla is a new dating platform that finds and matches users based
              their browsing habits. Find the partner you were looking for.
            </p>
            <div className="mt-7">
              <button className="flex items-center gap-2.5 rounded-full bg-theme-purple py-1.5 pl-6 pr-5 text-white transition-all hover:bg-theme-purple-500 lg:py-2 lg:pl-7 lg:pr-6">
                <span className="text-lg lg:text-xl">
                  Download <span className="lg:hidden">in PC</span> for
                </span>
                <Image
                  src="/img/chrome_logo.svg"
                  alt="chrome logo"
                  height={28}
                  width={28}
                  className="h-[28px] rounded-full border border-white lg:h-[28px] lg:border-2"
                />
              </button>
            </div>
          </div>

          <div className="hero__left_2 flex flex-col justify-center lg:h-screen">
            <h2 className="text-4xl font-semibold leading-tight lg:w-[36rem] lg:text-[3.5rem]">
              Let your common online interests find you{" "}
              <span className="text-theme-purplex">better dates</span>
            </h2>
            <p className="mt-6 text-gray-600 lg:w-[36rem]">
              If you are an Iron Man fan, we will recommend you to someone who
              watched RDJs Sherlock Holmes or likes Marvel movies.
            </p>
            <div className="mt-7 flex w-[14rem] select-none flex-wrap gap-x-3 gap-y-2.5">
              <div
                onClick={() => setQuoraClicked((prev) => !prev)}
                className={`w-fit cursor-pointer rounded-full border border-dashed border-quora px-5 py-1 text-quora transition-all active:scale-90 ${
                  quoraClicked && "bg-quora text-white"
                }`}
              >
                Quora
              </div>
              <div
                onClick={() => setTwitterClicked((prev) => !prev)}
                className={`w-fit cursor-pointer rounded-full border border-dashed border-twitter px-5 py-1 text-twitter transition-all active:scale-90 ${
                  twitterClicked && "bg-twitter text-white"
                }`}
              >
                Twitter
              </div>
              <div
                onClick={() => setInstagramClicked((prev) => !prev)}
                className={`w-fit cursor-pointer rounded-full border border-dashed border-instagram-2 bg-gradient-to-r from-instagram-1 to-instagram-2 px-5 py-1 transition-all active:scale-90 ${
                  instagramClicked
                    ? "border-transparent text-white"
                    : "bg-clip-text text-transparent"
                }`}
              >
                Instagram
              </div>
              <div
                onClick={() => setRedditClicked((prev) => !prev)}
                className={`w-fit cursor-pointer rounded-full border border-dashed border-reddit px-5 py-1 text-reddit transition-all active:scale-90 ${
                  redditClicked && "bg-reddit text-white"
                }`}
              >
                Reddit
              </div>
            </div>
          </div>
        </div>

        <div className="right cc-hero-height sticky top-[45px] hidden w-full flex-col gap-4 overflow-hidden pt-4 text-right text-2xl lg:flex">
          <div className="img_wrapper ml-auto space-y-4">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                className="h-[18rem] rounded-[1.4rem] border border-dashed transition-all hover:scale-95"
                width={391}
                height={288}
              />
            ))}
          </div>
          <div className="img_wrapper ml-auto space-y-4">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img.src}
                alt={img.alt}
                className="h-[18rem] rounded-[1.4rem] border border-dashed transition-all hover:scale-95"
                width={391}
                height={288}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section2 mx-auto my-20 flex max-w-[74rem] border border-dashed border-gray-300 px-4 py-60">
        <div className="section2__left w-full bg-gray-50"></div>
        <div className="section2__right w-full">
          <h2 className="text-6xl font-semibold leading-tight">
            Pass, Like and Date from curated matches.
          </h2>
        </div>
      </section> */}

      <section className="section3 mx-4 mb-24 mt-40 max-w-[74rem] border border-dashed border-gray-300 px-4 py-28 lg:mx-auto lg:my-20 lg:mb-14 lg:py-44">
        <div className="section2__right mx-auto flex flex-col items-center lg:w-[44rem]">
          <h2 className="text-center text-4xl font-semibold leading-tight lg:text-[3.5rem]">
            Pass, Like and Date from curated matches
          </h2>
          <button className="mt-10 flex items-center gap-2.5 rounded-full bg-theme-purple px-6 py-1.5 text-white transition-all hover:bg-theme-purple-500 lg:px-8 lg:py-2">
            <span className="text-lg lg:text-xl">
              Download & Signup <span className="lg:hidden">in PC</span>
            </span>
          </button>
        </div>
      </section>

      <PagesFooter />
    </div>
  );
}

export default Home;
