import Modal from "@/app/components/Modal";
import { auth, db } from "@/app/firebaseConfig";
import Edit from "@/app/svgs/Edit";
import Trash from "@/app/svgs/Trash";
import { deleteDoc, doc } from "firebase/firestore";
import React, { useState } from "react";

export default function Post({ post, user }) {
  const [show, setShow] = useState(false);

  function onShow(bool) {
    setShow(bool);
  }

  async function handleDelete() {
    const postRef = doc(db, "posts", post.id);
    try {
      await deleteDoc(postRef);
    } catch (error) {
      console.error("error deleting doc", error);
    }
  }

  return (
    <>
      {show && <Modal id={post.id} onShow={onShow} isNew={false} />}
      <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-75 mt-20 mx-auto rounded-lg overflow-hidden font-[sans-serif]">
        <p>{post.displayName || "Username unavailable"}</p>
        <div className="px-4 py-6">
          <h3 className="mt-2">{post.title}</h3>
          <p>{post.description}</p>
          {user && user.uid === post.userId && (
            <Trash handleDelete={handleDelete} />
          )}
          {user && user.uid === post.userId && (
            <div onClick={() => setShow(true)}>
              <Edit />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
