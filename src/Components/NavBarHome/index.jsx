import React, { useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useStyles } from "./style";
import { NavLink } from "react-router-dom";
import logo from "Assets/Images/logo1.png";
import { Box, Button } from "@material-ui/core";

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <NavLink className={classes.title} to="/">
            <Typography variant="h6" noWrap>
              <img className={classes.logo} src={logo} />
              CyberCinema
            </Typography>
          </NavLink>

          <Box display={{ xs: "none", md: "block" }} style={{ flexGrow: 1 }}>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Trang chủ</Button>
            </NavLink>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Lịch chiếu</Button>
            </NavLink>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Cụm rạp</Button>
            </NavLink>
            <NavLink exact to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.navLink}>Liên hệ</Button>
            </NavLink>
          </Box>
          <Box display={{ xs: "none", md: "block" }} className="text-right" style={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Button className={classes.navLinkBtn}>Đăng nhập</Button>
            </NavLink>
          </Box>

          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              color="secondary"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} color="secondary">
            {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Trang chủ</Button>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Cụm rạp</Button>
        </NavLink>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button className={classes.navLink}>Liên hệ</Button>
        </NavLink>
        <Divider />
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button className={classes.navLinkBtn}>Đăng nhập</Button>
        </NavLink>
      </Drawer>
    </div>
  );
}
