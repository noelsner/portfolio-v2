import Head from "next/head";
import Link from "next/link";
import MobileScreenshot from "../../components/MobileScreenshot";
import Navbar from "../../components/Navbar";

export default function Brewgood() {
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
          <h1 className="mt-20 mb-8 text-center text-7xl">
            <Link href="https://brewgood.coffee/">brewgood.coffee</Link>
          </h1>
          <p className="text-center text-xl font-light">
            Next.js <span className="mx-2">|</span> SCSS Modules
          </p>

          <div className="flex flex-row max-w-6xl mx-auto items-center justify-between px-12 mt-40">
            <div className="w-1/2">
              <div className="max-w-md">
                <p className="italic mb-2">Objective</p>
                <p className="font-bold text-4xl mb-4">
                  Provide brewing recipes and a coffee-to-water ratio calculator
                </p>
                <p className="text-xl">
                  Through various books, websites, and videos, I had collected and tweaked recipes for a variety of
                  coffee brewing methods. I wanted a simple app that could keep them all together, plus help me get the
                  perfect amount of coffee and water
                </p>
              </div>
            </div>
            <MobileScreenshot
              imgUrl="/images/projects/brewgood-mobile-1.png"
              alt="brewgood home page screenshot"
              className="w-1/2"
            />
          </div>

          <div className="flex flex-row max-w-6xl mx-auto items-center justify-between px-12 mt-40">
            <div className="w-1/2 order-2">
              <div className="max-w-md">
                <p className="italic mb-2">Objective</p>
                <p className="font-bold text-4xl mb-4">
                  Provide brewing recipes and a coffee-to-water ratio calculator
                </p>
                <p className="text-xl">
                  Through various books, websites, and videos, I had collected and tweaked recipes for a variety of
                  coffee brewing methods. I wanted a simple app that could keep them all together, plus help me get the
                  perfect amount of coffee and water
                </p>
              </div>
            </div>
            <MobileScreenshot
              imgUrl="/images/projects/brewgood-mobile-2.png"
              alt="brewgood home page screenshot"
              className="w-1/2"
            />
          </div>

          <div className="flex flex-row max-w-6xl mx-auto items-center justify-between px-12 mt-40">
            <div className="w-1/2">
              <div className="max-w-md">
                <p className="italic mb-2">Objective</p>
                <p className="font-bold text-4xl mb-4">
                  Provide brewing recipes and a coffee-to-water ratio calculator
                </p>
                <p className="text-xl">
                  Through various books, websites, and videos, I had collected and tweaked recipes for a variety of
                  coffee brewing methods. I wanted a simple app that could keep them all together, plus help me get the
                  perfect amount of coffee and water
                </p>
              </div>
            </div>
            <MobileScreenshot
              imgUrl="/images/projects/brewgood-mobile-3.png"
              alt="brewgood home page screenshot"
              className="w-1/2"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
