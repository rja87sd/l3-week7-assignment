// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";

// Importing Firestore functions needed to add and update documents.
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
// Importing React's useState hook for managing component state.
import React, { useState } from "react";
// Importing authentication and database configurations from Firebase.
import { auth, db } from "../firebaseConfig";

// Define the Modal functional component with props received for controlling visibility, checking if it's a new post, and the post ID.
export default function Modal({ onShow, isNew, id }) {
  // useState to manage the title of the post within the modal.
  const [title, setTitle] = useState("");
  // useState to manage the description of the post within the modal.
  const [description, setDescription] = useState("");

  // Function to handle adding a new post to the Firestore database.
  async function addPost() {
    // Check if a user is logged in before proceeding.
    if (!auth.currentUser) {
      console.error("No user logged in"); // Log error if no user is logged in.
      return; // Stop execution of the function if no user is logged in.
    }
    // Gather user details and the new post details.
    const userId = auth.currentUser.uid;
    const newPost = {
      comments: [], // Initialize comments as an empty array.
      title, // Title of the post from state.
      description, // Description of the post from state.
      userId, // ID of the user posting.
      displayName: auth.currentUser.displayName, // Display name of the user posting.
    };
    // Reference to the 'posts' collection in Firestore.
    const colRef = collection(db, "posts");
    try {
      // Attempt to add the new post to the Firestore database.
      await addDoc(colRef, newPost);
    } catch (error) {
      // Log any errors during the add operation.
      console.error("Error adding post", error);
    }
  }

  // Function to handle the submission of the form in the modal.
  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission action.
    // Check again if a user is logged in.
    if (!auth.currentUser) {
      console.error("No user logged in"); // Log an error if no user is authenticated.
      return; // Stop the function execution.
    }
    try {
      // Determine if this is a new post or an update to an existing one.
      if (isNew) {
        await addPost(); // If new, call addPost function.
      } else {
        // Otherwise, get a reference to the existing document.
        const docRef = doc(db, "posts", id);
        // Update the existing document with new title and description.
        await updateDoc(docRef, { title, description });
      }
      // Reset title and description states to empty after submission.
      setTitle("");
      setDescription("");
      // Call onShow function passed as prop to close the modal.
      onShow(false);
    } catch (error) {
      // Log any errors that occur during the form submission.
      console.error("Error handling submit", error);
    }
  }

  return (
    // Main container for the modal with fixed positioning covering the entire viewport.
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.7)] overflow-auto font-sans">
      {/* Inner container for the modal content with maximum width and background settings. */}
      <div className="w-full max-w-lg bg-gray-800 shadow-lg rounded-md p-6 relative text-white">
        {/* Header area of the modal, containing the title and close icon. */}
        <div className="flex items-center pb-3 border-b border-gray-600">
          {/* Title of the modal, dynamically displayed based on whether it's for adding or editing a post. */}
          <h3 className="text-xl font-bold flex-1">
            {isNew ? "Add a Post" : "Edit Post"}
          </h3>
          {/* SVG icon used as a close button, with an event handler to close the */}
          modal.
          <svg
            onClick={() => onShow(false)}
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 ml-2 cursor-pointer shrink-0 fill-current text-white hover:text-red-500"
            viewBox="0 0 320.591 320.591"
          >
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
          </svg>
        </div>
        {/* Form for inputting title and description of the post. */}
        <form onSubmit={handleSubmit} className="my-6">
          {/* Input field for the post title. */}
          <label htmlFor="title">
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-md h-10 px-6 bg-gray-700 text-white text-sm mb-3 outline-none border border-gray-600 focus:border-blue-500"
              type="text"
              name="title"
              id="title"
            />
          </label>
          {/* Textarea for the post description. */}
          <label htmlFor="description">
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md px-6 bg-gray-700 text-white text-sm pt-3 outline-none border border-gray-600 focus:border-blue-500"
              type="text"
              name="description"
              id="description"
            />
          </label>
        </form>
        {/* Container for action buttons, Save and Cancel. */}
        <div className="border-t border-gray-600 flex justify-end pt-6 space-x-4">
          {/* Cancel button to close the modal without saving. */}
          <button
            onClick={() => onShow(false)}
            type="button"
            className="px-6 py-2 rounded-md text-white text-sm bg-gray-600 hover:bg-gray-700 active:bg-gray-600"
          >
            Cancel
          </button>
          {/* Save button to submit the form and save the post. */}
          <button
            onClick={handleSubmit}
            type="button"
            className="px-6 py-2 rounded-md text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
