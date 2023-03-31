import { DialogTitle } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import { CloseButton } from "components/CloseButton/CloseButton";

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
      <Button
        sx={{
          color: "wheat",
          padding: "5px",
          height: "100%",
        }}
        onClick={handleClickOpen}
      >
        {buttonComponent}
      </Button>

      <Dialog open={open}>
        <DialogTitle sx={{ m: 0, p: 5, bgcolor: "wheat" }}>
          {children}
          <CloseButton handleClose={handleClose} />
        </DialogTitle>
      </Dialog>
    </>
  );
};
