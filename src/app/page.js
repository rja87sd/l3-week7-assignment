"use client";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);
  function getUser(user) {
    setUser(user);
  }

  return (
    <main>
      <Header getUser={getUser} />
      <Hero />
      <LocalNews />
      <Sponsors />
      <Footer />
    </main>
  );
}
