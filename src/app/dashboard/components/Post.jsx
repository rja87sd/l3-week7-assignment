// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Import Accordion component from react-bootstrap for collapsible content handling.
import { Accordion } from "react-bootstrap";
// Import custom components used within the post.
import AddComment from "@/app/components/AddComment";
import Modal from "@/app/components/Modal";
import ViewComments from "@/app/components/ViewComments";
// Import database configuration from Firebase setup.
import { db } from "@/app/firebaseConfig";
// Import SVG components for edit and trash icons.
import Edit from "@/app/svgs/Edit";
import Trash from "@/app/svgs/Trash";
// Import Firestore utilities for document manipulation.
import { deleteDoc, doc } from "firebase/firestore";
// Import React and useState hook for component state management.
import React, { useState } from "react";

// Define the Post component with props passed for individual post and user details.
export default function Post({ post, user }) {
  // State to manage visibility of modal dialog.
  const [show, setShow] = useState(false);

  // Function to toggle modal visibility, accepting a boolean.
  function onShow(bool) {
    setShow(bool);
  }

  // Asynchronous function to handle the deletion of a post.
  async function handleDelete() {
    // Reference the specific post document in Firestore using post ID.
    const postRef = doc(db, "posts", post.id);
    try {
      // Attempt to delete the post document.
      await deleteDoc(postRef);
    } catch (error) {
      // Log any errors that occur during the delete operation.
      console.error("error deleting doc", error);
    }
  }

  return (
    <>
      {/* Conditionally render the Modal component if 'show' is true. The modal is used for editing or viewing details. */}
      {show && <Modal id={post.id} onShow={onShow} isNew={false} />}

      {/* Main container for the post, styled with a dark theme. */}
      <div className="bg-gray-800 shadow-lg w-75 mt-20 mx-auto rounded-lg font-sans text-white">
        {/* Display the post's displayName or a fallback text if unavailable. */}
        <p>{post.displayName || "Username unavailable"}</p>
        {/* Container for the post's title and description. */}
        <div className="px-4 py-6">
          {/* Post title, styled prominently. */}
          <h3 className="mt-2 text-xl font-bold">{post.title}</h3>
          {/* Post description with lighter text color for contrast. */}
          <p className="text-gray-300">{post.description}</p>
          {/* Conditionally display edit and delete options if the current user is the post's author. */}
          {user && user.uid === post.userId && (
            <div className="flex space-x-2 mt-4">
              {/* Trash icon for deleting the post, with an event handler attached. */}
              <Trash handleDelete={handleDelete} />
              {/* Edit icon to open the modal for editing, toggles the 'show' state. */}
              <div onClick={() => setShow(true)}>
                <Edit />
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Additional components related to the post. */}
      <div>
        {/* Component for adding a comment to the post. */}
        <AddComment post={post} />
        {/* Container for displaying comments with an accordion UI component for collapsible behavior. */}
        <div className="w-full lg:w-2/3 mx-auto">
          <Accordion defaultActiveKey="0" className="bg-gray-700 text-white">
            <Accordion.Item eventKey="0">
              {/* Accordion header for collapsing and expanding the comment section. */}
              <Accordion.Header>Comments</Accordion.Header>
              {/* Accordion body containing the view for comments. */}
              <Accordion.Body>
                <ViewComments post={post} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
