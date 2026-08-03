"use client";

import { Container } from "@/components/ui/Container";
import { articles } from "../../data/home.data";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection() {
  return (
    <Container>
      <section className="flex flex-col gap-8 md:gap-12">
        <div className="text-center">
          <h2 className="heading heading1">مقالات</h2>

          <p className="articles-subtitle">
            جدیدترین مقالات و راهنمایی‌های آزمایشگاهی
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </Container>
  );
}
