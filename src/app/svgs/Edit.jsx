// Credit to Lewis Benson for sharing this code and showing me how to set it up in class.
import React from "react";  // Import React for building the component.

// Define and export the Edit function component, which renders an SVG icon.
export default function Edit() {
  return (
    // SVG element defines the space for the Edit icon with specific width and height.
    <svg
      xmlns="http://www.w3.org/2000/svg" // Namespace declaration for SVG.
      width="1em" // Width set to 1em to scale relative to its font-size.
      height="1em" // Height set to 1em for consistent sizing with width.
      viewBox="0 0 24 24" // ViewBox attribute defining the position and dimension of the SVG in user space.
    >
      {/* <g> tag used to group SVG shapes together, with specified attributes for styling. */}
      <g
        fill="none" // No fill color to keep the inside of the shapes transparent.
        stroke="currentColor" // Use the current text color for the stroke of the paths.
        strokeLinecap="round" // Defines rounded ends of each line.
        strokeLinejoin="round" // Defines rounded joins of paths.
        strokeWidth="2" // Sets the width of the stroke to 2 for better visibility.
      >
        {/* First path describes a part of the SVG, likely representing a document or surface to be edited. */}
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        {/* Second path represents the pencil or editing tool. */}
        <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1l1-4Z" />
      </g>
    </svg>
  );
}

