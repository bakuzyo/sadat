import React from 'react';
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience;
};


export default function ExperienceCard({ experience }: Props) {

    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
           w-[300px] h-[730px] md:w-[600px] xl:w-[900px] snap-center bg-[rgb(0,16,102)] md:p-6 p-3
              hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
                  overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover
             object-center rounded-full'
                src={urlFor(experience?.companyImage).url()}
                // src="https://cdn.sanity.io/images/rlw8j87m/production/5480cc8d0ee57b00173df4da54f66e84892da7da-650x435.jpg"
                // // src="https://cdn.sanity.io/images/rlw8j87m/production/9a463677b172d5259f7cfc5368400c2627b44ce5-4992x3744.jpg"
                // // src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                // Sadat-min.png"
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='underline decoration-[#F7AB0A]/50 font-bold md:text-2xl md:mt-1 -mt-5'>{experience.company}</h4>
                <div className='flex space-x-2 md:my-2 my-1'>
                    {/* <img
                    className='h-10 w-10 rounded-full'
                    src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                    alt=""
                />
                <div>
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                    alt=""
                />
                </div>
                <img
                    className='h-10 w-10 rounded-full'
                    src="https://i.postimg.cc/52hNRBnB/filter-Isabelle-
                Sadat-min.png"
                    alt=""
                /> */}
                    {experience.technologies.map(technology => (
                        <img
                            key={technology._id}
                            className="h-8 w-8 md:h-[75px] md:w-[75px] md:m-2 m-1 object-cover rounded-full"
                            src={urlFor(technology.image).url()}
                        />
                    ))}
                </div>
                {/* <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()}
                </p> */}
                <ul className='text-center md:text-base text-xs space-y-4 ml-5'>
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}

                </ul>
            </div>
        </article>
    )
}