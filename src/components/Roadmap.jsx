import Heading from "./Heading";
import Section from "./Section";
import { roadmap } from "../constants";

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="Ready to get started" tittle="What where working on" />
      </div>
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In Proggress";
        })}
      </div>
    </Section>
  );
};


export default Roadmap;
