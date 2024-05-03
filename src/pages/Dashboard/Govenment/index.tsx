import { Img, Button, Heading } from "components";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

export default function GovernmentPage() {
  const [currentPage, setCurrentPage] = useState<string>('page1');

  const togglePage = () => {
    setCurrentPage(currentPage === 'page1' ? 'page2' : 'page1');
  };
  return (
    <div>
      {currentPage === 'page2' ? (
        <Page1 togglePage={togglePage} />
      ) : (
        <Page2 togglePage={togglePage} />
      )}
    </div>
  );
}
