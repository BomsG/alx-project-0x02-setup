import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    {
      title: "Getting Started",
      content: "Learn how to set up your project and get started with Next.js.",
    },
    {
      title: "Explore Features",
      content: "Discover powerful features like routing, API routes, and more.",
    },
  ]);

  const handleAddPost = (newPost: { title: string; content: string }) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div className="p-6">
      <Header />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setIsModalOpen(true)}
        >
          + New Post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
