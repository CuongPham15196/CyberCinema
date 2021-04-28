import React, { useState,useEffect } from "react";
import {Drawer,CssBaseline,List,Divider,ListItem,ListItemIcon,ListItemText,Collapse,Avatar} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import AppsIcon from '@material-ui/icons/Apps';
import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavHashLink as NavLink } from "react-router-hash-link";
import useStyles from "./style"
import Managerment from "Pages/AdminTemplate/UserManager";



export default function SideMenuComp() {
  const classes = useStyles();
  const [isUser, setOpenUser] = useState(false);
  const [user,setUser]=useState(null)
  const handleSetUser = () =>{
     if(JSON.parse(localStorage.getItem("UserAdmin"))){
         setUser(JSON.parse(localStorage.getItem("UserAdmin")).hoTen);
         setOpenUser(true)
     } else{
         setUser("Dang Nhap")
         setOpenUser(false)
     }
  }
  const handleIsUserMenu = () => {
    setOpenUser((prevOpen) => !prevOpen);
  };
  const [ManagerUser,setQLND] = useState(true);
  const handleQLNDMenu = () =>{
      setQLND(!ManagerUser)
  }
  useEffect(() => {
    handleSetUser()
      return () => {
          
      }
  }, [user])
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
          <div className={classes.toolbar} />
        <List className={classes.noPaddingTop} >
        <NavLink className={classes.navLink} smooth to="/dash-board" exact style={{textDecoration:"none"}}>
        <ListItem className={classes.dashboard}   button>
              <ListItemIcon><AppsIcon className={classes.colorWhite}/></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            </NavLink>
        </List>
        <Divider/>
        <List className={classes.noPaddingTop}>  
            <Divider/>  
            <ListItem className={classes.hover} button onClick={() => handleIsUserMenu()}>
            <Avatar alt={user} src="/static/images/avatar/1.jpg" className={classes.avatar}/>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={user} />
              { isUser != null ? isUser ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
          <Collapse component="li" in={isUser} timeout="auto" unmountOnExit >
            <List disablePadding>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><AccessibilityNewIcon className={classes.colorWhite}/></ListItemIcon>
                    <ListItemText primary={"Role: Admin"}></ListItemText>
                </ListItem>
                <ListItem button  className={classes.nested} >
                    <ListItemIcon><EditIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Edit Profile"}></ListItemText>
                </ListItem>
                <ListItem button  className={classes.nested} >
                    <ListItemIcon><SettingsIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Setting"}></ListItemText>
                </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
        <List>
        <ListItem className={classes.hover} button onClick={() => handleQLNDMenu()}>
        <ListItemIcon><AccessibilityNewIcon className={classes.colorWhite}/></ListItemIcon>
              {/* <ListItemText primary={text} /> */}
              <ListItemText primary={"User Manager"} />
              { ManagerUser != null ? ManagerUser ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>
          <Collapse component="li" in={ManagerUser} timeout="auto" unmountOnExit >
            <List disablePadding>
            <NavLink smooth to="/dash-board/user-manager" className={classes.navLink} exact style={{textDecoration:"none"}}>
              <ListItem button  className={classes.nested} >
                    <ListItemIcon><AccessibilityNewIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"List Users"}></ListItemText>
                </ListItem>
                </NavLink>
                {/* <ListItem button  className={classes.nested} >
                    <ListItemIcon><InboxIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Edit Profile"}></ListItemText>
                </ListItem>
                <ListItem button  className={classes.nested} >
                    <ListItemIcon><InboxIcon className={classes.colorWhite} /></ListItemIcon>
                    <ListItemText primary={"Setting"}></ListItemText>
                </ListItem> */}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </div>
  );
}
