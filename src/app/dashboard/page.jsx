// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directs Next.js to only run this code on the client-side, not during server-side rendering.
"use client";

// Importing necessary React hooks and components.
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import Modal from "../components/Modal";
import { onAuthStateChanged } from "firebase/auth"; // Firebase method for monitoring auth state changes.
import { auth } from "../firebaseConfig"; // Firebase configuration for authentication.
import { useRouter } from "next/navigation"; // Import useRouter for page navigation based on criteria.
import Posts from "./components/Posts";
import Footer from "../components/Footer";
import AddPost from "../components/AddPost";

// Definition of the Dashboard functional component.
export default function Dashboard() {
  const [show, setShow] = useState(false); // State to control visibility of the modal.
  const [user, setUser] = useState(null); // State to hold user data.

  // Function to toggle the visibility of the modal.
  function onShow(bool) {
    setShow(bool);
  }

  const router = useRouter(); // Hook to access the Next.js router.
  useEffect(() => {
    // Subscribe to auth state changes.
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Update state with user data if logged in.
      } else {
        router.push("/"); // Redirect to home if not logged in.
      }
    });
    // Cleanup function to unsubscribe from auth listener on component unmount.
    return () => unsub();
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Renders the Header component. */}
        <Header />
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Renders the AddPost component with a
          function to control modal visibility. */}
          <AddPost onShow={onShow} />
        </div>
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Renders the Posts component that displays posts. */}
          <Posts />
        </div>
        {show && (
          <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
            {/* Conditional rendering of
            the Modal component. */}
            <Modal isNew={true} onShow={onShow} />
          </div>
        )}
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Renders the Sponsors component. */}
          <Sponsors />
        </div>
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Renders the Footer component. */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
