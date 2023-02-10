import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

export default function ExperienceCard({ experience }) {
  const {
    jobTitle,
    companyImage,
    company,
    technologies,
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
    points,
  } = experience;
  return (
    <article className="flex flex-column rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overfloew-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewPort={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(companyImage).url()}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {technologies?.map((tech) => (
            <img
              key={tech._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(tech.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {`${new Date(dateStarted).toDateString()} - 
          ${
            isCurrentlyWorkingHere
              ? "Present"
              : new Date(dateEnded).toDateString()
          }`}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-96 w-4/5 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
