import React from "react";
import AdminNavbar from "../_components/AdminNavbar";

function layout({ children }) {
  return (
    <div>
      <AdminNavbar>{children}</AdminNavbar>
    </div>
  );
}

export default layout;
