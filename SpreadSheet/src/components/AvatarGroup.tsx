import React from "react";
type Props = {
  users: string[];
  maxVisible?: number; 
};

const AvatarGroup: React.FC<Props> = ({ users, maxVisible = 3 }) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - visibleUsers.length;

  return (
    <div className="flex items-center -space-x-2">
      {visibleUsers.map((name, index) => (
        <div
          key={index}
          title={name}
          className="w-7 h-7 rounded-full border-2 border-white bg-gray-400 text-xs text-white flex items-center justify-center font-semibold shadow-sm"
        >
          {getInitials(name)}
        </div>
      ))}

      {remainingCount > 0 && (
        <div
          title={`${remainingCount} more`}
          className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 text-[11px] text-gray-700 flex items-center justify-center font-medium shadow-sm"
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

// Helper to get initials from name
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length >= 2) return parts[0][0] + parts[1][0];
  return parts[0].slice(0, 2).toUpperCase();
};

export default AvatarGroup;
