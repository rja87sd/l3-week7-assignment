// Credit to Lewis Benson for sharing this code. This comment is important for acknowledging the source or inspiration for the code.

// Importing React to be able to use JSX and other React features.
import React from "react";

// Defining the AddPost functional component with 'onShow' prop to control modal visibility.
export default function AddPost({ onShow }) {
  return (
    // Container for the Add Post button with center alignment and margin on the top.
    <div className="flex mt-20 justify-center">
      {/* Button for adding a new post. It has a border, cursor pointer for interactivity, padding, rounded edges, and a large font size. */}
      
      <div
        className="border-2 flex gap-2 items-center cursor-pointer p-2 rounded-lg text-4xl"
        onClick={() => onShow(true)} // Sets the 'onShow' to true to display the modal when clicked.
      >
        {/* SVG icon for the add button, styled in green color to indicate availability or a positive action. */}
        
        <svg
          style={{ color: "green" }}
          xmlns="http://www.w3.org/2000/svg"
          width="4rem" // Width of the icon.
          height="4rem" // Height of the icon.
          viewBox="0 0 24 24" // ViewBox for the SVG to define the area of the view to be shown.
        >
          {/* Group tag with the current text color. */}
          <g fill="currentColor">

            {/* SVG path for a plus icon, typically used for adding content. */}
            <path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1" />

            {/* Second path for creating a boundary or background for the icon, with even-odd fill rule. */} 
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
