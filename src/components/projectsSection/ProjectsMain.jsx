import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Portfolio Website",
    year: "Javascript, React, HTML, TailwindCSS",
    desp: "Designed and developed a responsive portfolio website using React, JavaScript, HTML, and TailwindCSS to showcase projects, skills, and experience with a clean, modern UI and smooth user interactions.",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/saivishwanatha/Portfolio_SV",
  },
  {
    name: "Personalized Recipe Generator",
    year: "Node.js, React.js, MongoDB, OpenAI API, Javascript",
    desp : " Developed a React-Node-MongoDB app using OpenAI for personalized recipes and grocery integration, increasing engagement by 30% and reducing meal planning time by 50%.",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Mouse Cursor control using facial movements",
    year: "Dlib, OpenCV, NumPy, Imutils",
    desp: "Built a hands-free mouse control system using Dlib and OpenCV, enabling eye gesture-based clicks with 95% accuracy, improving usability by 60% and user independence by 50%.",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/saivishwanatha/Mouse-Cursor-Control-Using-Facial-Movements",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              desp={project.desp}
              align={project.align}
              image={project.image}
              link = {project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
