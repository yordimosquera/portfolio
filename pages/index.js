import Head from "next/head";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import { experiences, projects, skills, socials } from "../services";
import { fetch } from "../services/pageInfo";

export default function Home({
  socials = [],
  skills,
  experiences,
  pageInfo,
  projects,
}) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll  overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Yordi´s portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              alt=""
              src="https://i.imgur.com/e2yvD6A.png"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const pageInfoResponse = await fetch();
//   // const experiencesResponse = await experiences.fetch();
//   // const socialsResponse = await socials.fetch();
//   // const projectsResponse = await projects.fetch();
//   // const skilssResponse = await skills.fetch();

//   return {
//     props: {
//       pageInfo: pageInfoResponse,
//       skilss: {},
//       socials: [],
//       projects: {},
//       experiences: {},
//     },
//     revalidate: 10,
//   };
// };
