// Hero.jsx
"use client";
import React from "react";
import LoginWithGoogle from "./LoginWithGoogle";

export default function Hero({ getUser }) {
  return (
    <section className="text-center">
      <h2>Welcome to our Community Marketplace!</h2>
      <p>
        Why wait? Join us now and start sharing your items with your neighbors!
      </p>
      <p>It's easy, fast, and convenient!</p>
      <LoginWithGoogle getUser={getUser} />
    </section>
  );
}
