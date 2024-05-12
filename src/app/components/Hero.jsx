// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";
// Import React to enable JSX syntax and component functionality.
import React from "react";

// Define the Hero functional component.
export default function Hero() {
  return (
    // Main container of the Hero section with Tailwind CSS for styling.
    <section className="py-10 px-5 bg-gray-800 text-center border border-gray-700 rounded-lg shadow-lg">
      {/* Heading of the Hero section, styled prominently in white. */}
      <h2 className="text-3xl font-bold text-white mb-3">
        Welcome to our Community Marketplace!
      </h2>
      {/* First paragraph describing the purpose of the marketplace. */}
      <p className="text-gray-300 mb-2">
        Discover items offered by your neighbors or list your own. Our platform
        is designed to make sharing easy and secure.
      </p>
      {/* Second paragraph encouraging users to join and start sharing. */}
      <p className="text-gray-300 mb-2">
        Why wait? Join us now and start sharing your items with your neighbors!
      </p>
      {/* Third paragraph emphasizing the ease, speed, and convenience of the platform. */}
      <p className="text-gray-300 mb-5">It's easy, fast, and convenient.</p>
    </section>
  );
}
