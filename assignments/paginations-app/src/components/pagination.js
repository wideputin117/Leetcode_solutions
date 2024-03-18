import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import PaginationButton from "./paginationbutton";
import{ motion } from 'framer-motion';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    const button = document.querySelector(`.pagination button[data-page="${pageNumber}"]`);
    button.classList.add("active");

    const otherButtons = document.querySelectorAll(".pagination button:not([data-page='${pageNumber}'])");
    otherButtons.forEach((button) => button.classList.remove("active"));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <Suspense fallback={<div>Loading...</div>}>
        <tbody>
          {currentPosts.map((post) => (
          <motion.tr
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          
          <td>{post.id}</td>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </motion.tr>
          ))}
        </tbody>
        </Suspense>
      </table>

      <PaginationButton currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate} posts={posts} />
    </div>
  );
};

export default Posts;