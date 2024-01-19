/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { ResetForgotPasswordUrl, ResetPassword, VerifyUrl } from "../../../API/Urls";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const token = queryParams.get("token");

  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleInputChange = (field, value) => {
    setPasswords((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);

    if (token) {
      axios
        .post(ResetForgotPasswordUrl, passwords, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          history.push("/sign-in");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const userData = JSON.parse(localStorage.getItem("userData"));

      if (!userData || !userData.accesstoken) {
        console.error("Invalid or missing access token in localStorage");
        return;
      }

      axios
        .post(ResetPassword, passwords, {
          headers: {
            Authorization: `Bearer ${userData.accesstoken || ""}`,
          },
        })
        .then((res) => {
          toast.success(res.data.message);
          history.push("/sign-in");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    if (token) {
      axios
        .post(VerifyUrl + token)
        .then((res) => {})
        .catch((err) => {
          toast.error(err.response.data.message);
          history.push("/sign-in");
        });
    }
  }, [token, history]);

  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        border="2px solid blue"
        width="500px"
        padding="50px"
        borderRadius="25px"
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bgcolor="white"
      >
        <Typography variant="h4" color="blue" mb={4}>
          Password Reset
        </Typography>

        {loading ? (
          <Box textAlign="center" width="200px">
            <CircularProgress size="xl" />
          </Box>
        ) : (
          <Box>
            {token ? (
              <>
                <FormControl mb={4}>
                  <InputLabel>New Password</InputLabel>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    value={passwords.new_password}
                    onChange={(e) =>
                      handleInputChange("new_password", e.target.value)
                    }
                  />
                </FormControl>

                <FormControl mb={4}>
                  <InputLabel>Confirm New Password</InputLabel>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    value={passwords.confirm_password}
                    onChange={(e) =>
                      handleInputChange("confirm_password", e.target.value)
                    }
                  />
                </FormControl>
              </>
            ) : (
              <>
                <FormControl mb={4}>
                  <InputLabel>Old Password</InputLabel>
                  <Input
                    type="password"
                    placeholder="Enter old password"
                    value={passwords.old_password}
                    onChange={(e) =>
                      handleInputChange("old_password", e.target.value)
                    }
                  />
                </FormControl>
                <FormControl mb={4}>
                  <InputLabel>New Password</InputLabel>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    value={passwords.new_password}
                    onChange={(e) =>
                      handleInputChange("new_password", e.target.value)
                    }
                  />
                </FormControl>

                <FormControl mb={4}>
                  <InputLabel>Confirm New Password</InputLabel>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    value={passwords.confirm_password}
                    onChange={(e) =>
                      handleInputChange("confirm_password", e.target.value)
                    }
                  />
                </FormControl>
              </>
            )}

            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PasswordReset;
