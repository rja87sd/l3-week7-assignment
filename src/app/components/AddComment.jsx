// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";

// Importing Firestore utilities for accessing and updating documents.
import { doc, updateDoc } from "firebase/firestore";
// Importing React's useState hook for managing component state.
import { useState } from "react";
// Importing authentication and database configurations.
import { auth, db } from "../firebaseConfig";

// Define the AddComment functional component, which takes a 'post' object as a prop.
export default function AddComment({ post }) {
  // State to store the text of the new comment.
  const [text, setText] = useState("");

  // Asynchronous function to handle form submission.
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior.
    try {
      // Reference the specific post document in Firestore using the post ID.
      const docRef = doc(db, "posts", post.id);
      // Update the post document by appending a new comment to its 'comments' array.
      const ref = await updateDoc(docRef, {
        comments: [
          ...post.comments, // Spread existing comments to maintain them.
          { displayName: auth.currentUser.displayName, text }, // Add new comment with the user's display name and the comment text.
        ],
      });
      console.log(ref); // Log the reference to the updated document for debugging.
    } catch (error) {
      console.error(error); // Log any errors that occur during the update.
    }
  }

  // Render a form for adding a comment.
  return (
    <>
      <form
        className="bg-gray-800 border-t border-gray-600 w-full lg:w-2/3 mx-auto p-4 rounded-md shadow" // Styling the form with Tailwind CSS for dark theme and responsiveness.
        onSubmit={handleSubmit} // Set the handleSubmit function to be called on form submission.
      >
        {/* Styling the label. */}
        <label className="block mb-2 font-semibold text-white">
          {/* Label text. */}
          Comment:
          <textarea // Textarea for inputting the comment text.
            className="w-full rounded-md px-4 bg-gray-700 text-white text-sm pt-3 outline-none border border-gray-500 focus:border-blue-500" // Styling the textarea.
            onChange={(e) => setText(e.target.value)} // Update the text state on each keystroke.
            value={text} // Bind the text area value to the text state.
            name="text" // Name attribute for the textarea.
            id="text" // ID attribute for the textarea, useful for labeling and form submission.
          ></textarea>
        </label>
        {/* Button to submit the form, styled with Tailwind CSS. */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-150 ease-in-out">
          {/* Button text. */}
          Add Comment
        </button>
      </form>
    </>
  );
}
