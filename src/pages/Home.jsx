import { AboutMe } from "../components/AboutMe/AboutMe";
import AcademicAchievements from "../components/AcademicAchievements/AcademicAchievements";
import { Learning } from "../components/Learning/Learning";
import { FollowMe } from "../components/OnlinePresence/FollowMe";
import { Projects } from "../components/Projects/Projects";
import { SolutionSuite } from "../components/Solutions/SolutionSuite";
import { MyStacks } from "../components/Stacks/MyStacks";
import { WhoAmI } from "../components/WhoAmI/WhoAmI";
import { WorkTogether } from "../components/WorkTogether/WorkTogether";
import { academicAchievementsData } from "../data/achievementsData";

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
        <div className="col-span-4 row-span-12 grid grid-cols-3 grid-rows-11 gap-4">
          <div className="col-span-3 row-span-5 bento">
            <AboutMe />
          </div>
          <div className="col-span-3 row-span-6 grid grid-cols-4 grid-rows-1 gap-4">
            <div className="col-span-2 grid-rows-1 bento">
              <FollowMe />
            </div>
            <div className="col-span-2 grid-rows-1 bento">
              <Learning />
            </div>
          </div>
        </div>

        {/* Profile Image - Small */}
        <div className="col-span-5 row-span-12 grid grid-cols-5 grid-rows-12 gap-4">
          <div className="col-span-3 row-span-7 bento">
            <AcademicAchievements
              achievements={academicAchievementsData}
              speed={0.1}
              pauseOnHover={false}
            />
          </div>
          <div className="col-span-2 row-span-6 bento">
            <WhoAmI />
          </div>
          <div className="col-span-5 row-span-5 bento">
            <WorkTogether />
          </div>
        </div>
      </div>
    </div>
  );
};
