import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

export default function LocalNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setNews(response.data.articles); // Make sure to set the correct path if needed.
      } catch (error) {
        console.error("Error getting news:", error);
      }
    }
    fetchNews();
  }, []);

  return (
    <section
      className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg 
overflow-hidden flex flex-col justify-between items-center mx-auto font-[sans-serif]"
    >
      <h2>In the Know: Local News</h2>
      <div className="">
        {news.map((item, index) => (
          <NewsCard key={index} article={item} />
        ))}
      </div>
    </section>
  );
}
