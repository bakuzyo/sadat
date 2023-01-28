import React from 'react';
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[];
}

function Diplomes({ projects }: Props) {
    // const diplomes = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0'>
            {/* <h3 className='absolute top-24 uppercase tracking-[20px] text-gray=500 text-2xl'>
                Diplomes
            </h3> */}
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
                 snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 
                    scrollbar-thumb-[#F7AB0A]/80'>
                {projects?.map((project, i) => (
                    <div
                        key={project._id}
                        className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                         items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            className='md:h-[450px]'
                            // src="https://cdn.sanity.io/images/rlw8j87m/production/6b7e553f490c40e1de7f49d3641db8e3fa0c5804-600x397.jpg"
                            alt=""
                        />
                        <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-xl md:text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Étape {i + 1} sur {projects.length}:
                                </span>{" "}
                                {project?.title}
                            </h4>

                            <div className='flex items-center space-x-2 justify-center'>
                                {/* {project?.technologies.map((technology) => (
                                    <img
                                        className='h-10 w-10'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=''
                                    />
                                ))} */}
                            </div>
                            <p className='text-base md:text-lg text-center'>
                                {project?.sommaire}
                                {/* {project?.linkTobuild} */}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    );
}

export default Diplomes