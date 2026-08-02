import type { Slide } from "../../type/home.type";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

interface Props {
  slide: Slide;
}

export default function HeroSlide({ slide }: Props) {
  return (
    <div className="relative h-full w-full">
      <HeroBackground slide={slide} />

      <HeroContent slide={slide} />
    </div>
  );
}
