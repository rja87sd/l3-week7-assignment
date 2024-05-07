"use client";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function () {
  const [news, setNews] = useState();

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setNews(response.data);
      } catch (error) {
        console.error("Error getting news:", error);
      }
    }
    fetchNews();
  }, []);
  return (
    <section>
      <h2>In the Know: Local News!</h2>
      <div>
        {news.map((item, index) => (
          <NewsCard key={index} article={item} />
        ))}
      </div>
    </section>
  );
}
