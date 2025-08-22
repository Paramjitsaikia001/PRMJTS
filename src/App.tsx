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
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".components", {
      top: "85%",
      borderRadius: "2rem 2rem 0 0",
      duration: 1,
      scrollTrigger: {
        trigger: ".components",
        start: "top 90%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      id="home"
      className="bg-[#0020C2] h-full w-full flex flex-col items-center overflow-hidden"
    >
      <Navbar />
      <ToastContainer className=" z-[9999]" position="top-right" />
      <div className="hero-section h-screen w-full bg-radial from-[#FFFFFF] from-0% via-[#FBFCFF] via-0% to-[#0020C2] to-100%  items-center flex flex-col relative">
        <div className=" w-full h-full flex flex-col justify-center items-center">
          <div className="intro flex flex-col w-[98%] md:w-full  items-center leading-2 relative top-25 h-auto justify-start">
            <h2 className="font-mono  ">HELLO!👋</h2>
            <div className="flex flex-col l w-[100%]">
              <div className="flex w-full text-end items-end justify-evenly text-[4.5rem] sm:text-[7.5rem]   md:text-[8.8rem] lg:text-[14rem] font-stretch-56% font-extrabold leading-none">
                <h1 className="flex flex-col items-start leading-none">
                  <span className="font-serif text-xl md:text-2xl w-full text-start font-extralight pl-[1rem]">I'M</span>
                  <span className=" tracking-tight">PARAMJIT</span></h1>
                   <h1>SAIKIA</h1>
              </div>
            </div>
          </div>

          <div className="second-intro flex flex-col  items-center justify-center h-full w-full p-0 m-0">
            <p className="font-mono font-extralight flex flex-col justify-end text-[0.6rem] md:text-sm items-start w-full relative left-2 md:left-[5%] bottom-[28%] md:bottom-[20%]">
              <span>👨‍💻 Full Stack Developer</span>
              <span>⚡ Passionate about clean & scalable code</span>
              <span>💡 Problem solver & quick learner</span>
              <span>🛠️ Loves building real-world solutions</span>
            </p>
            <div className="image  h-full w-[99%] absolute sm:w-[70%] md:w-[60%] z-[9] top-[2%] flex items-end">
               <img
              className="w-full md:w-[90%] h-[68%] md:h-[85%] relative lg:left-[5%]"
              src={PortfolioModel}
              alt="profile"
            />
            </div>
            <p className="font-mono font-extralight flex flex-col   items-end  justify-end text-[0.6rem] md:text-sm  w-full md:w-[90%] relative right-2 md:right-2 bottom-[27%] md:bottom-[15%]">
              <span className="inline-block">👨‍💻 Full Stack Developer</span>
              <span className="inline-block">
                ⚡ Passionate about clean & scalable code
              </span>
              <span className="inline-block">
                💡 Problem solver & quick learner
              </span>
              <span className="inline-block">
                🛠️ Loves building real-world solutions
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="components bg-[#011e6300] top-[100vh] h-full absolute  w-full  z-[10] ">
        <div className="components-items bg-[#011E63]   w-full flex flex-col gap-[4rem] z-[11]">
          <section id="projects h-full lg:h-screen  flex">
            <Project />
          </section>

          <section id="skills h-full lg:h-screen  flex">
            <Skills />
          </section>

          <section id="experience h-full lg:h-screen  flex">
            <Achievement />
          </section>

          <section id="contact" className="contactclass h-full lg:h-screen  flex">
            <Contact />
          </section>
           </div>
          <section className="h-screen w-full bg-transparent">

          </section>
           
        </div>

          <Footer />
    </section>
  );
}

export default App;
