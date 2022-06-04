import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick Oelsner</title>
        <meta name="description" content="Nick Oelsner's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <div className="flex flex-col md:flex-row h-[calc(100vh-76px)] w-full">
          <div className="flex flex-col justify-center flex-1 pl-12">
            <div className="mb-12 uppercase text-8xl font-header">Nick Oelsner</div>
            <div className="text-4xl">Frontend Developer at Mondo Robot</div>
          </div>
          <Canvas className="flex-1" dpr={[1, 2]}>
            <Scene />
          </Canvas>
        </div>
        <div className="h-[2000px] bg-topo bg-repeat">
          <div className="flex flex-col mx-auto max-w-7xl md:flex-row pt-60">
            <div className="relative object-cover w-7/12 h-auto drop-shadow-3xl">
              <Image
                src="/images/projects/brewgood-desktop-1.png"
                alt="demo"
                layout="responsive"
                height={1024}
                width={1440}
                priority={true}
              />
            </div>
            <div className="flex items-center justify-center flex-1 pl-12 w-5/7">
              <div className="max-w-[25rem]">
                <h2 className="mb-4 text-4xl font-semibold">Digital Projects</h2>
                <p className="mb-4 text-xl">
                  Side projects, work projects, open-source projects, these are examples of the coding and web
                  development I do on a day-to-day basis
                </p>
                <Link href="/digital-projects">
                  <a className="text-xl font-light uppercase hover:underline">Learn More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col mx-auto max-w-7xl md:flex-row pt-60">
            <div className="flex items-center justify-center flex-1 pr-12 w-5/7">
              <div className="max-w-[25rem]">
                <h2 className="mb-4 text-4xl font-semibold">Physical Projects</h2>
                <p className="mb-4 text-xl">
                  Woodworking, home office setup, projects I do at home or in my garage when I’m not at my computer
                  screen
                </p>
                <Link href="/digital-projects">
                  <a className="text-xl font-light uppercase hover:underline">Learn More</a>
                </Link>
              </div>
            </div>
            <div className="relative object-cover w-7/12 h-auto drop-shadow-3xl">
              <Image
                src="/images/projects/brewgood-desktop-1.png"
                alt="demo"
                layout="responsive"
                height={1024}
                width={1440}
                priority={true}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
