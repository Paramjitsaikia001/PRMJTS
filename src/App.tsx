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
      top: "50%",
      borderRadius: "2rem 2rem 0 0",
      duration: 1,
      scrollTrigger: {
        trigger: ".components",
        start: "top 90%",
        markers:true,
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
        <div className=" w-full h-full flex flex-col justify-start items-center">


          <div className="intro flex flex-col w-[98%] md:w-full mt-25 items-center leading-2 relative  h-auto justify-start">
            <h2 className="font-mono  ">HELLO!👋</h2>
            <div className="flex flex-col  w-[100%]">
              <div className="flex w-full text-end items-end justify-evenly text-[3.8rem] sm:text-[6.8rem]   md:text-[8rem] lg:text-[14rem] font-stretch-56% font-extrabold leading-none">
                <h1 className="flex flex-col items-start leading-none relative h-full">
                  <span className="font-serif text-[1rem] lg:text-[1.5rem] w-full text-start font-extralight md:pl-[1rem] pl-1 absolute md:top-3  lg:bottom-0 text-white">I'M</span>
                  <span className=" tracking-tight">PARAMJIT</span></h1>
                   <h1>SAIKIA</h1>
              </div>
            </div>
          </div>

          <div className="second-intro flex flex-col  items-center justify-center h-full w-full p-0 m-0 absolute">
            <p className="font-mono font-extralight flex flex-col justify-end text-[0.6rem] md:text-sm items-start w-full relative left-2 lg:left-[5%] lg:top-[10%] top-[-16%] bottom-0">
              <span>👨‍💻 Full Stack Developer</span>
              <span>⚡ Passionate about clean & scalable code</span>
              <span>💡 Problem solver & quick learner</span>
              <span>🛠️ Loves building real-world solutions</span>
            </p>
            <div className="image  h-full w-[99%] absolute sm:w-[70%] md:w-[60%] z-[9] top-[35%] md:top-[22%] bottom-0 flex items-end">
               <img
              className="w-full  md:w-[90%] lg:w-[70%]  h-[68%] md:h-[85%] top-0 lg:h-[80%] bottom-0 absolute lg:left-[15%]"
              src={PortfolioModel}
              alt="profile"
            />
            </div>
            <p className="font-mono font-extralight flex flex-col   items-end  justify-end text-[0.6rem] md:text-sm  w-full md:w-[90%] relative right-2 md:right-2 md:bottom-[5%] lg:top-0 top-[-16%]">
              <span className="inline-block">🔧 React, Node.js, MongoDB, Express</span>
              <span className="inline-block">
                ⚡ Passionate about clean & scalable code
              </span>
              <span className="inline-block">
                🎯 Focused on performance & usability  
              </span>
              <span className="inline-block">
               🌐 Responsive, SEO-friendly designs  
              </span>
              <span className="inline-block">            
🤝 Open to collaborations & freelance work
              </span>

                


            </p>
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

          <section id="contact" className="contactclass h-full lg:h-screen  flex items-center justify-center">
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
