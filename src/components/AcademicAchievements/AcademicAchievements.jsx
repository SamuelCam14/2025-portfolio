// src/components/AcademicAchievementsInfiniteScroll.jsx
import { useState, useEffect, useRef } from "react";
import { TbSchool } from "react-icons/tb";

const AcademicAchievements = ({
  achievements,
  speed = 0.05,
  pauseOnHover = true,
}) => {
  const loopedAchievements =
    achievements.length > 0 ? [...achievements, ...achievements] : [];
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef(null);
  const currentScrollRef = useRef(0);
  const contentHeightRef = useRef(0);
  const containerHeightRef = useRef(0);

  const animateScroll = () => {
    if (
      !innerRef.current ||
      !containerRef.current ||
      contentHeightRef.current === 0
    ) {
      animationFrameRef.current = requestAnimationFrame(animateScroll);
      return;
    }

    if (!isHovered) {
      currentScrollRef.current += speed;

      if (currentScrollRef.current >= contentHeightRef.current / 2) {
        currentScrollRef.current = 0;
      }
      innerRef.current.style.transform = `translateY(-${currentScrollRef.current}px)`;
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    const updateHeights = () => {
      if (innerRef.current && containerRef.current) {
        contentHeightRef.current = innerRef.current.scrollHeight;
        containerHeightRef.current = containerRef.current.clientHeight;

        if (contentHeightRef.current <= containerHeightRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          innerRef.current.style.transform = `translateY(0px)`;
          return;
        }

        if (!animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(animateScroll);
        }
      }
    };

    updateHeights();

    const resizeObserver = new ResizeObserver(() => {
      updateHeights();
      currentScrollRef.current = 0;
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    if (innerRef.current) {
      resizeObserver.observe(innerRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      if (innerRef.current) {
        resizeObserver.unobserve(innerRef.current);
      }
    };
  }, [achievements, speed, isHovered]);

  if (achievements.length === 0) {
    return (
      <div className="p-6 relative flex flex-col h-full w-full justify-center items-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          Logros Académicos
        </h2>
        <p className="text-zinc-500">No hay logros académicos para mostrar.</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="pt-5 px-8 pb-0 relative overflow-hidden flex flex-col h-full w-full"
      onMouseEnter={pauseOnHover ? () => setIsHovered(true) : null}
      onMouseLeave={pauseOnHover ? () => setIsHovered(false) : null}
    >
      <div className="h-fit">
        <div className="flex gap-1 items-center justify-center">
          <TbSchool className="h-5 w-5 text-rose-300/90" />
          <h2 className="text-zinc-400">Academic</h2>
        </div>
        <p className="text-zinc-200 font-medium text-xl mt-1 mb-5 text-center">
          My Achievements
        </p>
      </div>
      <div className="flex-1 overflow-hidden" style={{ minHeight: 0 }}>
        {" "}
        <div ref={innerRef} className="will-change-transform">
          {" "}
          {loopedAchievements.map((achievement, index) => (
            <div
              key={`${achievement.id}-${index}`}
              className="relative mb-8 flex items-start"
            >
              <div className="absolute left-2.5 top-0 h-full w-0.5 bg-zinc-700/80"></div>
              <div className="absolute left-1 top-0 w-3.5 h-3.5 rounded-full bg-zinc-500 z-10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
              </div>

              <div className="ml-10 bg-zinc-800/40 border border-zinc-800/80 rounded-2xl p-4 w-[calc(100%-40px)] flex flex-col justify-between transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {achievement.title}
                </h3>
                <p className="text-zinc-300 text-sm mb-2">
                  {achievement.institution}
                </p>
                <p className="text-zinc-400 text-xs">{achievement.dateRange}</p>
                {achievement.description && (
                  <p className="text-zinc-400 text-sm mt-2">
                    {achievement.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicAchievements;
