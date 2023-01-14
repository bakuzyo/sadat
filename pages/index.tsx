import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import About from '../components/About'
// import Competences from '../components/Competences'
// import Diplomes from '../components/Diplomes'
// import WorkExperience from '../components/WorkExperience'
// import Header from '../components/Header'
// import Hero from '../components/Hero'
// import MessageMe from '../components/MessageMe'
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'
import dynamic from 'next/dynamic'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials}: Props ) => {
  
  const Diplomes = dynamic(() => import('../components/Diplomes'), {
    ssr: false,
  })

  const Competences = dynamic(() => import('../components/Competences'), {
    ssr: false,
  })

  const WorkExperience = dynamic(() => import('../components/WorkExperience'), {
    ssr: false,
  })

  const Header = dynamic(() => import('../components/Header'), {
    ssr: false,
  })
  const Hero = dynamic(() => import('../components/Hero'), {
    ssr: false,
  })

  const MessageMe = dynamic(() => import('../components/MessageMe'), {
    ssr: false,
  })
  const About = dynamic(() => import('../components/About'), {
    ssr: false,
  })

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar 
       scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Isabelle Sadat</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className='snap-start'>
        <Competences skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Diplomes projects={projects}/>
      </section>

      <section id='contact' className='snap-start'>
        <MessageMe />
      </section>
{/* 
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className="h-10 w-10 rounded-fll filter grayscale hover:grayscale-0
               cursor-pointer hover:p-1"
              src="https://i.postimg.cc/900TmpZ1/return-Home.png" alt="" />
          </div>
        </footer>
      </Link> */}
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  }
}