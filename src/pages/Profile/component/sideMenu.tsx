import * as React from "react";

interface MenuItemProps {
  children: React.ReactNode;
  className?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className = "" }) => {
  return <div className={`mt-9 text-sm ${className}`}>{children}</div>;
};

const ProfileSideMenu: React.FC = () => {
  const menuItems = [
    { label: "Personal Info" },
    { label: "Immigration details" },
    { label: "Language" },
    { label: "Education & Employment", className: "self-stretch" },
    { label: "Housing situation" },
    { label: "Social integration" },
    { label: "Delete Account", className: "font-medium text-red-500" },
  ];

  return (
    <div className="flex flex-col items-center self-start px-5 mt-9 text-base text-center text-black">
      <div className="justify-center px-5 py-4 text-white bg-indigo-300 rounded-3xl">
        My Profile
      </div>
      {menuItems.map((item, index) => (
        <MenuItem key={index} className={item.className}>
          {item.label}
        </MenuItem>
      ))}
    </div>
  );
};

export default ProfileSideMenu;