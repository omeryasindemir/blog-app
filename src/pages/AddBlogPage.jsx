import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../firebase";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore"; 
import { db } from "../firebase"; // db'yi içe aktar

const AddBlogPage = () => {
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("token") !== "1") {
      navigate("/login")
    }
  },[])

  const handleBlogAdd = async (e) => {
    e.preventDefault()

    const newBlog = {
      content: content,
      timestamp: serverTimestamp() // Firestore tarafından sunulan zaman damgası
    };

    const docRef = await addDoc(collection(db, "blogs"), newBlog);
    navigate("/")
  }

  return (
    <React.Fragment>
      <div className="login_wrapper">
        <h1>Post to <i>felX</i></h1>
        <br />
        <form onSubmit={handleBlogAdd}>
          <textarea name="content" id="" required onChange={e => setContent(e.target.value)}></textarea>
          <button type="submit">🔼 Post</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddBlogPage;
