// Header.jsx
"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginWithGoogle from "./LoginWithGoogle";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useEffect, useState } from "react";

export default function Header({ user, getUser }) {
  const [user2, setUser2] = useState(null)
  useEffect(()=>{setUser2(user)}, [user])
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Community Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user2 && <LoginWithGoogle getUser={getUser} />}
            {user2 && (
              <div className="btn btn-primary" onClick={() => signOut(auth)}>
                Sign Out
              </div>
            )}
            {user2 && <Link href="/dashboard">Dashboard</Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
      {console.log(user2)}
    </Navbar>
  );
}
