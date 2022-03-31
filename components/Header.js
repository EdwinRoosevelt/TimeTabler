import React from "react";

function Header() {
  return (
    <div className="container-fluid bg-dark p-4 mt-4">
      <div className="container text-light d-md-flex align-items-baseline justify-content-between">
        <h1 className="display-2 ml-5">TimeTabler</h1>

        <p className="mt-4">
          Two Minute TimeTables!
        </p>
      </div>
    </div>
  );
}

export default Header;
