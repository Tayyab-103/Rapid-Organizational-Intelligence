/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";

const EmailModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      toast.error("Please Enter Your Email");
      return;
    }

    const Email = {
      email: email,
    };

    onSubmit(Email);
    setEmail("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Forget Password</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter your Email</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EmailModal;
