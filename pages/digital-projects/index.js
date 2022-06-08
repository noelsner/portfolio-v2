import Head from "next/head";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import MobileScreenshot from "../../components/MobileScreenshot";
import DesktopScreenshot from "../../components/DesktopScreenshot";

const projects = {
  brewgood: {
    name: "brewgood.coffee",
    tags: ["Personal Project", "Next.js", "SCSS"],
    description:
      "A fun project to help make the perfect cup of coffee. It features coffee recipes that I use regularly, and a calculator to get the best coffee-to-water ratio.",
    pageUrl: "/digital-projects/brewgood",
    imgUrl: "/images/projects/brewgood-mobile-1.png",
  },
  spacespromo: {
    name: "SpacesPromo.com",
    tags: ["Personal Project", "Next.js", "SCSS"],
    description:
      "SpacesPromo generates images to promote Twitter Spaces. The image displays information about the Space and the Speakers.",
    pageUrl: "/digital-projects/spacespromo",
    imgUrl: "/images/projects/brewgood-mobile-1.png",
  },
  eimmigrate: {
    name: "Project New Citizen (E-immigrate)",
    tags: ["Volunteer Work", "Open Source Project", "React", "Node.js", "MongoDB"],
    description:
      "Project New Citizen is an open source web application created for the CET-ICP in collaboration with Code for San Jose. CET-ICP regularly holds workshops to help immigrants on their paths to becoming U.S. Citizens, but when they could no longer hold their in-person workshops due to COVID-19 they reached out to Code for San Jose to help move the workshop online.",
    pageUrl: "/digital-projects/e-immigrate",
    imgUrl: "/images/projects/brewgood-mobile-1.png",
  },
};

const DigitalProjectOverview = ({ project, children }) => {
  return (
    <div className="flex flex-col items-center gap-3 mb-36">
      <div className="max-w-5xl">
        <h2 className="mb-3 text-4xl font-semibold">{project.name}</h2>
        <p className="flex items-center mb-3">
          {project.tags.map((tag, idx) => (
            <span key={tag}>
              <span className="text-lg italic">{tag}</span>
              {idx < project.tags.length - 1 && <span className="mx-2 text-xl">•</span>}
            </span>
          ))}
        </p>
        <p className="text-xl mb-3">{project.description}</p>
        <Link href={project.pageUrl}>
          <a className="text-xl font-light uppercase hover:underline">Learn More</a>
        </Link>
      </div>
      <div className="relative w-full h-full max-w-6xl mx-auto mt-8 mb-24">{children}</div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick Oelsner - Digital Projects</title>
        <meta name="description" content="Nick Oelsner's Portfolio - Digital Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen pb-16 bg-repeat bg-topo">
        <Navbar showName={true} />

        <main>
          <h1 className="my-20 text-center text-7xl font-header">Digital Projects</h1>
          <div className="px-4 mx-auto lg:px-12">
            <DigitalProjectOverview project={projects.brewgood}>
              <DesktopScreenshot
                imgUrl="/images/projects/brewgood-desktop-1.png"
                alt="brewgood.coffee screenshot"
                className="relative inset-0 w-2/3"
              />
              <MobileScreenshot
                imgUrl={"/images/projects/brewgood-mobile-2.png"}
                alt={projects.brewgood.name}
                className="absolute top-36 right-56"
                small
              />
              <MobileScreenshot
                imgUrl="/images/projects/brewgood-mobile-3.png"
                alt={projects.brewgood.name}
                className="absolute right-0 top-24"
                small
              />
            </DigitalProjectOverview>

            <DigitalProjectOverview project={projects.spacespromo}>
              <DesktopScreenshot
                imgUrl="/images/projects/spacespromo-desktop-1.png"
                alt="spacespromo screenshot"
                className="relative inset-0 w-[55%]"
                priority={true}
              />
              <DesktopScreenshot
                imgUrl="/images/projects/spacespromo-desktop-2.png"
                alt="spacespromo screenshot"
                className="absolute right-0 w-[55%] top-16"
                priority={true}
              />
            </DigitalProjectOverview>

            <DigitalProjectOverview project={projects.eimmigrate}>
              <DesktopScreenshot
                imgUrl="/images/projects/spacespromo-desktop-1.png"
                alt="spacespromo screenshot"
                className="relative inset-0 w-[55%]"
                priority={true}
              />
              <DesktopScreenshot
                imgUrl="/images/projects/spacespromo-desktop-2.png"
                alt="spacespromo screenshot"
                className="absolute right-0 w-[55%] top-16"
                priority={true}
              />
            </DigitalProjectOverview>
          </div>
        </main>
      </div>
    </div>
  );
}
