// Credit to Lewis Benson for guiding us through this assignment, sharing the code for those of us who fell behind, and helping us to understand how this all works.
// Credit to ChatGPT for assistance, code organization, and code comments.

// Directive to ensure this code runs only on the client-side in a Next.js environment.
"use client";

// Importing signInWithPopup function from Firebase authentication for Google sign-in.
import { signInWithPopup } from "firebase/auth";
// Importing the auth object and provider configured for Google authentication from Firebase setup.
import { auth, provider } from "../firebaseConfig";

// Define the LoginWithGoogle functional component that takes a getUser function as a prop.
export default function LoginWithGoogle({ getUser }) {
  // Asynchronous function to handle sign-in using Google.
  async function handleGoogleSignIn() {
    try {
      // Attempt to sign in using the Google provider and auth configuration.
      const result = await signInWithPopup(auth, provider);
      // Extract the user object from the sign-in result.
      const user = result.user;
      // Invoke the getUser function passed as a prop with the signed-in user data.
      getUser(user);
    } catch (error) {
      // If there's an error during sign-in, log it to the console (consider handling this visibly).
      console.error("Login failed", error);
    }
  }

  // Render a div that when clicked, triggers the Google sign-in process.
  return (
    <div
      // Event handler for click event to initiate Google sign-in.
      onClick={handleGoogleSignIn}
      // Styling for the login button, with hover and active state styles for better user interaction.
      className="cursor-pointer px-6 py-2.5 rounded-full text-white text-sm tracking-wider font-semibold bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-600"
    >
      {/* Button text. */}
      Login
    </div>
  );
}
