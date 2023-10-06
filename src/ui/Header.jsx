import { useNavigate, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import SearchOrder from "../features/order/SearchOrder";
import { Button as Mybutton } from "./Button";
import {
  Basket2,
  ChevronDown,
  List,
  Person,
  MenuApp,
  BoxArrowRight,
  PersonAdd,
  Gear,
} from "react-bootstrap-icons";

import {
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";

function Header() {
  return (
    <header className="bg-white flex max-w-full justify-between items-center py-3 sticky px-8  w-full ">
      <div className="flex items-center justify-between  gap-3 sm:gap-6 max-w-full">
        <div className=" flex items-baseline gap-3 flex-row-reverse sm:flex-row">
          <Link
            to="/"
            className="text-md text-green font-bold space-x-2 flex items-center"
          >
            🦈
            <span className="text-lg uppercase">Tuvue</span>
          </Link>

          <div className="hidden sm:block">
            <SearchOrder placeholder="search..." type="primary" />
          </div>

          {/* SHOULD THIS BE A BUTTON?? iNTENTION IS TO MAKE A DROPDOWN MENU */}
          {/* <button className="md:flex md:text-lg items-center gap-2 text-md hidden">
          <List className="text-green text-sm sm:text-lg " />
          Categories
        </button> */}
          <Category />
        </div>
      </div>

      <nav className="flex items-center justify-between  space-x-6 max-w-full">
        <NavLink className="hidden sm:inline-block">
          <Mybutton type="primary" to="selling">
            Sale
          </Mybutton>
        </NavLink>

        <NavLink
          to="/myads"
          className="text-sm md:text-base text-black font-semibold border border-green px-2 py-1 rounded-md"
        >
          My Ads
        </NavLink>

        <NavLink to="/cart">
          <Basket2 className="text-green text-lg sm:hidden" />

          <p className="bg-white p-2 rounded-md sm:flex items-center gap-2 hidden">
            <Basket2 className="text-green md:text-base" />
            <span className="text-sm md:text-base text-black font-semibold">
              Cart: 4
            </span>
          </p>
        </NavLink>

        <NavLink>
          <AccountMenu />
        </NavLink>
      </nav>
    </header>
  );
}

function Category() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#4c7c7d", fontFamily: "Mullish" }}
      >
        <div className="hidden md:flex  text-sm md:text-lg items-center gap-2 text-md">
          <List className="text-green text-sm sm:text-lg " />
          Categories
        </div>
        <MenuApp className="text-green text-2xl sm:hidden" />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#383634", fontFamily: "Mullish", fontSize: "1.25rem" }}
        >
          Common
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#383634", fontFamily: "Mullish", fontSize: "1.25rem" }}
        >
          Aquarium
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          sx={{ color: "#383634", fontFamily: "Mullish", fontSize: "1.25rem" }}
        >
          Sea food
        </MenuItem>
      </Menu>
    </div>
  );
}

function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
        {/* <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            
          </IconButton>
        </Tooltip> */}
        <div onClick={handleClick} className="rounded-full">
          <p className=" bg-white p-2 rounded-md sm:flex sm:items-center sm:gap-2 hidden">
            <span className="text-sm md:text-base text-black font-semibold">
              Denis
            </span>
            <ChevronDown className="text-green md:text-base" />
          </p>
        </div>
        <Person
          className="sm:hidden text-green text-xl"
          onClick={handleClick}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Gear fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BoxArrowRight fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}

export default Header;
