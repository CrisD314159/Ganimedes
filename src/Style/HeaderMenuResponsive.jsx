import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }} className="menuLink">
          <MenuItem onClick={handleClose}>Inicio</MenuItem>
        </Link>
        <Link
          to={"/about"}
          style={{ textDecoration: "none" }}
          className="menuLink"
        >
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link
          to={"https://crisdev.web.app/"}
          style={{ textDecoration: "none" }}
          className="menuLink"
        >
          <MenuItem onClick={handleClose}>Creator's Page</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
