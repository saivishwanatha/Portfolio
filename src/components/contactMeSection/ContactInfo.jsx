import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="saicharan.vish@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+1(970)-213-5350" Image={FiPhone} />
      <SingleInfo text="Fort Collins, Colorado" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
