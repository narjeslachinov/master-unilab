import Image from "next/image";
import { AboutImage } from "../../type/home.type";

type Props = {
  image: AboutImage;
};

export default function ImageCard({ image }: Props) {
  return (
    <div className={image.className}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 33vw, 25vw"
      />
    </div>
  );
}
