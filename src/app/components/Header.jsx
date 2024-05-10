"use client"; // Directive for Next.js to only run this code on the client-side.

// Importing necessary modules and components.
import LoginWithGoogle from "./LoginWithGoogle"; // Custom component for Google login functionality.
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase authentication methods for user state and signing out.
import { auth } from "../firebaseConfig"; // Firebase configuration, specifically the auth object.
import Link from "next/link"; // Next.js Link component for client-side navigation.
import { useEffect, useState } from "react"; // React hooks for managing side effects and state.

// Header component that receives a `getUser` prop, which could be a function for retrieving user details.
export default function Header({ getUser }) {
  const [user, setUser] = useState(null); // State to store the user object, initialized to null.

  // Effect hook to subscribe to authentication state changes.
  useEffect(() => {
    // Listening for changes in the authentication state.
    onAuthStateChanged(auth, (user) => {
      setUser(user); // Updating state with the current user object or null if logged out.
    });
  }, []); // Empty dependency array means this effect runs only once after the component mounts.

  // Function to handle click events on the mobile menu button.
  function handleClick() {
    const collapseMenu = document.getElementById("collapseMenu"); // Accessing the DOM element directly.
    if (collapseMenu.style.display === "block") {
      collapseMenu.style.display = "none"; // Toggle visibility off.
    } else {
      collapseMenu.style.display = "block"; // Toggle visibility on.
    }
  }

  return (
    // Main header element with various styling for layout and appearance.
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* Link to the homepage. */}
        <Link href="/">
          {/* Site title. */}
          <h1>Community Site</h1> 
        </Link>

        <div
          id="collapseMenu" // ID for CSS targeting and JavaScript manipulation.
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            onClick={handleClick} // Attach click event to toggle the menu.
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
            </svg>
          </button>
          <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            {user && (
              <li className="max-lg:border-b ml-auto border-gray-300 max-lg:py-3 px-3">
                <Link
                  href="/dashboard"
                  className="hover:text-[#007bff] cursor-pointer text-gray-500 block font-semibold text-[15px]"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-3">
          
          {/* Shows login button if user is not logged in. */}
          {!user && <LoginWithGoogle getUser={getUser} />} 
          {user && <button onClick={() => signOut(auth)}>Logout</button>} 
          
          {/* Shows logout button if user is logged in. */}
          <button onClick={handleClick} id="toggleOpen" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
