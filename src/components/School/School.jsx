import InfiniteScroll from "../Ui/InfiniteScroll";
import "./school.css";

const items = [
  {
    content: (
      <p className="card-txt">
        {" "}
        <span className="study-txt">2023 - 2026</span> Bachelor's Degree in
        Computer Science Engineering
      </p>
    ),
  },
  {
    content: (
      <p className="card-txt">
        {" "}
        <span className="study-txt">2023</span> The Complete 2023 Web
        Development Bootcamp{" "}
      </p>
    ),
  },
  {
    content: (
      <p className="card-txt">
        {" "}
        <span className="study-txt">2024</span> Front-end Development by Meta{" "}
      </p>
    ),
  },
  {
    content: (
      <p className="card-txt">
        {" "}
        <span className="study-txt">2025</span> Full Stack Development by Meta{" "}
      </p>
    ),
  },
];

export const School = () => {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <InfiniteScroll
        items={items}
        isTilted={true}
        tiltDirection="right"
        autoplay={true}
        autoplaySpeed={0.4}
        autoplayDirection="up"
        pauseOnHover={true}
      />
    </div>
  );
};
