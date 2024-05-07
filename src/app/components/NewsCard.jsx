"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function NewsCard({ article }) {
  return (
    <>
      <div
        className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg 
      overflow-hidden flex flex-column justify-between mx-auto font-[sans-serif]"
      >
        <img src={article.image} className="w-full" />
        <h3 className="px-5 text-[#333] text-xl font-bold">{article.title}</h3>
        <div className="px-4 py-6">
          <p className="mt-4 text-sm text-gray-500">{article.description}</p>
          <button
            target="_blank"
            href={article.url}
            type="button"
            className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none 
            outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
