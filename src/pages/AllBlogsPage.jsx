import React, { useEffect, useState } from "react";
import "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // db'yi içe aktar

const AllBlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "blogs"), orderBy("timestamp", "desc")); // Zaman damgasına göre sıralama
      const querySnapshot = await getDocs(q);
      const fetchedBlogs = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        fetchedBlogs.push({ id: doc.id, ...doc.data() });
      });
      setBlogs(fetchedBlogs);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <p>{blog.content}</p>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default AllBlogsPage;
