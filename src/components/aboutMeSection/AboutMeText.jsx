import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      I’m Saicharan Vishwanatha, full Stack Developer and Computer Science graduate student at 
      Colorado State University with a strong focus on accessibility and user-centered design. 
      Over 2 years of industry experience at TCS, complemented by impactful roles in educational 
      technology and usability research. Skilled in building responsive front-end interfaces with
       ReactJS, developing scalable backend services with Node.js and Python, and deploying 
       applications using AWS and Docker. Proven track record in leading accessibility audits 
       (WCAG 2.1), mentoring developers, and creating innovative solutions—from enhancing u
       niversity platforms to engineering assistive technologies like hands-free mouse control. 
       Passionate about blending AI, open-source tools, and real-world problem solving into 
       intuitive digital experiences.
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
