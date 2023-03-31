import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";

interface Props {
  children: React.ReactNode;
  buttonComponent: React.ReactNode;
}
export const Popup = ({ children, buttonComponent }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>{buttonComponent}</Button>

      <Dialog open={open}>
        <DialogTitle sx={{ m: 0, p: 5, bgcolor: "wheat" }}>
          {children}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 4,
              top: 4,
              color: "black",
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      </Dialog>
    </>
  );
};
