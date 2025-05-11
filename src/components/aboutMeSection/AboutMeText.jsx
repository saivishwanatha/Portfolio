import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Saicharan Vishwanatha, a graduate Computer Science student at Colorado State University with a 
      passion for building accessible and user-centered web applications. With professional experience 
      at TCS and impactful roles in education technology and usability research, I’ve developed responsive 
      front-end interfaces, led accessibility audits, and mentored aspiring developers. I enjoy turning 
      complex problems into intuitive, engaging digital experiences—whether that’s refining a university website
      or designing a hands-free mouse control system for accessibility. I specialize in React, Node.js, Python, and 
      cloud tools like AWS and Docker. When I’m not coding, I’m iterating on side projects that blend AI, 
      open-source tools, and real-world impact to help users solve everyday challenges.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
