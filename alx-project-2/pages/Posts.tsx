// import Header from "@/components/layout/Header";
// import React from "react";

// const Posts = () => {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// };

// export default Posts;
// pages/posts.tsx

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) =>
        setPosts(
          data.map((post: any) => ({
            id: post.id,
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        )
      )
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              userId={post.userId}
              id={post.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsPage;
