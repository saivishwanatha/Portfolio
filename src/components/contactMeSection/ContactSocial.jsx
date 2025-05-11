import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/sai-charan-vishwanatha-495135203/"><SingleContactSocial Icon={FaLinkedinIn} /></a>
      <a href="https://github.com/saivishwanatha"><SingleContactSocial Icon={FiGithub} /></a>
      <a href="https://www.instagram.com/vishwanath_saicharan/?next=%2F"><SingleContactSocial Icon={FaInstagram} /> </a>
    </div>
  );
};

export default ContactSocial;
