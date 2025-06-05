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
      </ul>
    </div>
  );
};

export default Header;
