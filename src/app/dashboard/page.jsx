"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sponsors from "../components/Sponsors";
import Modal from "../components/Modal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import Posts from "./components/Posts";
import Footer from "../components/Footer";
import AddPost from "../components/AddPost";

export default function page() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  function onShow(bool) {
    setShow(bool);
  }

  const router = useRouter();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
    });
    return () => unsub();
  }, []);

  return (
    <main>
      <Header />
      <AddPost onShow={onShow} />
      <Posts />
      {show && <Modal isNew={true} onShow={onShow} />}
      <Sponsors />
      <Footer />
    </main>
  );
}
