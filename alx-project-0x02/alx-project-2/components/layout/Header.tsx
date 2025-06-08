import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <ul>
        <Link href="/home">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/posts">
          <li>Posts</li>
        </Link>
        <Link href="/users">
          <li>Users</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
