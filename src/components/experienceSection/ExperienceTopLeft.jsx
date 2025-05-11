import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="2" text="Years" />
      </div>
      <p className="text-center">
        With 2 years of experience building dynamic and user-friendly web
        applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
