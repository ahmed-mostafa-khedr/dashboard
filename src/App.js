import Dashboard from "./Components/dashboart";
import NavbarCompo from "./Components/navCompo";
import Sidebar from "./Components/sideBarCopo";
import React from "react";

function App() {
  return (
    <>
      <NavbarCompo />
      <div class="container-fluid" id="main">
        <div class="row row-offcanvas row-offcanvas-left">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
