// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";

// Import axios for making HTTP requests.
import axios from "axios";
// Import React hooks for state management and side effects.
import { useEffect, useState } from "react";
// Import the NewsCard component, used to display individual news articles.
import NewsCard from "./NewsCard";

// Define the LocalNews functional component.
export default function LocalNews() {
  // State to hold the list of news articles.
  const [news, setNews] = useState([]);
  // State to manage the loading status.
  const [isLoading, setLoading] = useState(true);

  // Effect hook to fetch news articles when the component mounts.
  useEffect(() => {
    // Define an asynchronous function to fetch news.
    async function fetchNews() {
      try {
        // Construct the URL for the news API with query parameters.
        const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`;

        // Make an HTTP GET request using axios. Switch the URL to a local JSON file in development mode.
        const response = await axios.get(
          process.env.NEXT_PUBLIC_DEV ? "/data.json" : url
        );

        // Update the news state with the articles from the response.
        setNews(response.data.articles);
        console.log(response.data); // Log the fetched data for debugging.
        setLoading(false); // Set loading to false after data is successfully fetched.
      } catch (error) {
        console.error("Error getting news", error); // Log errors if the request fails.
        setLoading(false); // Ensure loading is set to false even if there's an error.
      }
    }

    // Call the fetchNews function.
    fetchNews();
  }, []);

  // Render the LocalNews component.
  return (
    <section className="my-40">
      {/* Heading for the news section */}
      <h2 className="text-center mb-20 text-3xl font-bold text-white">
        In the Know: Local News!
      </h2>
      {/* Conditional rendering based on the isLoading state */}
      {!isLoading ? (
        // Container for news cards, displayed only when not loading
        <div className="flex gap-5 flex-wrap justify-center">
          {news.map((item, index) => (
            // Render a NewsCard for each article in the news array
            <NewsCard key={index} article={item} />
          ))}
        </div>
      ) : (
        // Display loading text while news is being fetched
        <div className="text-white">Loading...</div>
      )}
    </section>
  );
}
