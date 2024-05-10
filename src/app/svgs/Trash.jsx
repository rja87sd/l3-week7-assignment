// Credit to Lewis Benson for sharing this code and showing me how to set it up in class.
import React from "react"; // Import React library for building the component.

// Define and export the Trash component that receives a handleDelete function as a prop.
export default function Trash({ handleDelete }) {
  return (
    // SVG element, used as a button-like component for triggering deletion.
    <svg
      onClick={handleDelete} // Assign the handleDelete function to be called on click.
      style={{ color: "red" }} // Style the SVG with a red color to signify deletion.
      className="cursor-pointer" // Add a pointer cursor on hover to indicate interactivity.
      xmlns="http://www.w3.org/2000/svg" // Namespace declaration for SVG.
      width="1em" // Set the width relative to the font size of the element.
      height="1em" // Set the height relative to the font size of the element.
      viewBox="0 0 20 20" // Define the position and dimension of the SVG in user space.
    >
      {/* Path element describes the trash bin icon using currentColor to inherit the text color from parent elements. */}
      <path
        fill="currentColor" // Use the 'currentColor' to fill the path, which is set to red by the inline style.
        d="m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.689.689 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.689.689 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0m6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794zM6.716 6.34c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692m2.726 0c.38 0 .686.31.686.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692m2.728 0c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.685.692a.689.689 0 0 1-.686-.692v-8.05a.69.69 0 0 1 .686-.692M9.176 1.382c-.642.045-1.065.264-1.334.662c-.198.291-.297.543-.313.768l4.938-.001c-.014-.291-.129-.547-.352-.792c-.346-.38-.73-.586-1.093-.635z"
      />
    </svg>
  );
}
