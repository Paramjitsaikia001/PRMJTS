import Navbar from "./components/navber";
import PortfolioModel from "./assets/portfolio-model.png";
import Project from "./components/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "./App.css";
import { useEffect } from "react";
import Skills from "./components/skills";
import Achievement from "./components/Experience";
import Contact from "./components/contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { Twitter, Github, Instagram, Linkedin } from "lucide-react";
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".components", {
      top: "30%",
      borderRadius: "2rem 2rem 0 0",
      duration: 1,
      scrollTrigger: {
        trigger: ".components",
        start: "top 98%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  });
  return (
    <section
      id="home"
      className="bg-[#0020C2] h-[100vh] w-[100vw] flex flex-col items-center overflow-hidden"
    >
      <Navbar />
      <ToastContainer className=" z-[9999]" position="top-right" />
      <div className="hero-section h-[100vh] w-[100vw] bg-radial from-[#FFFFFF] from-0% via-[#FBFCFF] via-0% to-[#0020C2] to-100%  items-center flex flex-col relative">
        <div className=" w-full h-full flex flex-col justify-start items-center">
          <div className="intro flex flex-col w-[98%] md:w-full mt-25 items-center leading-2 relative  h-auto justify-start">
            <h2 className="font-mono  ">HELLO!👋</h2>
            <div className="flex flex-col  w-[100%]">
              <div className="flex w-full text-end items-end justify-evenly text-[15vw] font-stretch-56% font-extrabold leading-none ">
                <h1 className="flex md:bg-amber-500 flex-col items-start leading-none relative h-full ">
                  <span className="font-serif text-[0.5rem] lg:text-[1.5rem] w-full text-start font-extralight md:pl-[1rem] pl-1 absolute md:top-3  lg:bottom-0 text-white">
                    I'm
                  </span>
                  <span className="tracking-tight">PARAMJIT</span>
                </h1>
                <h1>SAIKIA</h1>
              </div>
            </div>
          </div>

          <div className="second-intro flex flex-col md:flex-row items-center justify-between md:justify-center h-full w-full p-0 m-0 absolute">
            <div className=" font-extralight h-full text-center flex flex-col justify-center lg:justify-end items-start lg:w-1/2 relative left-2 lg:left-[5%] lg:top-[-26%] top-[3rem] md:text-start bottom-0">
              <div className="w-[20rem]">
                <h2 className="font-semibold text-lg">About me</h2>
                <p className="text-sm font-light">
                  I'm a passionate developer with a knack for creating dynamic
                  and responsive web applications. My journey in tech has been
                  fueled by curiosity and a desire to solve real-world problems.
                </p>
              </div>
            </div>
            <div className="image  h-full w-[99%] absolute sm:w-[70%] md:w-[60%] top-[35%] md:top-[22%] bottom-0 flex items-end">
              <img
                className="w-full  md:w-[70%] lg:w-[70%]  h-[68%] md:h-[85%] top-0 lg:h-[80%] bottom-0 absolute md:left-[15%]"
                src={PortfolioModel}
                alt="profile"
              />
            </div>
            <div className="font-mono font-extralight flex flex-col lg:w-1/2  md:items-end items-center justify-end lg:justify-center text-[0.6rem] md:text-sm  w-full md:w-[90%] relative bottom-4  md:right-[5%] md:bottom-[5%] lg:top-26  h-full ">
              <div className="social-media flex md:flex-col justify-center gap-8 md:gap-2 w-[20rem] lg:h-full h-fit  items-end">
                <a
                  href="https://www.linkedin.com/in/paramjit-saikia-21615a237/"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1 bg-[#0037ff]  md:bg-transparent hover:bg-[#0037ff] h-full lg:h-fit lg:w-fit rounded-2xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    LinkedIn
                  </p>
                  <Linkedin className="text-white w-8 h-8 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                </a>

                <a
                  href="https://github.com/Paramjitsaikia001"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1 bg-black  md:bg-transparent hover:bg-[#000000] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Github
                  </p>
                  <Github className="text-white w-8 h-8 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                </a>

                <a
                  href="https://x.com/Paramjit_saikia"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1 bg-black md:bg-transparent hover:bg-[#000000] h-full lg:h-fit lg:w-fit rounded-2xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Twitter
                  </p>
                  <Twitter className="text-white w-8 h-8 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                </a>

                <a
                  href="https://www.instagram.com/paramjit_saikia/"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1 bg-gradient-to-r  md:bg-none hover:bg-gradient-to-r from-[#ff00ee] to-[#ff81f2]  h-full lg:h-fit lg:w-fit rounded-2xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 p-4"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Instagram
                  </p>
                  <Instagram className="text-white w-8 h-8 stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="components bg-[#011e6300] top-[100vh] h-full absolute  w-full  z-[10] ">
        <div className="components-items bg-[#011E63]   w-full flex flex-col gap-[4rem] z-[11]">
          <section id="projects" className=" h-full lg:h-screen  flex">
            <Project />
          </section>

          <section id="skills" className=" h-full lg:h-screen  flex">
            <Skills />
          </section>

          <section id="experience" className=" h-full lg:h-screen  flex">
            <Achievement />
          </section>

          <section
            id="contact"
            className="contactclass h-full lg:h-screen  flex items-center justify-center"
          >
            <Contact />
          </section>
        </div>
        <section className="h-screen w-full bg-transparent"></section>
      </div>

      <Footer />
    </section>
  );
}

export default App;
