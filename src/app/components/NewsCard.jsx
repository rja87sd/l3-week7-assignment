// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";

// Define the NewsCard functional component that takes an 'article' object as a prop.
export default function NewsCard({ article }) {
  return (
    // Using a React fragment to return a list of children without adding extra nodes to the DOM.
    <>
      {/* Main container for the news card with styling for dark theme and layout. */}
      <div
        className="bg-gray-800 shadow-lg w-full max-w-sm rounded-lg 
      overflow-hidden flex flex-column justify-between mx-auto font-sans"
      >
        {/* Image representing the news article, filling the width of its container. */}
        <img src={article.image} alt={article.title} className="w-full" />
        {/* Container for text content with padding. */}
        <div className="p-5">
          {/* News title displayed in bold white text. */}
          <h3 className="text-white text-xl font-bold">{article.title}</h3>
          {/* News description displayed in smaller, lighter text for contrast. */}
          <p className="mt-4 text-sm text-gray-300">{article.description}</p>
          {/* Link to read the full article, styled as a button. */}
          <a
            href={article.url} // URL to the full news article.
            target="_blank" // Opens the link in a new tab.
            rel="noopener noreferrer" // Security measure to prevent exploitation of the referrer.
            className="inline-block px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none 
            outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 transition duration-150 ease-in-out"
          >
            {/* Text of the button. */}
            Read More
          </a>
        </div>
      </div>
    </>
  );
}
