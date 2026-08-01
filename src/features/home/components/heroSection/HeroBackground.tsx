import Image from "next/image";
import type { Slide } from "../../type/home.type";

interface Props {
  slide: Slide;
}

export default function HeroBackground({ slide }: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src={slide.imageDesktop}
          alt={slide.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Mobile */}
      <div className="absolute inset-0 block md:hidden">
        <Image
          src={slide.imageMobile}
          alt={slide.title}
          fill
          className="object-cover"
        />
      </div>
    </>
  );
}
