/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Typography,
  useTheme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailModal from "./EmailModal";
import axios from "axios";
import { ForgetPasswordUrl } from "../../../API/Urls";
import login from "../../../store/thunk/auth.thunk";

function SignIn() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (email) => {
    axios
      .post(ForgetPasswordUrl, email)
      .then((res) => {
        toast.success("Kindly check your Email");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const handleSignIn = () => {
    if (!email || !password) {
      toast.error("Please enter your email and password");
      return;
    }

    setLoading(true);
    dispatch(login({ email, password, navigate }))
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error", error);
        toast.error(error?.response?.data?.message || "An error occurred");
        setLoading(false);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: theme.spacing(8),
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <FormControl fullWidth>
            <Input
              autoFocus
              required
              id="email"
              name="email"
              type="email"
              placeholder="mail@simmmple.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Input
              required
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Min. 5 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Keep me logged in"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            onClick={handleSignIn}
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <CircularProgress size={20} color="inherit" /> : "Sign In"}
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Typography variant="body2" sx={{ cursor: "pointer" }} onClick={handleOpenModal}>
              Forgot password?
            </Typography>
          </Grid>
        </Grid>
        <EmailModal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
      </Box>
    </Container>
  );
}

export default SignIn;
