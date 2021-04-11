import { IconButton, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import SideDrawer from "./SideDrawer";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);

    
  };

  

 
  return (
    <div >
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#2f2f2f",
          boxShadow: "none",
          padding: "10px 0px",
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="Menu"
            color="inherit"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className="header-logo">
            <div className="header_logo_venue">Max Richter</div>
            <div>Consert</div>
          </div>
          <SideDrawer open={drawerOpen} onClose={toggleDrawer} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
