import { AboutMe } from "../components/AboutMe/AboutMe";
import { Projects } from "../components/Projects/Projects";
import { SolutionSuite } from "../components/Solutions/SolutionSuite";
import { MyStacks } from "../components/Stacks/MyStacks";

export const Home = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950">
      <div className="h-screen w-full grid grid-cols-12 grid-rows-12 gap-5 p-10">
        {/* Hero Section - Large */}
        <div className="col-span-3 row-span-12 grid grid-cols-3 grid-rows-12 gap-4">
          <div className="first-col bento">
            <MyStacks />
          </div>
          <div className="first-col bento">
            <Projects />
          </div>
          <div className="first-col bento">
            <SolutionSuite />
          </div>
        </div>

        {/* Skills - Medium */}
        <div className="col-span-4 row-span-12 grid grid-cols-3 grid-rows-12 gap-4">
          <div className="col-span-3 row-span-6 bento">
            <AboutMe />
          </div>
          <div className="col-span-3 row-span-6 bento"></div>
        </div>

        {/* Profile Image - Small */}
        <div className="col-span-5 row-span-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 flex items-center justify-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">👨‍💻</span>
          </div>
        </div>
      </div>
    </div>
  );
};
