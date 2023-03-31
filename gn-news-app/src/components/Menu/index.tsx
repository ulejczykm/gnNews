import "./styles.scss";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import { CloseButton } from "components/CloseButton/CloseButton";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";

const countries = [
  { name: "Chiny", code: "CN" },
  { name: "Belgia", code: "BE" },
  { name: "Kolumbia", code: "CO" },
  { name: "Francja", code: "FR" },
  { name: "India", code: "IN" },
  {
    name: "Polska",
    code: "PL",
  },
  { name: "Serbia", code: "RS" },
  { name: "Turcja", code: "TR" },
  { name: "Ukraina", code: "UA" },
  { name: "USA", code: "US" },
];

export const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(open);
    };

  return (
    <div className="menuWraper">
      <Button onClick={toggleDrawer(true)}>
        <FlagCircleIcon
          sx={{
            color: "wheat",
            width: 44,
            height: 44,
            "@media (max-width:480px)": {
              width: 32,
              height: 32,
            },
          }}
        />
      </Button>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "wheat",
            height: "100%",
          }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <CloseButton handleClose={toggleDrawer(false)} />

          <ul className="menuContainer">
            {countries.map(({ name, code }) => (
              <li className="" key={code}>
                <Link className="listItem" to={`/country/${code}`}>
                  <img
                    className="flag"
                    src={`/assets/flags/${code}.svg`}
                    alt={`${name} flaga`}
                  />

                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </div>
  );
};
