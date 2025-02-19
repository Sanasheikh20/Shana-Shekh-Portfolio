import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants"; // Make sure to import your education data
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={educationItem.date}
      iconStyle={{ background: "#f9c74f" }} // You can customize the icon background
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* <img
            src={educationItem.icon} // Add an icon property in your education data if needed
            alt={educationItem.institution}
            className='w-[60%] h-[60%] object-contain'
          /> */}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{educationItem.degree}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {educationItem.institution}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {educationItem.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Educational Background
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((educationItem, index) => (
            <EducationCard
              key={`education-${index}`}
              educationItem={educationItem}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");