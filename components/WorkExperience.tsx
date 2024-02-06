import React from 'react'
import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard';
import { motion } from "framer-motion";

type Props = {
    experiences: Experience[];
}

const WorkExperience = ({ experiences }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-lft
     md:flex-row max-w-full md:px-10 p-5 justify-evenly mx-auto items-center'>
            {/* <h3 className='absolute top-20 uppercasscrollbar-thumb-[#F7AB0A]/80e tracking-[20px] text-gray-500
         text-2xl invisible md:visible'>
                Experience
            </h3> */}
            <div className='w-full flex space-x-5 overflow-x-scroll -mb-5 md:p-20 p-10
                w-screen snap-x snap-mandatory scrollbar overflow-x-scroll overflow-y-hidden scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                    {/* h-screen snap-y snap-mandatory    overflow-y-scroll overflow-x-hidden z-0 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' */}
                {experiences?.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    )
};

export default WorkExperience;