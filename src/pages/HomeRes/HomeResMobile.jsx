import { AboutMe } from "../../components/AboutMe/AboutMe";
import AcademicAchievements from "../../components/AcademicAchievements/AcademicAchievements";
import { Learning } from "../../components/Learning/Learning";
import { FollowMe } from "../../components/OnlinePresence/FollowMe";
import { Projects } from "../../components/Projects/Projects";
import { SolutionSuite } from "../../components/Solutions/SolutionSuite";
import { MyStacks } from "../../components/Stacks/MyStacks";
import { WhoAmI } from "../../components/WhoAmI/WhoAmI";
import { WorkTogether } from "../../components/WorkTogether/WorkTogether";
import { academicAchievementsData } from "../../data/achievementsData";

export const HomeResMobile = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950">
      <div className="min-h-screen h-fit max-w-[1000px] mx-auto grid grid-cols-1 gap-5 p-2.5">
        <div className="col-span-1 bento">
          <AboutMe />
        </div>

        {/* Hero Section - Large */}
        <div className="col-span-1 grid grid-cols-3 gap-4">
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
        <div className="col-span-1 grid grid-cols-1 gap-4">
          <div className="col-span-1 grid grid-cols-1 grid-rows-1 gap-4">
            <div className="col-span-1 bento">
              <FollowMe />
            </div>
            <div className="col-span-1 bento">
              <Learning />
            </div>
          </div>
        </div>

        {/* Profile Image - Small */}
        <div className="col-span-1 grid grid-cols-1 gap-4">
          <div className="col-span-1 bento max-h-[490px]">
            <AcademicAchievements
              achievements={academicAchievementsData}
              speed={0.1}
              pauseOnHover={false}
            />
          </div>
          <div className="col-span-1 bento">
            <WhoAmI />
          </div>
          <div className="col-span-1 bento">
            <WorkTogether />
          </div>
        </div>
      </div>
    </div>
  );
};
