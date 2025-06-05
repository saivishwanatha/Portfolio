import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Student Mentor",
    company: "Smart Interviews, Hyderabad ",
    date: "Aug' 2019 – Jun'2021 ",
    responsibilities: [
      "Mentoring students in coding and debugging.",
      "Guiding feature prototyping for web and mobile apps.",
      "Conducting mock interviews and pair programming.",
    ],
  },
  {
    job: "Software Engineer",
    company: "TCS, Hyderabad",
    date: "Jul'21 - Jun'23",
    responsibilities: [
      "Building responsive, user-friendly interfaces with React.",
      "Leading front-end development for CRM and finance systems.",
      "Improving load times and reducing data entry errors.",
    ],
  },
  {
    job: "Software Engineer",
    company: "Tilt, Colorado, USA",
    date: "Apr'2024 - May'2025",
    responsibilities: [
      "Leading usability audits and content improvements for TILT website.",
      "Designing Figma prototypes and enhancing accessibility to 90%+ WCAG 2.1 compliance.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
