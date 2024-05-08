import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";

export default function PostToPage() {
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const userId = auth.currentUser.uid;
          const newPost = {
            title,
            description,
            userId,
          };
          await addDoc(collection(db, "posts"), newPost);
        } catch (error) {
          console.error("Error submitting message:", error);
        }
      }}
    >
      <label>
        <input
          type="text"
          name="title"
          placeholder="Message Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        <textarea
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
