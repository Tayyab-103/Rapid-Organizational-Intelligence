/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  Image,
  Link,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../store/reducer/auth.reducer";
import { FaEthereum } from "react-icons/fa";
import { ThemeEditor } from "./ThemeEditor";
// import SearchBar from "components/SearchBar"; 
// import SidebarResponsive from "components/sidebar/Sidebar"; 
import SidebarResponsive from "../sidebar/Sidebar"; 
import PropTypes from "prop-types";

export default function HeaderLinks(props) {
  const name = useSelector((state) => state.auth.user?.name);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = navigate?.location?.pathname;
  const handleLogout = () => {
    localStorage.removeItem("userData");
    dispatch(clearUser());
    navigate.push("/sign-in");
  };

  const { secondary } = props;
  const theme = useTheme();

  return (
    <div
      style={{
        width: { sm: "100%", md: "auto" },
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: theme.palette.background.default,
        flexWrap: secondary ? { base: "wrap", md: "nowrap" } : "unset",
        padding: "10px",
        borderRadius: "30px",
        boxShadow: theme.shadows[3],
      }}
    >
      {/* {path === "/admin/default" && (
        <SearchBar
          mb={secondary ? { base: "10px", md: "unset" } : "unset"}
          me="10px"
          borderRadius="30px"
        />
      )} */}
      <div
        style={{
          backgroundColor:
            theme.palette.mode === "light" ? "secondaryGray.300" : "navy.900",
          display: secondary ? "flex" : "none",
          borderRadius: "30px",
          marginLeft: "auto",
          padding: "6px",
          alignItems: "center",
          marginRight: "6px",
        }}
      >
        <div
          style={{
            backgroundColor:
              theme.palette.mode === "light" ? "white" : "navy.800",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "30px",
            marginRight: "7px",
            height: "29px",
            width: "29px",
          }}
        >
          <FaEthereum
            color={theme.palette.mode === "light" ? "gray.700" : "white"}
            size="14px"
          />
        </div>
        <Typography
          variant="body2"
          color={theme.palette.mode === "light" ? "gray.700" : "white"}
          fontWeight="700"
          marginRight="6px"
        >
          1,924
          <Typography
            variant="body2"
            color={theme.palette.mode === "light" ? "gray.700" : "white"}
            fontSize="sm"
          >
            {" "}
            ETH
          </Typography>
        </Typography>
      </div>
      <SidebarResponsive routes={routes} />
      {/* <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdNotificationsNone}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          me={{ base: "30px", md: "unset" }}
          minW={{ base: "unset", md: "400px", xl: "450px" }}
          maxW={{ base: "360px", md: "unset" }}
        >
          <Flex jusitfy="space-between" w="100%" mb="20px">
            <Text fontSize="md" fontWeight="600" color={textColor}>
              Notifications
            </Text>
            <Text
              fontSize="sm"
              fontWeight="500"
              color={textColorBrand}
              ms="auto"
              cursor="pointer"
            >
              Mark all read
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="Horizon UI Dashboard PRO" aName="Alicia" />
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent
                info="Horizon Design System Free"
                aName="Josh Henry"
              />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton p="0px">
          <Icon
            mt="6px"
            as={MdInfoOutline}
            color={navbarIcon}
            w="18px"
            h="18px"
            me="10px"
          />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          me={{ base: "30px", md: "unset" }}
          borderRadius="20px"
          bg={menuBg}
          border="none"
          mt="22px"
          minW={{ base: "unset" }}
          maxW={{ base: "360px", md: "unset" }}
        >
          <Image src={navImage} borderRadius="16px" mb="28px" />
          <Flex flexDirection="column">
            <Link
              w="100%"
              href="https://horizon-ui.com/pro?ref=horizon-chakra-free"
            >
              <Button w="100%" h="44px" mb="10px" variant="brand">
                Buy Horizon UI PRO
              </Button>
            </Link>
            <Link
              w="100%"
              href="https://horizon-ui.com/documentation/docs/introduction?ref=horizon-chakra-free"
            >
              <Button
                w="100%"
                h="44px"
                mb="10px"
                border="1px solid"
                bg="transparent"
                borderColor={borderButton}
              >
                See Documentation
              </Button>
            </Link>
            <Link
              w="100%"
              href="https://github.com/horizon-ui/horizon-ui-chakra"
            >
              <Button
                w="100%"
                h="44px"
                variant="no-hover"
                color={textColor}
                bg="transparent"
              >
                Try Horizon Free
              </Button>
            </Link>
          </Flex>
        </MenuList>
      </Menu> */}
      <ThemeEditor
        navbarIcon={theme.palette.mode === "light" ? "gray.400" : "white"}
      />
      <Menu>
        <MenuButton p="0px">
          <Avatar
            sx={{
              "&:hover": { cursor: "pointer" },
              backgroundColor: theme.palette.primary.main,
              width: "40px",
              height: "40px",
            }}
            color="white"
            name="Adela Parkson"
          />
        </MenuButton>
        <MenuList
          sx={{
            boxShadow: theme.shadows[3],
            padding: "0px",
            marginTop: "10px",
            borderRadius: "20px",
            backgroundColor: theme.palette.background.default,
            border: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px",
            }}
          >
            <Typography
              style={{
                paddingLeft: "20px",
                paddingTop: "16px",
                paddingBottom: "10px",
                width: "100%",
                borderBottom: `1px solid ${borderColor}`,
                fontSize: "sm",
                fontWeight: "700",
                color: textColor,
              }}
            >
              👋&nbsp; Hey, {name ? name : "User!"}
            </Typography>
            <div
              style={{
                paddingLeft: "14px",
              }}
            >
              {/* <MenuItem
                _hover={{ bg: "none" }}
                _focus={{ bg: "none" }}
                borderRadius="8px"
                px="14px"
              >
                <Text fontSize="sm">Profile Settings</Text>
              </MenuItem> */}
              <MenuItem
                style={{
                  "&:hover": { background: "none" },
                  "&:focus": { background: "none" },
                }}
                onClick={() => {
                  navigate.push("/forget-password/verify");
                }}
              >
                <Typography fontSize="sm" fontWeight={"700"}>
                  Reset Password
                </Typography>
              </MenuItem>
              <MenuItem
                style={{
                  "&:hover": { background: "none" },
                  "&:focus": { background: "none" },
                }}
                onClick={() => handleLogout()}
              >
                <Typography fontSize="sm" color="red.400">
                  Log out
                </Typography>
              </MenuItem>
            </div>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
