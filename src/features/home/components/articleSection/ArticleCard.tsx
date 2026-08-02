import Image from "next/image";
import Link from "next/link";

import { Article } from "../../type/home.type";

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link
      href={article.href}
      className="group flex items-center gap-4 transition-transform hover:translate-y-1"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="64px"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="heading heading6 text-limit-2 group-hover:text-primary leading-snug font-extrabold transition-colors">
          {article.title}
        </h3>

        <span className="customeSmallText mt-1">
          {article.author} | {article.date}
        </span>

        <span className="bg-primary mt-1 block h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
      </div>
    </Link>
  );
}
