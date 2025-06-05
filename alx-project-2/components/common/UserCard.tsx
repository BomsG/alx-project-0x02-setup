// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-700">📧 {email}</p>
      <p className="text-gray-500 text-sm mt-1">
        🏠 {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
