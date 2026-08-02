import { aboutImages } from "../../data/home.data";
import ImageCard from "./ImageCard";

export default function AboutImages() {
  return (
    <div className="relative order-2 h-72 w-full sm:h-96 lg:order-1 lg:h-80 xl:h-full">
      {aboutImages.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}
