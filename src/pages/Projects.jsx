import React from "react";

const projects = [
  // Puedes agregar tus proyectos aquí
  { name: "Dream High", image: "/images/dreamhigh.png" },
  { name: "NBA Kronz", image: "/images/NbaKronz.png" },
  { name: "Skull", image: "/images/skull.png" },
];

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 flex flex-col items-center p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center text-zinc-200">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full max-w-5xl">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bento bg-zinc-800/40 rounded-2xl p-4 flex flex-col items-center border border-zinc-800/80"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h2 className="text-lg font-semibold text-zinc-100">
              {project.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
