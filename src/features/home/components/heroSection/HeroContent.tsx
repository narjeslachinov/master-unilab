import type { Slide } from "../../type/home.type";

interface Props {
  slide: Slide;
}

export default function HeroContent({ slide }: Props) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4 text-center">
      <div className="text-light">
        <h1 className="heading1 space-y-4 font-bold">{slide.title}</h1>

        <p className="heading5">{slide.subtitle}</p>
      </div>
    </div>
  );
}
