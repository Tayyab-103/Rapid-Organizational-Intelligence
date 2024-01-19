/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  IconButton,
  Typography,
  useTheme,
  AppBar,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
// import Footer from "components/footer/FooterAdmin";
import Footer from "../../components/footer/FooterAdmin";
import Navbar from "../../components/navbar/NavbarAdmin";
import Sidebar from "../../components/sidebar/Sidebar";
import { SidebarContext } from "../../contexts/SidebarContext";
import routes from "../../routes";

const StyledContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("xl")]: {
    width: `calc(100% - ${theme.drawerWidth}px)`,
  },
}));

const Dashboard = (props) => {
  const filteredRoutes = routes?.filter(
    (route) =>
      route.name !== "Member Data" &&
      route.name !== "Project Data" &&
      route.name !== "Department Teams"
  );

  const { ...rest } = props;
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const theme = useTheme();
  const { pathname } = useLocation();
  const getRoute = () => pathname !== "/admin/full-screen-maps";
  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].items);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].items);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={filteredRoutes} display="none" {...rest} />
        <StyledContainer>
          <Box
            float="right"
            minHeight="100vh"
            height="100%"
            overflow="auto"
            position="relative"
            maxHeight="100%"
            width={{ base: "100%", xl: `calc(100% - ${theme.drawerWidth}px)` }}
            maxWidth={{ base: "100%", xl: `calc(100% - ${theme.drawerWidth}px)` }}
          >
            <Box>
              <Navbar
                logoText={"Horizon UI Dashboard PRO"}
                brandText={getActiveRoute(routes)}
                {...rest}
              />
            </Box>

            {getRoute() ? (
              <Box mx="auto" p={{ base: "20px", md: "30px" }} minH="100vh" pt="50px">
                <Switch>
                  {routes.map((prop, key) => (
                    <Route
                      path={prop.layout + prop.path}
                      component={prop.component}
                      key={key}
                    />
                  ))}
                  <Redirect from="/" to="/admin/default" />
                </Switch>
              </Box>
            ) : null}

            <Box>
              <Footer />
            </Box>
          </Box>
        </StyledContainer>
      </SidebarContext.Provider>
    </Box>
  );
};

export default Dashboard;
