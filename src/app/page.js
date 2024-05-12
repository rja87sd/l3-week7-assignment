// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directs Next.js to only run this code on the client-side, not during server-side rendering.
"use client";

// Importing React hooks and components necessary for the component's functionality.
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";

// Firebase authentication methods for monitoring auth state changes.
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

// Definition of the Home functional component.
export default function Home() {
  // State to store the current user, initially set to null.
  const [user, setUser] = useState(null);

  // Effect hook to monitor authentication state changes.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user); // Logs user data to the console whenever the auth state changes.
    });
  }, []); // Empty dependency array means this effect runs only once after the component mounts.

  // Function to update the 'user' state.
  function getUser(user) {
    setUser(user); // Updates the user state with the new user data passed to this function.
  }

  // The component returns a structured layout of the home page.
  return (
    // Main container with dark background and white text.
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Responsive container that centers content and applies padding. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Renders the Header component and passes the getUser function as a prop. */}
        <Header getUser={getUser} />
        {/* Styling for a section, applying margins, padding, background, etc. */}
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Renders the Hero component within its styled section. */}
          <Hero />
        </div>
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Similar styled section for LocalNews component. */}
          <LocalNews />
        </div>
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Similar styled section for Sponsors component. */}
          <Sponsors />
        </div>
        <div className="my-6 p-4 bg-gray-800 rounded-lg shadow-md">
          {/* Similar styled section for Footer component. */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
