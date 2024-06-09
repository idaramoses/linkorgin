import { Img, Button, Heading } from "components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import CategorySidebarMenu from "components/Sidebar/categorySidebar";

export default function CommunityPage() {
  const [currentPage, setCurrentPage] = useState<string>('page1');

  const togglePage = () => {
    setCurrentPage(currentPage === 'page1' ? 'page2' : 'page1');
  };
  return (
    <div className="flex flex-row w-full ">
    <div className="w-36 md:hidden">
    <CategorySidebarMenu/>
    </div>
<div className="w-full">
<Page1 togglePage={togglePage} />
  </div>
  </div>
 
  );
}
