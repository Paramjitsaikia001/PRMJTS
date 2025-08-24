import { Mail, MapPinned ,Linkedin,Instagram,Github,Twitter} from "lucide-react";
const Footer = () => {
  return (
    <section className="footer bg-linear-120 from-[#001062] via-[#002aff] to-[#9ebdff] text-white  fixed w-full h-screen z-[-1] flex flex-col justify-between pt-48">
      <div className="middle px-12 gap-8 lg:px-[12rem] flex lg:flex-row flex-col justify-between w-full">
        <div className="profile-details flex flex-col gap-1 text-md font-semibold">
          <p className="flex gap-2 font-extralight">
            <Mail />
            <span className="">prmjtsai@gmail.com</span>
          </p>
          <p className="flex gap-2 font-extralight">
            <MapPinned />
            <span className="">Guwahati,Assam</span>
          </p>
        </div>


       <div className="social-media flex lg:flex-col justify-center gap-8 lg:gap-2 w-[20rem] lg:h-full h-fit  items-end">
                <a
                  href="https://www.linkedin.com/in/paramjit-saikia-21615a237/"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1 md:bg-gradient-to-r  lg:bg-none hover:bg-[#0037ff] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 py-2"
                >
                  <Linkedin className="text-white w-8 h-8 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                </a>

                <a
                  href="https://github.com/Paramjitsaikia001"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1 md:bg-gradient-to-r  lg:bg-none hover:bg-[#000000] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 py-2"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Github
                  </p>
                  <p className="text-sm text-white hidden md:block lg:hidden">
                    Github
                  </p>
                  <Github className="text-white w-8 h-8 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                </a>

                <a
                  href="https://x.com/Paramjit_saikia"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1   lg:bg-none hover:bg-[#000000] h-full lg:h-fit lg:w-fit rounded-4xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 py-2"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Twitter
                  </p>
                  <p className="text-sm text-white hidden md:block lg:hidden">
                    Twitter
                  </p>
                  <Twitter className="text-white w-8 h-8 stroke-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-white" />
                </a>

                <a
                  href="https://www.instagram.com/paramjit_saikia/"
                  target="_blank"
                  className="font-sans group hover:text-white text-black  flex md:gap-1   lg:bg-none hover:bg-gradient-to-r from-[#ff00ee] to-[#ff81f2]  h-full lg:h-fit lg:w-fit rounded-2xl hover:rounded-3xl transition-all duration-300 ease-in-out overflow-hidden items-center cursor-pointer lg:px-6 py-2"
                >
                  <p className="text-sm transform translate-x-full group-hover:translate-x-0 transition-all duration-300 ease-in-out whitespace-nowrap group-hover:block hidden">
                    Instagram
                  </p>
                  <p className="text-sm text-white hidden md:block lg:hidden">
                    Instagram
                  </p>
                  <Instagram className="text-white w-8 h-8 stroke-2  transition-transform duration-300 ease-in-out group-hover:translate-x-2  group-hover:text-white" />
                </a>
              </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <p>Full Stack Web Developer</p>
        <h1 className="lg:text-[12rem] text-[13vw] font-stretch-80% tracking-tight leading-none font-[900] flex text-black justify-center items-center text-center border-b-2 border-black pb-1 mb-8">
          PARAMJIT SAIKIA
        </h1>
      </div>
    </section>
  );
};

export default Footer;
