import React from "react";
import { Grid } from "@material-ui/core";
import {useStyles} from './styles';
import SideMenuComp from "Components/SideBarAdmin";
import { Redirect, Route } from "react-router-dom";


function AdminLayout(props) {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
       <Grid
       item 
       lg={2}
       >
         <SideMenuComp/>
       </Grid>
       <Grid
       item 
       lg={10}
       >
        {props.children}
       </Grid>

    </Grid>
  )

}

function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <AdminLayout>
              <Component {...propsComponent} />
            </AdminLayout>
          );
        }
        return <Redirect to="/auth" />;
      }}
    />
  );
}

export default AdminTemplate;
