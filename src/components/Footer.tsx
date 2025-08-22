const Footer = () => {
  return (
    <section
      className="footer bg-linear-120 from-[#001062] via-[#002aff] to-[#9ebdff] text-white  fixed w-full h-screen z-[-1] flex flex-col justify-between pt-48"
    >
      <div className="info w-full flex items-center justify-center">
        <p className="font-mono text-white text-md">Bye</p>
      </div>
      <div className="shortcuts flex flex-col px-8">
        <a className="hover:text-black text-white cursor-pointer" href="#home">
          Home
        </a>
        <a
          className="hover:text-black text-white cursor-pointer"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="hover:text-black text-white cursor-pointer"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="hover:text-black text-white cursor-pointer"
          href="#experience"
        >
          Experience
        </a>
        <a
          className="hover:text-black text-white cursor-pointer"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <p>Full Stack Web Developer</p>
        <h1 className="md:text-[12rem] sm:text-[5.5rem] text-7xl font-stretch-80% tracking-tight leading-none font-[900] flex text-black justify-center items-center text-center border-b-2 border-black pb-1 mb-8">
          PARAMJIT SAIKIA
        </h1>
      </div>
    </section>
  );
};

export default Footer;
