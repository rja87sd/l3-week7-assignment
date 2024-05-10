"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

export default function LoginWithGoogle({ getUser }) {
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      getUser(user);
    } catch (error) {}
  }

  return (
    <div
      onClick={handleGoogleSignIn}
      className="cursor-pointer px-6 py-2.5  rounded-full text-white text-sm tracking-wider font-semibold bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-600"
    >
      Login
    </div>
  );
}
