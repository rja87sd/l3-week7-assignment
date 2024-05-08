//LoginWithGoogle.jsx
'use client';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

export default function LoginWithGoogle({ getUser }) {

  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      getUser(result.user);
    } catch (error) {
      console.error("Error with Google sign-in:", error);
    }
  }

  return (
    <button onClick={handleGoogleSignIn} className="px-6 py-2.5 rounded-full text-white text-sm tracking-wider font-semibold border-none 
    outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 max-w-64">
      Login With Google
    </button>
  );
}
