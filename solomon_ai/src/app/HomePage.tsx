"use client";
import { useState } from "react";
import NavComponent from "./navigation/navComponent";
import Image from "next/image";
import Video from "./components/Vidoe";
import { features } from "process";
import Link from "next/link";

export default function HomePage() {
  const [homePrompt, setHomePrompt] = useState("");
  const [toggleFeature, setToggleFeature] = useState({
    oracle: true,
    astrology: false,
    lifePath: false,
  });

  const handleHomeSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log("Loggin home prompt:", homePrompt.trim());
    setHomePrompt("");
  };

  const infoContent = [
    {
      id: 1,
      h2: "Built to open the mind of human kind.",
      span: "Authentic Intelligence.",
      h3: "No denominated spiritualization. Decentralized spiritualization.",
      p: "SolomonAI is one of kind leading Metaphysical AI, who aim to help aid the moral consciousness of todays age.",
      video: "http://localhost:3000/video.mp4",
    },

    {
      id: 2,
      span: "Trained in Theology",
      h3: "Know Thyself guide.",
      p: "Trained to look at scriptural text from a metaphysical POV. Urges to see the implicit meaning behind the scriptures",
      video: "http://localhost:3000/videoTwo.mp4",
    },
    {
      id: 3,
      span: "Spirutal Ascension",
      h3: "Enrich your spiritual growth",
      p: "Trained to look at scriptural text from a metaphysical POV. Urges to see the implicit meaning behind the scriptures",
      video: "http://localhost:3000/video3.mp4",
    },
  ];

  const planData = [
    {
      id: 1,
      planTitle: "basic",
      price: "$0 per month",
      desc1: "manual editing",
      desc2: "manual editing",
      desc3: "manual editing",
      freeQuote: 3,
    },
    {
      id: 2,
      planTitle: "basic",
      price: "$0 per month",
      desc1: "manual editing",
      desc2: "manual editing",
      desc3: "manual editing",
      freeQuote: 3,
    },
    {
      id: 3,
      planTitle: "basic",
      price: "$0 per month",
      desc1: "manual editing",
      desc2: "manual editing",
      desc3: "manual editing",
      freeQuote: 3,
    },
  ];

  const handleFeatureToggle = (feature: string) => {
    if (feature === "oracle") {
      setToggleFeature({
        ...toggleFeature,
        oracle: true,
        astrology: false,
        lifePath: false,
      });
    } else if (feature === "astrology") {
      setToggleFeature({
        ...toggleFeature,
        oracle: false,
        astrology: true,
        lifePath: false,
      });
    } else if (feature === "life-path") {
      setToggleFeature({
        ...toggleFeature,
        oracle: false,
        astrology: false,
        lifePath: true,
      });
    }
  };

  const blogData = [
    {
      id: 1,
      img: "/assets/studio-image.png",
      blogTitle: "The scriptural science of words ",
      releaseDate: "May 24th, 2024",
      author: "Authors Name",
    },
    {
      id: 2,
      img: "/assets/studio-image.png",
      blogTitle: "The scriptural science of words ",
      releaseDate: "May 24th, 2024",
      author: "Authors Name",
    },
  ];

  return (
    <div>
      <main className="page-wrapper w-full h-full">
        <NavComponent />
        <section className="hero-section my-[100px] p-8 w-full h-screen flex items-center justify-center flex-col">
          <div className="w-full flex md:items-center items-start justify-center flex-col gap-[2.275rem] md:text-center text-left lg:w[80%] xl:w-[1050px]">
            <h1 className="text-white    xl:w-3/4">
              To question God in all the ways
            </h1>
            <p className="w-3/4 text-gray capitalize text-[20px]   xl:w-1/2">
              SolomonAI is one of kind leading Metaphysical AI, who aim to help
              aid the moral consciousness of todays age.
            </p>
            <div className="w-full flex md:items-center items-start md:justify-center justify-start gap-[2.5rem]">
              <button className="px-8 py-1 text-[14px]  main-black bg-white border border-white  rounded duration-300 ease-in-out hover:text-white/60 hover:bg-transparent hover:border-white/60">
                Get Started
              </button>
              <button className="py-1 text-[14px]   text-gray] border-b border-white/60 flex items-center gap-2">
                Contact Sales{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-white/60"
                  >
                    <path d="M21.883 12l-7.527 6.235 .5.75 9-7.521-9-7.479 -.5.75 7.529 6.236h-18.884v1h21.883z" />
                  </svg>
                </span>
              </button>
            </div>
            <form onSubmit={handleHomeSubmit} className="w-[90%] h-[39px'">
              <input
                type="text"
                className="md:w-[90%] w-full p-3 h-[39px] text-[14px] text-gray bg-[#33333358] border border-[#747474] rounded-lg outline-none"
                value={homePrompt}
                onChange={(e) => setHomePrompt(e.target.value)}
                placeholder="What do ye seek?"
              />
            </form>
            <div className=" afterWrap relative py-4 md:px-8 p-[0px] md:w-[80%] w-full flex md:text-center align-center justify-center">
              <p className="text-white text-[14px] leading-[1.5rem] text-left  md:text-center w-full  xl:w-full">
                SolomonAI is one of kind leading Metaphysical AI, who aim to
                help aid the moral consciousness of todays age....
              </p>
            </div>
          </div>
        </section>
        <section className="info-section md:px-[4rem] !md:py-[8rem] w-full h-auto flex items-center  justify-start flex-col gap-[20vh] p-[2rem]">
        <hr className="w-full h-[1px] bg-white opacity-[.10]" />

          {infoContent.map((info) => {
            return (
              <>
                <div
                  key={info.id}
                  className="w-full flex justify-center text-center flex-col gap-[20vh] items-start"
                >
                  <div className="md:py-[1rem] w-full md:w-[60%] py-[1rem]">
                    <h2 className=" text-white      xl:w-2/3 text-left">
                      {info.h2}
                    </h2>
                  </div>

                  <div className=" w-full flex items-center justify-center  md:flex-row  figureWrapper flex-col">
                    <div className="w-full  h-[100%] flex gap-[10vw] md:flex-row figureWrapper items-start justify-between">
                      <div className="w-full items-start justify-center flex-col gap-[10px] flex xl:items-start xl:w-[60%] text-left">
                        <span className="text-gray  text-left text-[14px]">
                          {info.span}
                        </span>
                        <h3 className="text-white leading-[1.5rem] mt-[1.5rem]   xl:leading-[2rem]">
                          {info.h3}
                        </h3>
                        <p className="text-gray text-[16px] mt-[1.5rem]">
                          {info.p}
                        </p>
                      </div>
                      <figure className="w-full  flex flex-col md:flex-row gap-[10vw] items-start justify-between ">
                        <Video
                          src={info.video as any}
                          type="video/mp4"
                          width="100%"
                          height="auto"
                          controls={false}
                          autoPlay={true}
                          loop={true}
                          muted={true}
                        />

                        {/* <Image
                          src={info.image}
                          width={100}
                          height={100}
                          alt="Animated ying yang"
                          className="border border-white/50 w-full h-full rounded"
                        /> */}
                      </figure>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </section>
        <section className="info-section-2 py-[20vh] px-8  w-full  flex items-start justify-start flex-col  md:gap-[20vh] gap-[3rem]">
          <h2 className=" text-white      xl:w-2/3 text-left">
            No more mysteries or spook, join us in evolution.
          </h2>



          <div className = "mainVideoContainer">
          <Video
                src="http://localhost:3000/video.mp4"
                type="video/mp4"
                width="100%"
                height="auto"
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
              />
          </div>




        </section>

        {/* <hr className="w-full h-[1px] bg-white opacity-[.10]" /> */}
        {/* <section className="plans-section p-8 xl:py-0 w-full h-auto xl:h-screen flex items-center justify-center flex-col gap-[3rem]">
          <div className="w-full flex items-center justify-center flex-col gap-2">
            <p className="text-gray text-[1.5rem] leading-[1.5rem]  xl:text-[2rem] xl:leading-[2rem]">
              Plan
            </p>
            <h1 className="text-white uppercase text-[3rem] leading-[3rem]  text-center xl:text-[3.75rem] xl:leading-[3.75rem] lg:w-1/2">
              Be Amongst the Pioneers, Access Higher Intelligence.
            </h1>
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-8 lg:flex-row">
            {planData.map(
              ({ id, planTitle, price, desc1, desc2, desc3, freeQuote }) => {
                return id === 2 ? (
                  <>
                    <div
                      key={id}
                      className="w-full h-auto p-6 flex items-center justify-center flex-col gap-4 bg-[#ffffff0f] text-white border border-white/20 rounded"
                    >
                      <div className="w-full flex items-center justify-center flex-col">
                        <h1 className=" capitalize text-[1.75rem] xl:text-[2rem]">
                          {planTitle}
                        </h1>
                        <p className="text-gray  capitalize text-[1.25rem]">
                          {price}
                        </p>
                      </div>
                      <div className="w-3/4 py-2 flex items-center justify-center flex-col gap-2 xl:items-start">
                        <h3 className="text-white  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          Includes
                        </h3>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                        <p className="py-1 text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {desc1}
                        </p>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                        <p className="py-1 text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {desc2}
                        </p>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                        <p className="py-1 text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {desc3}
                        </p>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                      </div>
                      <div className="w-full flex items-center justify-center gap-6 xl:justify-start xl:w-3/4">
                        <button className="bg-white px-4 py-2 text-black  capitalize text-[1.35rem] border border-white/10 rounded duration-300 ease-in-out hover:bg-[#ffffff0f] hover:text-white">
                          Start with <span>{planTitle}</span>
                        </button>
                        <p className="text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {freeQuote} free quotes
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      key={id}
                      className="w-full h-auto p-6 flex items-center justify-center flex-col gap-4 text-white border border-white/20 rounded"
                    >
                      <div className="w-full flex items-center justify-center flex-col">
                        <h1 className=" capitalize text-[1.75rem] xl:text-[2rem]">
                          {planTitle}
                        </h1>
                        <p className="text-gray  capitalize text-[1.25rem]">
                          {price}
                        </p>
                      </div>
                      <div className="w-3/4 py-2 flex items-center justify-center flex-col gap-2 xl:items-start">
                        <h3 className="text-white  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          Includes
                        </h3>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                        <p className="py-1 text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {desc1}
                        </p>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                        <p className="py-1 text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {desc2}
                        </p>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                        <p className="py-1 text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {desc3}
                        </p>
                        <hr className="w-full h-[1px] bg-white opacity-[.10]" />
                      </div>
                      <div className="w-full flex items-center justify-center gap-6 xl:justify-start xl:w-3/4">
                        <button className="bg-[#ffffff0f] px-4 py-2 text-white  capitalize text-[1.35rem] border border-white/10 rounded duration-300 ease-in-out hover:bg-white hover:text-black">
                          Start with <span>{planTitle}</span>
                        </button>
                        <p className="text-gray  capitalize text-[1.35rem] xl:text-[1.5rem]">
                          {freeQuote} free quotes
                        </p>
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
        </section> */}

        {/* <hr className="w-full h-[1px] bg-white opacity-[.10]" /> */}

        <section className="feature-section p-8   py-[8rem] xl:py-0 w-full h-auto  flex items-center justify-center flex-col gap-[3rem]">
          <div className="w-full block">
            <h2 className=" text-white !text-[60px]   ] xl:w-2/3 text-left">
              One of a kind features.
            </h2>
          </div>
          <div className="w-full flex py-[80px] features-container  h-full items-start md:flex-row justify-start flex-col xl:flex-row  gap-[100px] xl:justify-start">
            <figure className="w-full  flex flex-col md:flex-row gap-[10vw] items-start justify-between ">
              <Video
                src="http://localhost:3000/video.mp4"
                type="video/mp4"
                width="100%"
                height="auto"
                controls={false}
                autoPlay={true}
                loop={true}
                muted={true}
              />
            </figure>
            <div className="w-full md:w-[60%] h-full  flex items-start justify-start flex-col gap-8">
              <ul className="flex items-start gap-4">
                <li className="text-white text-[14px] leading-[1.5rem] ">
                  <button
                    onClick={() => handleFeatureToggle("oracle")}
                    className={
                      toggleFeature.oracle
                        ? "p-2 bg-gray    featuresTab"
                        : "p-2 bg-transparent featuresTab active  border-gray "
                    }
                  >
                    Metaphysical Oracle
                  </button>
                </li>
                <li className="text-white text-[14px] leading-[1.5rem] ">
                  <button
                    onClick={() => handleFeatureToggle("astrology")}
                    className={
                      toggleFeature.astrology
                        ? "p-2 featuresTab    "
                        : "p-2 bg-transparent featuresTab active  border-gray "
                    }
                  >
                    Zodiac Astrologist
                  </button>
                </li>
                <li className="text-white text-[14px] leading-[1.5rem] ">
                  <button
                    onClick={() => handleFeatureToggle("life-path")}
                    className={
                      toggleFeature.lifePath
                        ? "p-2 featuresTab    "
                        : "p-2 bg-transparent featuresTab active  border-gray "
                    }
                  >
                    Life Path Consultant
                  </button>
                </li>
              </ul>
              {toggleFeature.oracle && (
                <>
                  <div className="py-6 w-full flex items-start  justify-center flex-col gap-4 text-white text-left  ">
                    <h3 className="text-white uppercase  ">
                      Metaphysical Oracle
                    </h3>
                    <p className="text-gray  leading-[1.8rem]  xl:w-4/4 ">
                      As the most individually capable model, you enter a realm
                      of infinite possibilities with Buddah Bot. It possesses
                      the ability to delve several levels deep into any
                      metaphysical topic and has been extensively trained on all
                      matters of meaning of scriptural subjects.
                    </p>
                  </div>
                </>
              )}
              {toggleFeature.astrology && (
                <>
                  <div className="py-6 w-full flex items-start  justify-center flex-col gap-4 text-white text-left  ">
                    <h3 className="text-white uppercase  ">
                      Zodiac Astrologist
                    </h3>
                    <p className="text-gray  leading-[1.8rem]  xl:w-4/4 ">
                      Delve into the celestial realms and discover the profound
                      influences of the stars and planets on your life's
                      journey. From natal charts to planetary alignments,
                      explore the intricacies of your astrological profile and
                      gain deeper insights into your personality, relationships,
                      and future path.
                    </p>
                  </div>
                </>
              )}
              {toggleFeature.lifePath && (
                <>
                  <div className="py-6 w-full flex items-start  justify-center flex-col gap-4 text-white text-left  ">
                    <h3 className="text-white uppercase  ">
                      Life Path Consultation
                    </h3>
                    <p className="text-gray  leading-[1.8rem]  xl:w-4/4 ">
                      Gain clarity and guidance on your soul's purpose and
                      direction in life. Explore the depths of your existence,
                      uncover talents, overcome obstacles, and align with your
                      true calling. Let Buddha Bot illuminate your path and
                      empower you to live authentically and passionately.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="blog-section p-8 !md:py-[20vh] py-[10vh] w-full h-auto  flex items-left justify-center flex-col gap-[3rem]">
          <div className="w-full block">
            <h2 className=" text-white !text-[60px]   leading-[2.75rem]   lg:leading-[3rem] xl:leading-[3.5rem] xl:w-2/3 text-left">
              Blogs
            </h2>
          </div>

          <hr className="w-full h-[1px] bg-white opacity-[.10]" />

          <div className="w-full flex items-start justify-start flex-col gap-8 md:mt-[15vh] xl:flex-row mt-[8vh]">
            {blogData.map(({ id, img, blogTitle, releaseDate, author }) => (
              <div
                key={id}
                className=" blogImageWrapper w-full flex  justify-center text-center flex-col gap-4 xl:flex-row items-start xl:justify-start"
              >
                <div className="blogImage">
                  <Image src={img} width={415} height={245} alt="Blog Image" />
                </div>
                <div className="px-4 w-full flex items-start justify-center flex-col gap-4 ">
                  <p className="text-gray text-[12px]">{releaseDate}</p>
                  <h4 className="text-white text-left  text-[18px]">
                    {blogTitle}
                  </h4>

                  {/* <p className="text-white text-[1.5rem] leading-[1.5rem] abc-diatype-light xl:text-[1.5rem]">
                    {author}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="w-full p-8 relative flex flex-col gap-[20vh]">
          <hr className="w-full h-[1px] bg-white opacity-[.10]" />

          <div className="flex md:flex-row gap-[6rem] flex-col justify-between w-full">
            <div className="flex-col flex items-start gap-[30px]">
              <div className="flex flex-row gap-[15px]">
                <p>Solomon AI</p>
                <span>-</span>
                <p className="text-gray"> the ultimate helper to ascension</p>
              </div>

              <form className="w-full relative newsLetterForm ">
                <div className="flex relative flex-row items-center">
                  <input
                    className="bg-transparent newsLetterInput"
                    type="email"
                    placeholder="Email address"
                  />

                  <button type="submit">
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      aria-labelledby="arrow-394209df-8e0a-4acc-a89e-e88f347972a7"
                      focusable="false"
                      fill="#fff"
                    >
                      <title id="arrow-394209df-8e0a-4acc-a89e-e88f347972a7">
                        Arrow
                      </title>
                      <path d="M88.934,47.431l-27.298-27.259-.027-.027c-1.427-1.414-3.73-1.403-5.144,.024-1.414,1.426-1.403,3.729,.024,5.142l21.055,21.025H13.634c-2.007,0-3.634,1.627-3.634,3.633s1.627,3.633,3.634,3.633h63.972l-21.116,21.087-.024,.024c-1.413,1.427-1.401,3.73,.027,5.143s3.731,1.401,5.144-.027l27.298-27.259,.006-.006c1.416-1.419,1.414-3.718-.006-5.134Z"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="flex-col md:w-[30%] w-full gap-[15px]">
              <ul className="flex flex-col gap-[15px]">
                <li className="text-[16px]">Social</li>
                <Link href="/" className="text-[14px] text-gray">
                  Instagram
                </Link>
                <Link href="/" className="text-[14px] text-gray">
                  Creators - Instagram
                </Link>
                <Link href="/" className="text-[14px] text-gray">
                  Tiktok
                </Link>
                <Link href="/" className="text-[14px] text-gray">
                  Blogs
                </Link>
              </ul>
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between relative md:pb-[28px pb-[0px]]">
            <p className="text-gray text-[14px]">
              {" "}
              © 2024 BuddahBot All rights reserved
            </p>

            <div className="md:flex flex-row gap-[15px] w-[30%]  hidden">
              <Link href="/" className="text-gray text-[14px]">
                {" "}
                Security
              </Link>
              <p className="text-gray text-[14px]"> |</p>
              <Link href="/" className="text-gray text-[14px]">
                {" "}
                Privacy & Cookie Policy
              </Link>
              <p className="text-gray text-[14px]"> |</p>

              <Link href="/" className="text-gray text-[14px]">
                {" "}
                Terms & Services
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
