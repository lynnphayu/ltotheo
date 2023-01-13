import type { NextPage } from "next";
import Typed from "react-typed";
import { atom, useAtom } from "jotai";

const currentIndexAtom = atom(0);

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useAtom(currentIndexAtom);

  const roles = [
    "Software Engineer",
    "Backend Developer",
    "Fullstack Developer",
  ];

  const employerStyle = (index: number, position: number): string =>
    `underline text-sm md:text-lg ${
      index === position ? `text-white` : `text-gray-200`
    }`;

  return (
    <div className="w-screen h-full flex flex-col justify-center align-middle m-0 p-0">
      <div className="h-full flex flex-col md:flex-row justify-start">
        <div className="text-spotify-gree bg-spotify-green/10 w-full md:w-1/2 h-1/2 md:h-full overflow-visible flex flex-col justify-center">
          {/* pr-[40%] pl-[10%] md:pl-[35%] md:pr-[15%] sm:pl-[50%] sm:pr-[7%] max-w-[100%] md:max-w-[20%] pt-[50%] md:pt-[50vh] */}
          <div className="">
            <p className="w-max md:w-80 px-12 md:p-0 md:mx-auto leading-none font-extrabold text-white text-3xl">
              I&apos;m Lynn,
              {/* flex justify-center md:justify-center */}
              <br />
              {/* I&apos;m &nbsp; */}
              <span className="text-xl">
                {/* {roles[0]} */}
                <Typed
                  onStringTyped={setCurrentIndex}
                  strings={roles}
                  typeSpeed={40}
                  backSpeed={20}
                  loop
                />
              </span>
            </p>
            <p className="w-auto md:w-80 leading-none text-white font-bold mx-auto px-12 md:px-0 py-4">
              {/* Making Backends at&nbsp; */}
              Crafting Systems at&nbsp;
              <a
                href="https://zig.live"
                className="underline text-spotify-green"
              >
                Zig.live
              </a>
            </p>
          </div>
        </div>
        <div className="container w-full md:w-1/2 my-2">
          <div className="flex flex-col justify-start">
            <div className="max-w-full px-12 md:px-24">
              <div className="py-1 md:py-3">
                <a
                  href="https://www.cdgtaxi.com.sg/"
                  className={employerStyle(currentIndex, 1)}
                >
                  Comfordelgro CDGTaxi
                </a>
                <p className="text-gray-500 text-sm">
                  Food & Drink / Electric Vehicle / ComfortConnect(former Zig)
                </p>
                <p className="text-gray-500 text-sm">
                  Singapore, Remote, (Present)
                </p>
              </div>
              <div className="py-1 md:py-3">
                <a
                  href="https://expa.ai"
                  className={employerStyle(currentIndex, 2)}
                >
                  Expa.ai
                </a>
                <p className="text-gray-500 text-sm">
                  Chatbot, Unified Solution for Sales, Marketing and Customer
                  Support
                </p>
                <p className="text-gray-500 text-sm">Myanmar</p>
              </div>
              <div className="py-1 md:py-3">
                <a
                  href="https://expa.ai"
                  className={employerStyle(currentIndex, 0)}
                >
                  CBBank Myanmar
                </a>
                <p className="text-gray-500 text-sm">
                  Banking, Outsourcing, Infrastructure (2017) NEX-4 ICT
                  solutions
                </p>
                <p className="text-gray-500 text-sm">
                  Myanmar - Infrastructure (2016)
                </p>
              </div>
            </div>
            <div className="max-w-full py-4 md:py-10 px-12 md:px-24">
              <div className="container flex justify-center m-auto text-spotify-green/50">
                <a
                  href="https://github.com/lynnphayu"
                  className="mx-6 text-3xl fa-brands fa-github-square"
                ></a>
                <a
                  href="https://www.linkedin.com/in/lin-phay-oo-ba92a711b/"
                  className="mx-6 text-3xl fa-brands fa-linkedin"
                ></a>
                <a
                  href=""
                  className="mx-6 text-3xl fa-brands fa-whatsapp-square"
                ></a>
                {/* <a
                  href="https://m.me/lynnphayu"
                  className="mx-6 text-3xl fa-brands fa-facebook-messenger"
                ></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
