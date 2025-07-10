import React from "react";

type Props = {
  users: string[]; // names of users (or you can use image URLs if you prefer)
};

const AvatarGroup: React.FC<Props> = ({ users }) => {
  return (
    <div className="flex -space-x-2">
      {users.map((name, index) => (
        <div
          key={index}
          title={name}
          className="w-7 h-7 rounded-full border-2 border-white bg-gray-300 text-xs text-white flex items-center justify-center font-semibold"
        >
          {getInitials(name)}
        </div>
      ))}
    </div>
  );
};

// Helper to get initials from name
const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length >= 2
    ? parts[0][0] + parts[1][0]
    : parts[0].slice(0, 2);
};

export default AvatarGroup;
