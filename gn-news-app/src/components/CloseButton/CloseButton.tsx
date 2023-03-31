import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleClose:
    | (() => void)
    | ((event: React.KeyboardEvent | React.MouseEvent) => void);
}

export const CloseButton = ({ handleClose }: Props) => (
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
);
