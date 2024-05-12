// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";

// Importing Firestore utilities for querying and listening to data changes in real-time.
import { collection, onSnapshot, query, where } from "firebase/firestore";
// Importing React hooks for managing component state and effects.
import { useEffect, useState } from "react";
// Importing the Post component to render individual posts.
import Post from "./Post";
// Importing Firebase authentication and database references.
import { auth, db } from "@/app/firebaseConfig";
// Importing Firebase authentication utility to monitor authentication state changes.
import { onAuthStateChanged } from "firebase/auth";

// Defining the Posts functional component.
export default function Posts() {
  // State variable to store an array of posts.
  const [posts, setPosts] = useState([]);
  // State variable to store the current authenticated user.
  const [user, setUser] = useState(null);
  // State variable to track if only the user's posts should be shown.
  const [checked, setChecked] = useState(false);

  // Effect hook to subscribe to authentication state changes.
  useEffect(() => {
    // Subscription that sets the user state when authentication state changes.
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  // Effect hook to fetch posts based on authentication state and `checked` status.
  useEffect(() => {
    // Check if a user is logged in and retrieve their unique ID.
    const userId = auth.currentUser?.uid;

    // Query and subscribe to posts if the user is authenticated.
    if (user) {
      // Construct a Firestore query. If `checked` is true, filter posts by the logged-in user's ID.
      const q = query(
        collection(db, "posts"),
        ...(checked ? [where("userId", "==", userId)] : [])
      );
      // Real-time subscription to Firestore collection.
      const unsub = onSnapshot(q, (snapshot) => {
        // Mapping over the snapshot to transform document data to an array of post objects.
        const postsArray = snapshot.docs.map((doc) => ({
          id: doc.id, // Document ID.
          ...doc.data(), // Document data.
        }));
        setPosts(postsArray);
      });
      // Cleanup function to unsubscribe from the Firestore subscription when the component unmounts or dependencies change.
      return () => unsub();
    }
  }, [user, checked]); // Dependencies include user and checked state.

  // Rendering the component.
  return (
    <section
      className="flex w-full flex-col gap-3 bg-gray-800 p-5 text-white overflow-y-auto overflow-x-hidden"
      style={{ height: "300px" }} // Inline style to set the fixed height of the container.
    >
      {posts.map((post) => (
        // Rendering each post using the Post component.
        <Post key={post.id} user={user} post={post} />
      ))}
    </section>
  );
}
