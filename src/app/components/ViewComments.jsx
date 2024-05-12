// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Import React for using JSX syntax.
import React from "react";

// Define the ViewComments functional component, which takes a 'post' object as a prop.
export default function ViewComments({ post }) {
  return (
    // Main container that takes full width on small screens and 2/3 width on larger screens, centered.
    <div className="w-full lg:w-2/3 mx-auto">
      {/* Map over the 'comments' array in the 'post' object, rendering a div for each comment. */}
      {post.comments.map((comment, index) => (
        // Each comment div has a dark background, a top border, and vertical padding.
        // 'first:pt-0' removes padding-top for the first comment to avoid extra space at the top.
        <div
          className="bg-gray-800 border-t border-gray-600 px-4 py-3 first:pt-0"
          key={index} // React key for list items for efficient re-rendering.
        >
          {/* Display the commenter's display name in bold white text. */}
          <p className="font-semibold text-white">{comment.displayName}</p>
          {/* Display the comment text in smaller, lighter text for contrast. */}
          <p className="text-gray-400 text-sm">{comment.text}</p>
        </div>
      ))}
    </div>
  );
}
