import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const StatusModal = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #b300b3",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          color="secondary"
        >
          {props.state.status}
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, mb: 3 }}
          color="secondary"
        >
          {props.state.message}
        </Typography>

        <Link to="/">
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginRight: "10px" }}
          >
            Close
          </Button>
        </Link>
      </Box>
    </Modal>
  );
};

export default StatusModal;
