import React from "react";
import { Redirect, Route } from "react-router-dom";

function AdminLayout(props) {
  return <div>{props.children}</div>;
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
