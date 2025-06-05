import { Projects } from "../components/Projects/Projects";
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
          <div className="first-col bento"></div>
        </div>

        {/* Skills - Medium */}
        <div className="col-span-4 row-span-12 bg-zinc-800 rounded-2xl p-6 border border-zinc-700">
          <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200">
              React
            </div>
            <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200">
              Node.js
            </div>
            <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200">
              TypeScript
            </div>
            <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200">
              Python
            </div>
            <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200">
              MongoDB
            </div>
            <div className="bg-zinc-700 rounded-lg px-3 py-2 text-sm text-zinc-200">
              AWS
            </div>
          </div>
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
