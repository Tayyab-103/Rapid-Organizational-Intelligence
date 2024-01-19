/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "routes.js";
import { Box, useTheme } from "@mui/system";

export default function Auth() {
  const theme = useTheme();
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const getRoute = () => {
    return window.location.pathname !== "/auth/full-screen-maps";
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      if (prop.collapse) {
        return getRoutes(prop.items);
      }
      if (prop.category) {
        return getRoutes(prop.items);
      } else {
        return null;
      }
    });
  };

  const authBg = theme.palette.mode === "light" ? theme.palette.common.white : theme.palette.navBackground;

  return (
    <Box>
      <Box
        bgcolor={authBg}
        float="right"
        minHeight="100vh"
        height="100%"
        position="relative"
        width="100%"
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        {getRoute() ? (
          <Box mx="auto" minHeight="100vh">
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/auth" to="/auth/sign-in/default" />
            </Switch>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
