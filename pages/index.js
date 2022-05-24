import Head from "next/head";
import { Canvas } from "@react-three/fiber";
import Scene from "../components/Scene";
import Navbar from "../components/Navbar";

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
          <div className="flex-1 flex flex-col justify-center pl-12">
            <div className="text-8xl uppercase font-header mb-12">Nick Oelsner</div>
            <div className="text-4xl">Frontend Developer at Mondo Robot</div>
          </div>
          <Canvas className="flex-1" dpr={[1, 2]}>
            <Scene />
          </Canvas>
        </div>
        <div className="h-[2000px] py-24 bg-topo bg-repeat">blah blah blah</div>
      </main>
    </div>
  );
}
