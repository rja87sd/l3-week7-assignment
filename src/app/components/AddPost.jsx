// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Importing React to be able to use JSX and other React features.
import React from "react";

// Defining the AddPost functional component with 'onShow' prop to control modal visibility.
export default function AddPost({ onShow }) {
  return (
    // Container for the Add Post button with center alignment and margin at the top.
    <div className="flex flex-col items-center mt-20">
      {/* Descriptive text styled to fit the dark theme */}
      <h2 className="text-lg text-white mb-4">Post a Message</h2>

      {/* Button for adding a new post. It features a dark theme with contrasting borders and text, ensuring interactivity and visibility. */}
      <div
        className="border-2 border-green-500 flex gap-2 items-center cursor-pointer p-2 rounded-lg text-4xl bg-gray-800 text-white hover:bg-green-600"
        onClick={() => onShow(true)} // Sets the 'onShow' to true to display the modal when clicked.
      >
        {/* SVG icon for the add button, styled dynamically to change color based on action. */}
        <svg
          className="fill-current text-green-500 hover:text-white" // Tailwind classes to control the color dynamically.
          xmlns="http://www.w3.org/2000/svg"
          width="4rem" // Width of the icon.
          height="4rem" // Height of the icon.
          viewBox="0 0 24 24" // ViewBox for the SVG to define the area of the view to be shown.
        >
          <g fill="currentColor">
            <path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />
            <path
              fillRule="evenodd"
              d="M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"
              clipRule="evenodd"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
