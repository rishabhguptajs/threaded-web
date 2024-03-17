import React from "react"
import Header from "../components/Header"
import AnimatedCircle from "../components/AnimatedCircle"
import Footer from "../components/Footer"
import video from "../assets/home.mp4"
import Features from "../components/Features"
import { IoCreate } from "react-icons/io5"
import { GrIntegration } from "react-icons/gr"
import { MdOfflinePin } from "react-icons/md"
import { BiSolidCustomize } from "react-icons/bi"

const HomePage = () => {
  return (
    <div className="flex h-[100vh] w-[100vw] overflow-x-hidden bg-[#000000] align-middle flex-col items-center justify-between p-4">
      <span className="flex w-[100vw] align-middle justify-center">
        <Header />
        <AnimatedCircle />
      </span>
      <div className="relative top-[-8em] text-center w-fit justify-center align-middle">
        <video width="70%" autoPlay muted loop className="rounded-[30px]">
          <source src={video} type="video/mp4" />
          your browser doesn't support
        </video>
        <div className="text-[30px] text-white font-bold font-sans">
          Low-end, with the power of CLI <br />{" "}
          <span className="text-[14px] font-medium flex flex-col">
            Specially helpful for low-end PCs and{" "}
            <span>fo the users who're into linux.</span>
          </span>
        </div>
        <button className=" m-8 p-4 bg-white font-semibold text-black transition-all rounded-xl hover:-translate-y-1 hover:scale-105">
          Get Started.
        </button>
      </div>
      <main className="w-[100vw] flex flex-col align-middle text-center justify-center items-center mb-20">
        <div className="features-section justify-evenly flex flex-col gap-4 m-8 p-4 bg-[#07113767]">
          <span className="text-white transition-all text-4xl m-4 hover:text-[#8793ff] cursor-pointer">
            Features
          </span>
          <div className="flex flex-row gap-4">
            <Features
              name={"Thread Creation"}
              description={
                "Create captivating threads effortlessly, right from your command line. Say goodbye to tab hopping and app juggling—compose and share your thoughts seamlessly, straight from your terminal."
              }
              logoURL={<IoCreate />}
            />
            <Features
              name={"Twitter Integration"}
              description={
                "Tweet effortlessly from your command line. No more screen switching or multitasking—sync your CLI tool with Twitter seamlessly. Connect, compose, and conquer Twitter from your cozy terminal."
              }
              logoURL={<GrIntegration />}
            />
            <Features
              name={"Offline Mode"}
              description={
                "Don't let Wi-Fi woes stifle your genius! With our offline mode, inspiration strikes wherever you roam. Draft your threads offline, let your creativity soar, and when the time is ripe, share your masterpieces to the world."
              }
              logoURL={<MdOfflinePin />}
            />
            <Features
              name={"Customization"}
              description={
                "Gain insights into your Twitter performance directly from your command line. Our analytics dashboard provides real-time metrics on your tweets, engagement rates, and audience demographics."
              }
              logoURL={<BiSolidCustomize />}
            />
          </div>
        </div>
        <div>
          <div className="text-white text-4xl font-semibold font-sans">
            How It Works?
          </div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col w-[30%] m-4 p-4 bg-[#08144592] rounded-xl">
              <h1 className="text-white text-2xl font-semibold">Step 1</h1>
              <span className="text-white text-lg">
                Install the CLI tool using pip from{" "}
                <a
                  href="https://pypi.org/project/threaded-cli/"
                  target="_blank"
                  className="text-blue-400"
                >
                  pypi
                </a>
                .
              </span>
            </div>
            <div className="flex flex-col w-[30%] m-4 p-4 bg-[#08144592] rounded-xl">
              <h1 className="text-white text-2xl font-semibold">Step 2</h1>
              <span className="text-white text-lg">
                Authenticate your Twitter account using the CLI tool.
              </span>
            </div>
            <div className="flex flex-col w-[30%] m-4 p-4 bg-[#08144592] rounded-xl">
              <h1 className="text-white text-2xl font-semibold">Step 3</h1>
              <span className="text-white text-lg">
                Start creating threads and tweeting from your terminal.
              </span>
            </div>
          </div>
        </div>
      </main>
      <div className="relative bottom-0 mt-40">
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
