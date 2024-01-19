/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Box, Flex, Icon, Text } from "@mui/material";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import Footer from "components/footer/FooterAuth";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";
import { FaChevronLeft } from "react-icons/fa";

function AuthIllustration(props) {
  const { children, illustrationBackground } = props;

  return (
    <Flex position="relative" height="max-content">
      <Flex
        height={{
          sm: "initial",
          md: "unset",
          lg: "100vh",
          xl: "97vh",
        }}
        width="100%"
        maxWidth={{ md: "66%", lg: "1313px" }}
        marginX="auto"
        paddingTop={{ sm: "50px", md: "0px" }}
        paddingLeft={{ lg: "30px", xl: "0px" }}
        paddingRight={{ xl: "70px" }}
        justifyContent="start"
        flexDirection="column"
      >
        <RouterLink
          to="/admin"
          style={{
            width: "fit-content",
            marginTop: "40px",
            textDecoration: "none",
          }}
        >
          <Flex
            alignItems="center"
            paddingLeft={{ base: "25px", lg: "0px" }}
            paddingTop={{ lg: "0px", xl: "0px" }}
            width="fit-content"
          >
            <Icon
              as={FaChevronLeft}
              marginRight="12px"
              height="13px"
              width="8px"
              color="secondaryGray.600"
            />
            <Text marginLeft="0px" fontSize="sm" color="secondaryGray.600">
              Back to Simmmple
            </Text>
          </Flex>
        </RouterLink>
        {children}
        <Box
          display={{ base: "none", md: "block" }}
          height="100%"
          minHeight="100vh"
          width={{ lg: "50vw", "2xl": "44vw" }}
          position="absolute"
          right="0px"
        >
          <Flex
            backgroundColor={`url(${illustrationBackground})`}
            justifyContent="center"
            alignItems="flex-end"
            width="100%"
            height="100%"
            backgroundSize="cover"
            backgroundPosition="50%"
            position="absolute"
            borderBottomLeftRadius={{ lg: "120px", xl: "200px" }}
          ></Flex>
        </Box>
        {/* <Footer /> */}
      </Flex>
      <FixedPlugin />
    </Flex>
  );
}

AuthIllustration.propTypes = {
  illustrationBackground: PropTypes.string,
  image: PropTypes.any,
};

export default AuthIllustration;
