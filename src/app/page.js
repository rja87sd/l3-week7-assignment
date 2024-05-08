// page.js
"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";
import PostToPage from "./components/PostToPage";

export default function Home() {
  const [user, setUser] = useState(null);

  function getUser(user) {
    setUser(user);
  }

  return (
    <main className="text-center">
      <Header getUser={getUser} user={user} />
      <Hero getUser={getUser} user={user} />
      <h1>Hello Community!</h1>
      <LocalNews />
      <PostToPage />
      <Sponsors />
    </main>
  );
}
